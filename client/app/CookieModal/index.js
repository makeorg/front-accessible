// @flow
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import Cookies from 'universal-cookie';
import { i18n } from 'Shared/i18n';
import { modalCloseCookies } from 'Shared/store/actions/modal';
import {
  trackClickModalCookieSave,
  trackClickModalCookiePersonalize,
} from 'Shared/services/Tracking';
import {
  CookieModalButtonWithLinkStyle,
  CookieModalBannerWrapperStyle,
  CookieModalRedButtonStyle,
  SvgCookieStyle,
} from './style';
import { FirstStepCookie } from './FirstStep';
import { SecondStepCookie } from './SecondStep';

const acceptCookieName: string = 'make-cookie';
// set cookie duration to a year
const today = new Date();
const nextYear = new Date();
nextYear.setFullYear(today.getFullYear() + 1);

ReactModal.setAppElement('#app');

export const CookieModal = () => {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const hasCookies = cookies.get(acceptCookieName);
  const showCookies: string = useSelector(
    (state: StateRoot) => state.modal.showCookies
  );
  const [cutomization, enableCustomization] = useState(false);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      borderRadius: '8px',
      padding: null,
      zIndex: 10,
      overflow: 'hidden',
    },
  };

  const setCookie = () => {
    cookies.set(acceptCookieName, true, {
      path: '/',
      expires: nextYear,
    });
  };

  const handleClick = () => {
    trackClickModalCookieSave('cookies-accept-all');
    dispatch(modalCloseCookies());
    setCookie();
  };

  const toggleCustomization = () => {
    enableCustomization(!cutomization);
  };

  const handlePersonalize = () => {
    toggleCustomization();
    trackClickModalCookiePersonalize();
  };

  const handlePreferences = () => {
    trackClickModalCookieSave('cookies-accept-preferences');
    dispatch(modalCloseCookies());
    setCookie();
  };

  if (hasCookies || !showCookies) {
    return null;
  }

  return (
    <ReactModal
      isOpen={showCookies}
      style={customStyles}
      overlayClassName="modal-overlay"
      data-cy-container="cookie-modal"
    >
      {cutomization ? (
        <SecondStepCookie toggleCustomization={toggleCustomization} />
      ) : (
        <FirstStepCookie />
      )}
      <CookieModalBannerWrapperStyle>
        <SvgCookieStyle aria-hidden focusable="false" />
        <CookieModalRedButtonStyle type="button" onClick={handleClick}>
          {i18n.t('cookie_modal.accept')}
        </CookieModalRedButtonStyle>
        {cutomization ? (
          <CookieModalRedButtonStyle type="button" onClick={handlePreferences}>
            {i18n.t('cookie_modal.save')}
          </CookieModalRedButtonStyle>
        ) : (
          <CookieModalButtonWithLinkStyle
            type="button"
            onClick={handlePersonalize}
          >
            {i18n.t('cookie_modal.personalize')}
          </CookieModalButtonWithLinkStyle>
        )}
      </CookieModalBannerWrapperStyle>
    </ReactModal>
  );
};
