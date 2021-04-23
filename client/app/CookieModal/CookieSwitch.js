// @flow
import React from 'react';
import { SwitchButton } from 'Client/ui/Elements/Buttons/Switch';
import {
  trackClickCookieSwitchAccept,
  trackClickCookieSwitchRefuse,
} from 'Shared/services/Tracking';
import { setCookiesPreferences } from 'Shared/store/actions/user/cookiesPreferences';
import { type StateUserCookiesPreferences } from 'Shared/store/types';
import { useDispatch, useSelector } from 'react-redux';
import { USER_PREFERENCES_COOKIE } from 'Shared/constants/cookies';
import Cookies from 'universal-cookie';
import {
  CookieModalCookieDetailParagraphStyle,
  CookieModalElementSwitchWrapperStyle,
  CookieSwitchWrapperStyle,
} from './style';

type Props = {
  value: string,
  description: string,
  onCookiePage?: boolean,
};

export const CookieSwitch = ({ value, description, onCookiePage }: Props) => {
  const dispatch = useDispatch();
  const { cookiesPreferences }: StateUserCookiesPreferences = useSelector(
    (state: StateRoot) => state.user
  );
  const cookies = new Cookies();
  const preferencesCookie: StateUserCookiesPreferences = cookies.get(
    USER_PREFERENCES_COOKIE
  );
  const cookieValue = preferencesCookie && preferencesCookie[value];

  return (
    <CookieModalElementSwitchWrapperStyle>
      <CookieModalCookieDetailParagraphStyle
        className={onCookiePage && 'cookie-page'}
      >
        {description}
        <CookieSwitchWrapperStyle>
          <SwitchButton
            value={cookieValue}
            onEnabling={() => {
              dispatch(
                setCookiesPreferences({
                  ...cookiesPreferences,
                  [value]: true,
                })
              );
              trackClickCookieSwitchAccept(value);
            }}
            onDisabling={() => {
              dispatch(
                setCookiesPreferences({
                  ...cookiesPreferences,
                  [value]: false,
                })
              );
              trackClickCookieSwitchRefuse(value);
            }}
          />
        </CookieSwitchWrapperStyle>
      </CookieModalCookieDetailParagraphStyle>
    </CookieModalElementSwitchWrapperStyle>
  );
};
