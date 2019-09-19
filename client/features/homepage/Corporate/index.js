// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { trackClickHomepageCorporate } from 'Shared/services/Tracking';
import {
  CorporateWrapperStyle,
  CorporateContainerStyle,
  CorporateSectionStyle,
  CorporateIntroStyle,
  CorporateSeparatorStyle,
  CorporateTitleStyle,
  CorporateListStyle,
  CorporateListItemStyle,
  CorporateIconStyle,
  CorporateLinkStyle,
} from 'Client/features/homepage/Corporate/Styled';
import { SvgLightBulb, SvgThumbsUp, SvgUsers } from 'Client/ui/Svg/elements';

export const CorporateBanner = () => {
  return (
    <CorporateWrapperStyle id="corporate">
      <CorporateContainerStyle>
        <CorporateSectionStyle aria-labelledby="corporate_title">
          <CorporateIntroStyle id="corporate_title">
            {i18n.t('homepage.corporate.first-section.introduction')}
          </CorporateIntroStyle>
          <CorporateTitleStyle>
            {i18n.t('homepage.corporate.first-section.title')}
          </CorporateTitleStyle>
          <CorporateListStyle>
            <CorporateListItemStyle>
              <SvgThumbsUp aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-1')}
            </CorporateListItemStyle>
            <CorporateListItemStyle>
              <SvgLightBulb aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-2')}
            </CorporateListItemStyle>
            <CorporateListItemStyle>
              <SvgUsers aria-hidden style={CorporateIconStyle} />
              {i18n.t('homepage.corporate.first-section.list-item-3')}
            </CorporateListItemStyle>
          </CorporateListStyle>
        </CorporateSectionStyle>
        <CorporateSeparatorStyle />
        <CorporateSectionStyle aria-labelledby="who_are_we_title">
          <CorporateIntroStyle id="who_are_we_title">
            {i18n.t('homepage.corporate.second-section.introduction')}
          </CorporateIntroStyle>
          <CorporateTitleStyle>
            {i18n.t('homepage.corporate.second-section.title')}
          </CorporateTitleStyle>
          <CorporateListItemStyle as="p">
            {i18n.t('homepage.corporate.second-section.description')}
          </CorporateListItemStyle>
          <CorporateLinkStyle
            as="a"
            href="https://about.make.org/qui-sommes-nous"
            onClick={() => trackClickHomepageCorporate()}
          >
            {i18n.t('homepage.corporate.second-section.link-text')}
          </CorporateLinkStyle>
        </CorporateSectionStyle>
      </CorporateContainerStyle>
    </CorporateWrapperStyle>
  );
};
