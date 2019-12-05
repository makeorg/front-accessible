// @flow
import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js';
import { type TypeSliderParams } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { getConsultationLink } from 'Shared/helpers/url';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { useSlider } from 'Client/hooks/useSlider';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ConsultationNavItemStyle,
  ConsultationNavLinkStyle,
  ConsultationNavListStyle,
} from 'Client/features/consultation/Styled/Navigation';
import { getNavName } from '..';

type Props = {
  question: TypeQuestion,
};

const CONSULTATION_SLIDER: string = 'consultation';
const ConsultationNavSliderParams: TypeSliderParams = {
  slidesToShow: 1.5,
  interactiveChildren: {
    links: true,
  },
};

export const SliderNavigationBetweenQuestions = ({ question }: Props) => {
  const hasSiblingQuestions = question.operation.questions.length > 0;
  const sliderRef = useRef();
  useSlider(sliderRef, ConsultationNavSliderParams, hasSiblingQuestions);

  useEffect(() => {
    const glider = new Glider(sliderRef.current);
    const value = question.operation.questions.findIndex(element => {
      const index = element.questionId === question.questionId;
      return index;
    });
    glider.scrollItem(value);
  }, []);

  return (
    <React.Fragment>
      <GliderStylesheet />
      <ScreenReaderItemStyle>
        {i18n.t('consultation.navigation.introduction', {
          name: question.wording.title,
        })}
      </ScreenReaderItemStyle>
      <div className={`${CONSULTATION_SLIDER} glider-contain`}>
        <nav className={`${CONSULTATION_SLIDER} glider`} ref={sliderRef}>
          <ConsultationNavListStyle
            className={`${CONSULTATION_SLIDER} glider-track`}
          >
            {question.operation.questions.map(siblingQuestion => (
              <ConsultationNavItemStyle
                isSelected={siblingQuestion.questionId === question.questionId}
                key={siblingQuestion.questionId}
                className={CONSULTATION_SLIDER}
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
