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
import {
  trackDisplayModalCookieSecondStep,
  trackClickModalCookieBack,
  trackClickCookieSwitchAccept,
  trackClickCookieSwitchRefuse,
} from 'Shared/services/Tracking';
import { useDispatch, useSelector } from 'react-redux';
import { setCookiesPreferences } from 'Shared/store/actions/user/cookiesPreferences';
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
  CookieSwitchWrapperStyle,
} from './style';

type Props = {
  toggleCustomization: () => void,
  handleRejectAll: () => void,
};

export const SecondStepCookie = ({
  toggleCustomization,
  handleRejectAll,
}: Props) => {
  const dispatch = useDispatch();
  const { cookiesPreferences } = useSelector((state: StateRoot) => state.user);

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
          onClick={handleRejectAll}
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
                {i18n.t('cookie_modal.social_media.facebook_pixel')}
                <CookieSwitchWrapperStyle>
                  <SwitchButton
                    value={cookiesPreferences?.facebook_tracking}
                    onEnabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          facebook_tracking: true,
                        })
                      );
                      trackClickCookieSwitchAccept('facebook_tracking');
                    }}
                    onDisabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          facebook_tracking: false,
                        })
                      );
                      trackClickCookieSwitchRefuse('facebook_tracking');
                    }}
                  />
                </CookieSwitchWrapperStyle>
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.twitter_pixel')}
                <CookieSwitchWrapperStyle>
                  <SwitchButton
                    value={cookiesPreferences?.twitter_tracking}
                    onEnabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          twitter_tracking: true,
                        })
                      );

                      trackClickCookieSwitchAccept('twitter_tracking');
                    }}
                    onDisabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          twitter_tracking: false,
                        })
                      );
                      trackClickCookieSwitchRefuse('twitter_tracking');
                    }}
                  />
                </CookieSwitchWrapperStyle>
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.facebook_sharing')}
                <CookieSwitchWrapperStyle>
                  <SwitchButton
                    value={cookiesPreferences?.facebook_sharing}
                    onEnabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          facebook_sharing: true,
                        })
                      );
                      trackClickCookieSwitchAccept('facebook_sharing');
                    }}
                    onDisabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          facebook_sharing: false,
                        })
                      );
                      trackClickCookieSwitchRefuse('facebook_sharing');
                    }}
                  />
                </CookieSwitchWrapperStyle>
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.twitter_sharing')}
                <CookieSwitchWrapperStyle>
                  <SwitchButton
                    value={cookiesPreferences?.twitter_sharing}
                    onEnabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          twitter_sharing: true,
                        })
                      );
                      trackClickCookieSwitchAccept('twitter_sharing');
                    }}
                    onDisabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          twitter_sharing: false,
                        })
                      );
                      trackClickCookieSwitchRefuse('twitter_sharing');
                    }}
                  />
                </CookieSwitchWrapperStyle>
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
            <CookieModalElementSwitchWrapperStyle>
              <CookieModalCookieDetailParagraphStyle>
                {i18n.t('cookie_modal.social_media.linkedin_sharing')}
                <CookieSwitchWrapperStyle>
                  <SwitchButton
                    value={cookiesPreferences?.linkedin_sharing}
                    onEnabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          linkedin_sharing: true,
                        })
                      );

                      trackClickCookieSwitchAccept('linkedin_sharing');
                    }}
                    onDisabling={() => {
                      dispatch(
                        setCookiesPreferences({
                          ...cookiesPreferences,
                          linkedin_sharing: false,
                        })
                      );
                      trackClickCookieSwitchRefuse('linkedin_sharing');
                    }}
                  />
                </CookieSwitchWrapperStyle>
              </CookieModalCookieDetailParagraphStyle>
            </CookieModalElementSwitchWrapperStyle>
          </ColumnElementStyle>
        </CookieModalElementStyle>
      </CookieModalSectionWrapperStyle>
    </CookieModalContentStyle>
  );
};
