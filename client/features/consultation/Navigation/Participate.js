// @flow
import React from 'react';
import {
  InnerPagesNavigation,
  type PageNavigationType,
} from 'Client/features/navigation/Pages';
import { useDesktop } from 'Client/hooks/useMedia';
import { useSelector } from 'react-redux';
import { getExploreLink, getParticipateLink } from 'Shared/helpers/url';
import { i18n } from 'Shared/i18n';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { type QuestionType } from 'Shared/types/question';
import { NavigationWrapperStyle, NavigationInnerStyle } from './style';

export const ParticipateNavigation = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const isDesktop = useDesktop();
  const NavigationPages: PageNavigationType[] = [
    {
      link: getParticipateLink(country, question.slug),
      label: isDesktop
        ? i18n.t('consultation.navigation.participate_desktop')
        : i18n.t('consultation.navigation.participate_mobile'),
    },
    {
      link: getExploreLink(country, question.slug),
      label: isDesktop
        ? i18n.t('consultation.navigation.explore_desktop')
        : i18n.t('consultation.navigation.explore_mobile'),
    },
  ];

  return (
    <NavigationWrapperStyle>
      <NavigationInnerStyle>
        <InnerPagesNavigation pages={NavigationPages} />
      </NavigationInnerStyle>
    </NavigationWrapperStyle>
  );
};
