// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import Logo from 'Client/app/assets/images/logo.svg';
import { HeaderStyle, HeaderLogoStyle } from './Styled';

type Props = {
  /** Method called to track Header */
  handleTracking: () => void,
};

/**
 * Renders Main Header
 */
export const HeaderComponent = (props: Props) => {
  const { handleTracking } = props;

  return (
    <HeaderStyle>
      <a href="https://make.org">
        <h1>
          <HeaderLogoStyle
            onClick={handleTracking}
            src={Logo}
            alt={i18n.t('header.logo_alt')}
          />
        </h1>
      </a>
    </HeaderStyle>
  );
};
