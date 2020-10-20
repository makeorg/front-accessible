// @flow
import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js';
import { type StateRoot } from 'Shared/store/types';
import { type SliderParamsType } from 'Shared/types/views';
import { i18n } from 'Shared/i18n';
import { getConsultationLink, getResultsLink } from 'Shared/helpers/url';
import { type QuestionType } from 'Shared/types/question';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { useSlider } from 'Client/hooks/useSlider';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  ConsultationNavItemStyle,
  ConsultationNavLinkStyle,
  ConsultationNavListStyle,
} from 'Client/features/consultation/Styled/Navigation';
import { useSelector } from 'react-redux';

type Props = {
  question: QuestionType,
};

const CONSULTATION_SLIDER: string = 'consultation';
const ConsultationNavSliderParams: SliderParamsType = {
  slidesToShow: 1.5,
  interactiveChildren: {
    links: true,
  },
};

export const SliderNavigationBetweenQuestions = ({ question }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
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
    <>
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
                  to={
                    siblingQuestion.displayResults
                      ? getResultsLink(country, siblingQuestion.questionSlug)
                      : getConsultationLink(
                          country,
                          siblingQuestion.questionSlug
                        )
                  }
                  aria-current={
                    siblingQuestion.questionId === question.questionId
                  }
                >
                  {siblingQuestion.shortTitle
                    ? siblingQuestion.shortTitle
                    : siblingQuestion.question}
                </ConsultationNavLinkStyle>
              </ConsultationNavItemStyle>
            ))}
          </ConsultationNavListStyle>
        </nav>
      </div>
    </>
  );
};
