// @flow
import React, { useEffect } from 'react';
import { getConsultationLink } from 'Shared/helpers/url';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { useSlider } from 'Client/hooks/useSlider';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import {
  ConsultationNavItemStyle,
  ConsultationNavLinkStyle,
  ConsultationNavListStyle,
} from '../../Styled/Navigation';
import {
  ConsultationNavSliderParams,
  ConsultationNavSliderStylesheet,
} from './params';
import { getNavName } from '..';

type Props = {
  question: TypeQuestion,
};

export const SliderNavigationBetweenQuestions = ({ question }: Props) => {
  const hasSiblingQuestions = question.operation.questions.length > 0;

  const slider = useSlider(
    'consultationnav',
    ConsultationNavSliderParams,
    !hasSiblingQuestions
  );

  useEffect(() => {
    const value = question.operation.questions.findIndex(element => {
      const index = element.questionId === question.questionId;
      return index;
    });
    slider.update({ startAt: value });
  }, []);

  return (
    <React.Fragment>
      <ConsultationNavSliderStylesheet />
      <ScreenReaderItemStyle>
        {i18n.t('consultation.navigation.introduction', {
          name: question.wording.title,
        })}
      </ScreenReaderItemStyle>
      <div className="consultationnav">
        <nav data-glide-el="track" className="consultationnav__track">
          <ConsultationNavListStyle
            id="consultationnav_translator"
            className="consultationnav__slides"
          >
            {question.operation.questions.map(siblingQuestion => (
              <ConsultationNavItemStyle
                isSelected={siblingQuestion.questionId === question.questionId}
                key={siblingQuestion.questionId}
                className="consultationnav__slide"
              >
                <ConsultationNavLinkStyle
                  to={getConsultationLink(
                    siblingQuestion.country,
                    siblingQuestion.language,
                    siblingQuestion.questionSlug
                  )}
                  aria-current={
                    siblingQuestion.questionId === question.questionId
                  }
                >
                  {getNavName(
                    siblingQuestion.questionSlug,
                    siblingQuestion.question
                  )}
                </ConsultationNavLinkStyle>
              </ConsultationNavItemStyle>
            ))}
          </ConsultationNavListStyle>
        </nav>
      </div>
    </React.Fragment>
  );
};
