// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { getConsultationLink, getResultsLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { type QuestionType } from 'Shared/types/question';
import {
  ConsultationNavItemStyle,
  ConsultationNavLinkStyle,
  ConsultationNavListStyle,
} from 'Client/features/consultation/Styled/Navigation';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { OPERATION_MULTI_QUESTIONS_NAVIGATION } from 'Shared/constants/featureFlipping';
import { QuestionService } from 'Shared/services/Question';
import { loadQuestion } from 'Shared/store/actions/sequence';
import { useSelector, useDispatch } from 'react-redux';
import { SliderNavigationBetweenQuestions } from './Slider';

type Props = {
  question: QuestionType,
};

export const NavigationBetweenQuestions = ({ question }: Props) => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const questions = useSelector((state: StateRoot) => state.questions);
  const hasSiblingQuestions = question.operation.questions.length > 0;
  const isNavigationBetweenQuestionActive: boolean = checkIsFeatureActivated(
    OPERATION_MULTI_QUESTIONS_NAVIGATION,
    question.activeFeatures
  );

  useEffect(() => {
    // Try to find related questions
    if (hasSiblingQuestions) {
      question.operation.questions.map(async relativeQuestion => {
        // Check is question has been already fetched
        const isRelQuestionInState =
          questions[relativeQuestion.questionSlug] !== undefined;
        // If not, they fetch/store it
        if (!isRelQuestionInState) {
          const siblingQuestionDetails = await QuestionService.getDetail(
            relativeQuestion.questionSlug
          );
          if (siblingQuestionDetails) {
            dispatch(loadQuestion(siblingQuestionDetails));
          }
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  if (!isNavigationBetweenQuestionActive || !hasSiblingQuestions) {
    return null;
  }

  if (isMobile) {
    return <SliderNavigationBetweenQuestions question={question} />;
  }

  return (
    <>
      <ScreenReaderItemStyle>
        {i18n.t('consultation.navigation.introduction', {
          name: question.wording.title,
        })}
      </ScreenReaderItemStyle>
      <nav>
        <ConsultationNavListStyle>
          {question.operation.questions.map(siblingQuestion => (
            <ConsultationNavItemStyle
              isSelected={siblingQuestion.questionId === question.questionId}
              key={siblingQuestion.questionId}
            >
              <ConsultationNavLinkStyle
                to={
                  siblingQuestion.displayResults
                    ? getResultsLink(country, siblingQuestion.questionSlug)
                    : getConsultationLink(country, siblingQuestion.questionSlug)
                }
                aria-current={
                  siblingQuestion.questionId === question.questionId
                }
                lang={siblingQuestion.language}
              >
                {siblingQuestion.shortTitle
                  ? siblingQuestion.shortTitle
                  : siblingQuestion.question}
              </ConsultationNavLinkStyle>
            </ConsultationNavItemStyle>
          ))}
        </ConsultationNavListStyle>
      </nav>
    </>
  );
};
