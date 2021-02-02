// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { Breadcrumbs } from 'Client/app/Breadcrumbs/Breadcrumbs';
import { i18n } from 'Shared/i18n';
import { getBrowseConsultationsLink } from 'Shared/helpers/url';
import { type QuestionType, type PartnerType } from 'Shared/types/question';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { FOUNDER_PARTNER } from 'Shared/constants/partner';
import { isParticipatePage } from 'Shared/routes';
import {
  HeaderWrapperStyle,
  HeaderContentStyle,
  HeaderLabelStyle,
  HeaderTitleStyle,
} from './style';
import { PartnersList } from './PartnerLink';

export const ParticipateHeader = () => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const founders: PartnerType[] = question.partners
    ? question.partners.filter(
        partner => partner.partnerKind === FOUNDER_PARTNER
      )
    : [];
  const partners: PartnerType[] = question.partners
    ? question.partners.filter(
        partner => partner.partnerKind !== FOUNDER_PARTNER
      )
    : [];
  const isFeatured = question.featured === true;
  const location = useLocation();
  const participatePage = isParticipatePage(location.pathname);

  const parentPages = [
    {
      name: i18n.t('browse.consultations.all'),
      link: getBrowseConsultationsLink(country),
    },
  ];

  const breadcrumbLabel = participatePage
    ? i18n.t('consultation.navigation.participate_breadcrumb', {
        title: question.wording.title,
      })
    : i18n.t('consultation.navigation.explore_breadcrumb', {
        title: question.wording.title,
      });
  const currentPage: BreadcrumbsPagesType = {
    name: breadcrumbLabel,
    link: location,
  };

  return (
    <HeaderWrapperStyle>
      <HeaderContentStyle as="header">
        <Breadcrumbs parentPages={parentPages} currentPage={currentPage} />
        <HeaderTitleStyle>
          <HeaderLabelStyle>
            {isFeatured
              ? i18n.t('consultation.header.label_great_cause')
              : i18n.t('consultation.header.label_consultation')}
          </HeaderLabelStyle>
          <ScreenReaderItemStyle> - </ScreenReaderItemStyle>
          {question.question}
        </HeaderTitleStyle>
        {founders.length > 0 && (
          <PartnersList
            partnersList={founders}
            title={i18n.t('consultation.partners.init')}
          />
        )}
        {partners.length > 0 && (
          <PartnersList
            partnersList={partners}
            title={i18n.t('consultation.partners.with')}
            seeMoreLink
            noMargin
          />
        )}
      </HeaderContentStyle>
    </HeaderWrapperStyle>
  );
};
