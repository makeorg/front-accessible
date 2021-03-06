import React from 'react';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { RedLinkHTMLElementStyle } from 'Client/ui/Elements/LinkElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  CookieDescriptionStyle,
  CookieLabelStyle,
  CookieModalCookieDetailParagraphStyle,
  CookieModalElementStyle,
  CookieModalSectionWrapperStyle,
  CookieSectionWrapperStyle,
  CookieSVGStyle,
} from 'Client/app/CookieModal/style';
import {
  SvgLoudSpeaker,
  SvgSettings,
  SvgSmiley,
  SvgStats,
} from 'Client/ui/Svg/elements';
import {
  CenterColumnStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { trackClickModalCookieSave } from 'Shared/services/Tracking';
import { useDispatch, useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import {
  initTrackersFromPreferences,
  removeTrackersFromPreferences,
  setPreferencesCookie,
} from 'Client/helper/cookies';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import {
  COOKIES_PREFERENCES_UPDATE_MESSAGE,
  NOTIFICATION_LEVEL_INFORMATION,
} from 'Shared/constants/notifications';
import { DateHelper } from 'Shared/helpers/date';
import { useParams } from 'react-router';
import { CookieSwitch } from 'Client/app/CookieModal/CookieSwitch';
import {
  StaticExternalLinkIconStyle,
  StaticPageWrapperStyle,
  StaticParagraphStyle,
  StaticPrimaryUnorderedListItemStyle,
  StaticPrimaryUnorderedListStyle,
  StaticSecondLevelTitleStyle,
  StaticSquareListItemStyle,
  StaticSquareListStyle,
  StaticThirdLevelTitleStyle,
  StaticTitleExtra,
} from './style';

export const Cookies = () => {
  const dispatch = useDispatch();
  const { country } = useParams();
  const { cookiesPreferences } = useSelector((state: StateRoot) => state.user);
  const DATE = new Date(2021, 3, 28);
  const formattedDate = DateHelper.localizedAndFormattedDate(
    DATE,
    'DD MMMM YYYY'
  );
  const isFR = country === 'FR';
  const googleLink = isFR
    ? 'https://policies.google.com/privacy?hl=fr&gl=fr'
    : 'https://policies.google.com/privacy?hl=en&gl=en';
  const facebookLink = isFR
    ? 'https://fr-fr.facebook.com/policy.php'
    : 'https://en-gb.facebook.com/policy.php';
  const twitterLink = isFR
    ? 'https://twitter.com/fr/privacy'
    : 'https://twitter.com/en/privacy';
  const linkedInLink = isFR
    ? 'https://fr.linkedin.com/legal/privacy-policy'
    : 'https://linkedin.com/legal/privacy-policy';

  const handlePreferences = () => {
    trackClickModalCookieSave('cookies-accept-preferences');
    setPreferencesCookie(cookiesPreferences);
    removeTrackersFromPreferences(cookiesPreferences);
    initTrackersFromPreferences(cookiesPreferences);
    dispatch(
      displayNotificationBanner(
        COOKIES_PREFERENCES_UPDATE_MESSAGE,
        NOTIFICATION_LEVEL_INFORMATION
      )
    );
  };

  return (
    <>
      <MetaTags title={i18n.t('meta.cookies.title')} />
      <StaticPageWrapperStyle>
        <StaticSecondLevelTitleStyle>
          {i18n.t('cookies_management.title')}
          <StaticTitleExtra>
            {i18n.t('cookies_management.dated', { date: formattedDate })}
          </StaticTitleExtra>
        </StaticSecondLevelTitleStyle>
        <StaticPrimaryUnorderedListStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              {i18n.t('cookies_management.intro.title')}
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.intro.first_paragraph')}
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.intro.second_paragraph')}
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              {i18n.t('cookies_management.use.title')}
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.use.first_paragraph')}
            </StaticParagraphStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.use.second_paragraph')}
            </StaticParagraphStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              {i18n.t('cookies_management.partners.title')}
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.partners.intro')}
            </StaticParagraphStyle>
            <StaticSquareListStyle>
              <StaticSquareListItemStyle>
                {'Google : '}
                <RedLinkHTMLElementStyle
                  as="a"
                  href={googleLink}
                  target="_blank"
                  rel="noopener"
                >
                  {googleLink}
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Facebook : '}
                <RedLinkHTMLElementStyle
                  as="a"
                  href={facebookLink}
                  target="_blank"
                  rel="noopener"
                >
                  {facebookLink}
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'Twitter : '}
                <RedLinkHTMLElementStyle
                  as="a"
                  href={twitterLink}
                  target="_blank"
                  rel="noopener"
                >
                  {twitterLink}
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
              <StaticSquareListItemStyle>
                {'LinkedIn : '}
                <RedLinkHTMLElementStyle
                  as="a"
                  href={linkedInLink}
                  target="_blank"
                  rel="noopener"
                >
                  {linkedInLink}
                  <StaticExternalLinkIconStyle aria-hidden focusable="false" />
                  <ScreenReaderItemStyle>
                    {i18n.t('common.open_new_window')}
                  </ScreenReaderItemStyle>
                </RedLinkHTMLElementStyle>
              </StaticSquareListItemStyle>
            </StaticSquareListStyle>
          </StaticPrimaryUnorderedListItemStyle>
          <StaticPrimaryUnorderedListItemStyle>
            <StaticThirdLevelTitleStyle>
              {i18n.t('cookies_management.details.title')}
            </StaticThirdLevelTitleStyle>
            <StaticParagraphStyle>
              {i18n.t('cookies_management.details.intro')}
            </StaticParagraphStyle>
            <CookieModalSectionWrapperStyle>
              <CookieModalElementStyle className="with-separator">
                <SvgSettings
                  style={CookieSVGStyle}
                  aria-hidden
                  focusable="false"
                />
                <ColumnElementStyle>
                  <CookieSectionWrapperStyle>
                    <CookieDescriptionStyle>
                      <strong>
                        {i18n.t('cookies_management.details.technicals.name')}
                      </strong>{' '}
                      {i18n.t(
                        'cookies_management.details.technicals.description'
                      )}
                    </CookieDescriptionStyle>
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.mandatory')}
                    </CookieLabelStyle>
                  </CookieSectionWrapperStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t('cookies_management.details.technicals.secure')}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.session'),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.technicals.secure-expiration'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.session'),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.technicals.demographics'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.month', {
                          count: 1,
                        }),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                </ColumnElementStyle>
              </CookieModalElementStyle>
              <CookieModalElementStyle className="with-separator">
                <SvgSmiley
                  style={CookieSVGStyle}
                  aria-hidden
                  focusable="false"
                />
                <ColumnElementStyle>
                  <CookieSectionWrapperStyle>
                    <CookieDescriptionStyle>
                      <strong>
                        {i18n.t('cookies_management.details.preferences.name')}
                      </strong>{' '}
                      {i18n.t(
                        'cookies_management.details.preferences.description'
                      )}
                    </CookieDescriptionStyle>
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.mandatory')}
                    </CookieLabelStyle>
                  </CookieSectionWrapperStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.preferences.google-connect'
                    )}
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.preferences.facebook-connect'
                    )}
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.preferences.session-id'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.session'),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.preferences.session-id-expiration'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.session'),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t('cookies_management.details.preferences.user-id')}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.year', {
                          count: 1,
                        }),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.preferences.cookie-preferences'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.year', {
                          count: 1,
                        }),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                </ColumnElementStyle>
              </CookieModalElementStyle>
              <CookieModalElementStyle className="with-separator">
                <SvgStats
                  style={CookieSVGStyle}
                  aria-hidden
                  focusable="false"
                />
                <ColumnElementStyle>
                  <CookieSectionWrapperStyle>
                    <CookieDescriptionStyle>
                      <strong>
                        {i18n.t('cookies_management.details.statistics.name')}
                      </strong>{' '}
                      {i18n.t(
                        'cookies_management.details.statistics.description'
                      )}
                    </CookieDescriptionStyle>
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.mandatory')}
                    </CookieLabelStyle>
                  </CookieSectionWrapperStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t('cookies_management.details.statistics.visitor-id')}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.year', {
                          count: 1,
                        }),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.statistics.visitor-created-at'
                    )}
                    <CookieLabelStyle className="cookie-page">
                      {i18n.t('cookies_management.details.duration', {
                        duration: i18n.t('cookies_management.details.year', {
                          count: 1,
                        }),
                      })}
                    </CookieLabelStyle>
                  </CookieModalCookieDetailParagraphStyle>
                  <CookieModalCookieDetailParagraphStyle className="cookie-page">
                    {i18n.t(
                      'cookies_management.details.statistics.facebook-tracking'
                    )}
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
                  <CookieDescriptionStyle>
                    <strong>
                      {i18n.t('cookies_management.details.social.name')}
                    </strong>{' '}
                    {i18n.t('cookies_management.details.social.description')}
                  </CookieDescriptionStyle>
                  <CookieSwitch
                    onCookiePage
                    value="facebook_tracking"
                    description={i18n.t(
                      'cookies_management.details.social.facebook_tracking'
                    )}
                  />
                  <CookieSwitch
                    onCookiePage
                    value="twitter_tracking"
                    description={i18n.t(
                      'cookies_management.details.social.twitter_tracking'
                    )}
                  />
                  <CookieSwitch
                    onCookiePage
                    value="facebook_sharing"
                    description={i18n.t(
                      'cookies_management.details.social.facebook_sharing'
                    )}
                  />
                  <CookieSwitch
                    onCookiePage
                    value="twitter_sharing"
                    description={i18n.t(
                      'cookies_management.details.social.twitter_sharing'
                    )}
                  />
                  <CookieSwitch
                    onCookiePage
                    value="linkedin_sharing"
                    description={i18n.t(
                      'cookies_management.details.social.linkedin_sharing'
                    )}
                  />
                </ColumnElementStyle>
              </CookieModalElementStyle>
            </CookieModalSectionWrapperStyle>
            <CenterColumnStyle>
              <RedButtonStyle type="button" onClick={handlePreferences}>
                {i18n.t('cookies_management.button')}
              </RedButtonStyle>
            </CenterColumnStyle>
          </StaticPrimaryUnorderedListItemStyle>
        </StaticPrimaryUnorderedListStyle>
      </StaticPageWrapperStyle>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Cookies;
