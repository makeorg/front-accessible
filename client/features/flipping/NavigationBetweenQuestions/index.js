// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import React from 'react';
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
import { SliderNavigationBetweenQuestions } from './Slider';

type Props = {
  question: QuestionType,
};

export const NavigationBetweenQuestions = ({ question }: Props) => {
  const isMobile = useMobile();
  const hasSiblingQuestions = question.operation.questions.length > 0;
  const isNavigationBetweenQuestionActive: boolean = checkIsFeatureActivated(
    OPERATION_MULTI_QUESTIONS_NAVIGATION,
    question.activeFeatures
  );

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
                    ? getResultsLink(
                        siblingQuestion.country,
                        siblingQuestion.language,
                        siblingQuestion.questionSlug
                      )
                    : getConsultationLink(
                        siblingQuestion.country,
                        siblingQuestion.language,
                        siblingQuestion.questionSlug
                      )
                }
                aria-current={
                  siblingQuestion.questionId === question.questionId
                }
              >
                {siblingQuestion.question}
              </ConsultationNavLinkStyle>
            </ConsultationNavItemStyle>
          ))}
        </ConsultationNavListStyle>
      </nav>
    </>
  );
};
