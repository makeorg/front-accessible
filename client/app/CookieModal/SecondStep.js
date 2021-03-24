// @flow
import React, { useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { SwitchButton } from 'Client/ui/Elements/Buttons/Switch';
import {
  SvgSettings,
  SvgSmiley,
  SvgStats,
  SvgLoudSpeaker,
  SvgArrowLeft,
} from 'Client/ui/Svg/elements';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { useDispatch } from 'react-redux';
import {
  trackClickModalCookieRefuse,
  trackDisplayModalCookieSecondStep,
  trackClickModalCookieBack,
  trackClickCookieSwitchAccept,
  trackClickCookieSwitchRefuse,
} from 'Shared/services/Tracking';
import { modalCloseCookies } from 'Shared/store/actions/modal';
import {
  CookieModalContentStyle,
  CookieModalHeaderWrapperStyle,
  CookieModalButtonWithLinkStyle,
  CookieModalSectionTitleStyle,
  CookieModalCookieDetailParagraphStyle,
  CookieModalSectionWrapperStyle,
  CookieModalElementSwitchWrapperStyle,
  CookieModalElementStyle,
  CookieModalBackButtonStyle,
  CookieSVGStyle,
  CookieSectionWrapperStyle,
  CookieDescriptionStyle,
  CookieLabelStyle,
} from './style';

type Props = {
  toggleCustomization: () => void,
};

export const SecondStepCookie = ({ toggleCustomization }: Props) => {
  const dispatch = useDispatch();

  const handleRefuse = () => {
    trackClickModalCookieRefuse();
    dispatch(modalCloseCookies());
  };

  const handleBack = () => {
    trackClickModalCookieBack();
    toggleCustomization();
  };

  useEffect(() => {
    trackDisplayModalCookieSecondStep();
  }, []);

  return (
    <CookieModalContentStyle>
      <CookieModalHeaderWrapperStyle>
        <CookieModalBackButtonStyle
          type="button"
          onClick={handleBack}
          aria-label={i18n.t('cookie_modal.back')}
        >
          <SvgArrowLeft width="10" height="10" aria-hidden focusable="false" />
        </CookieModalBackButtonStyle>
        <CookieModalButtonWithLinkStyle
          type="button"
          onClick={handleRefuse}
          className="with-margin-bottom"
        >
          {i18n.t('cookie_modal.refuse')}
        </CookieModalButtonWithLinkStyle>
      </CookieModalHeaderWrapperStyle>
      <CookieModalSectionTitleStyle>
        {i18n.t('cookie_modal.details.title')}
      </CookieModalSectionTitleStyle>
      <CookieModalSectionWrapperStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgSettings style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.technicals'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.technicals.secure')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.technicals.expiration')}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgSmiley style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.preferences'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.authentication')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.session')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.expiration')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.preferences.user')}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle className="with-separator">
          <SvgStats style={CookieSVGStyle} aria-hidden focusable="false" />
          <ColumnElementStyle>
            <CookieSectionWrapperStyle>
              <CookieDescriptionStyle
                dangerouslySetInnerHTML={{
                  __html: i18n.t('cookie_modal.details.statistics'),
                }}
              />
              <CookieLabelStyle>
                {i18n.t('cookie_modal.mandatory')}
              </CookieLabelStyle>
            </CookieSectionWrapperStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.statistics.visitor')}
            </CookieModalCookieDetailParagraphStyle>
            <CookieModalCookieDetailParagraphStyle>
              {i18n.t('cookie_modal.statistics.tracking')}
            </CookieModalCookieDetailParagraphStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgLoudSpeaker
            style={CookieSVGStyle}
            aria-hidden
            focusable="false"
          />
          <ColumnElementStyle>
            <span
              dangerouslySetInnerHTML={{
                __html: i18n.t('cookie_modal.details.social_media'),
              }}
            />
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.pixel')}
                <SwitchButton
                  onEnabling={() => trackClickCookieSwitchAccept('fb_tracking')}
                  onDisabling={() =>
                    trackClickCookieSwitchRefuse('fb_tracking')
                  }
                />
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.sharing')}
                <SwitchButton
                  onEnabling={() =>
                    trackClickCookieSwitchAccept('share_tracking')
                  }
                  onDisabling={() =>
                    trackClickCookieSwitchRefuse('share_tracking')
                  }
                />
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
      </CookieModalSectionWrapperStyle>
    </CookieModalContentStyle>
  );
};
