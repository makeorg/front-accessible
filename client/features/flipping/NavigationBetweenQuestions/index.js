// @flow
import { useMobile } from 'Client/hooks/useMedia';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import React from 'react';
import { getConsultationLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import {
  ConsultationNavItemStyle,
  ConsultationNavLinkStyle,
  ConsultationNavListStyle,
} from 'Client/features/consultation/Styled/Navigation';
import { SliderNavigationBetweenQuestions } from './Slider';

type Props = {
  question: TypeQuestion,
};

/** @toDo: remove or refactor after the end of bretagne consultation */
const bretagneNavNames = {
  'bretagne-qualite-vie': 'Qualité de vie',
  'bretagne-ecologique-durable': 'Environnement',
  'bretagne-dynamisme-economique': 'Emploi',
  'bretagne-vivre-ensemble': 'Solidarité',
};

export const getNavName = (slug: string, defaultName: string) =>
  slug in bretagneNavNames ? bretagneNavNames[slug] : defaultName;

export const NavigationBetweenQuestions = ({ question }: Props) => {
  const isMobile = useMobile();

  if (isMobile) {
    return <SliderNavigationBetweenQuestions question={question} />;
  }
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};
