// @flow
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { i18n } from 'Shared/i18n';
import { COOKIE_MODAL } from 'Shared/constants/ids';
import { modalCloseCookies } from 'Shared/store/actions/modal';
import {
  trackDisplayModalCookieFirstStep,
  trackClickModalCookieRefuse,
} from 'Shared/services/Tracking';
import {
  SvgSettings,
  SvgSmiley,
  SvgStats,
  SvgLoudSpeaker,
} from 'Client/ui/Svg/elements';
import {
  CookieModalContentStyle,
  CookieModalTitleWrapperStyle,
  CookieModalButtonWithLinkStyle,
  CookieModalTitleStyle,
  CookieModalParagraphStyle,
  CookieModalSectionWrapperStyle,
  CookieModalSectionTitleStyle,
  CookieModalElementStyle,
  CookieSVGStyle,
} from './style';

const acceptCookieName: string = 'make-cookie';
// set cookie duration to a year
const today = new Date();
const nextYear = new Date();
nextYear.setFullYear(today.getFullYear() + 1);

export const FirstStepCookie = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const hasCookies = cookies.get(acceptCookieName);
  const showCookies: string = useSelector(
    (state: StateRoot) => state.modal.showCookies
  );

  useEffect(() => {
    trackDisplayModalCookieFirstStep();
  }, []);

  const handleRefuse = () => {
    trackClickModalCookieRefuse();
    dispatch(modalCloseCookies());
  };

  if (hasCookies || !showCookies) {
    return null;
  }

  return (
    <CookieModalContentStyle>
      <CookieModalTitleWrapperStyle>
        <CookieModalButtonWithLinkStyle
          className="with-margin-bottom"
          onClick={handleRefuse}
          type="button"
        >
          {i18n.t('cookie_modal.refuse')}
        </CookieModalButtonWithLinkStyle>
        <CookieModalTitleStyle id={COOKIE_MODAL}>
          {i18n.t('cookie_modal.title')}
        </CookieModalTitleStyle>
      </CookieModalTitleWrapperStyle>
      <CookieModalParagraphStyle>
        {i18n.t('cookie_modal.description')}
      </CookieModalParagraphStyle>
      <CookieModalSectionTitleStyle as="h3">
        {i18n.t('cookie_modal.details.title')}
      </CookieModalSectionTitleStyle>
      <CookieModalSectionWrapperStyle>
        <CookieModalElementStyle>
          <SvgSettings style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.technicals'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgSmiley style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.preferences'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgStats style={CookieSVGStyle} aria-hidden focusable="false" />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.statistics'),
            }}
          />
        </CookieModalElementStyle>
        <CookieModalElementStyle>
          <SvgLoudSpeaker
            style={CookieSVGStyle}
            aria-hidden
            focusable="false"
          />
          <span
            dangerouslySetInnerHTML={{
              __html: i18n.t('cookie_modal.details.social_media'),
            }}
          />
        </CookieModalElementStyle>
      </CookieModalSectionWrapperStyle>
    </CookieModalContentStyle>
  );
};
