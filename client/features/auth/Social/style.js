import styled from 'styled-components';
import {
  IconColors,
  BasicColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { SvgMailPlain } from 'Client/ui/Svg/elements';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';

export const AuthenticationButtonWrapperStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: 215px;
  align-self: center;
  margin: 20px 0;
  &.small-wrapper {
    max-width: 100px;
  }
`;

export const SocialButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  padding: 0;
  border-radius: 50%;
`;

export const FacebookButtonStyle = styled(SocialButtonStyle)`
  background-color: rgb(0, 123, 237);
  border: 1px solid rgb(0, 123, 237);
  .tofill {
    fill: ${BasicColors.PureWhite};
  }
`;

export const GoogleButtonStyle = styled(SocialButtonStyle)`
  background-color: ${BasicColors.PureWhite};
  border: 1px solid ${BackgroundColors.MediumGrey};
`;

export const AuthenticationEmailIconStyle = styled(SvgMailPlain)`
  width: 14px;
  height: 14px;
  margin-right: 7px;
`;

export const AuthenticationLinkStyle = styled.button`
  font-size: 16px;
  border: none;
  padding: 0;
  margin: 0 5px;
  background: none;
  text-transform: uppercase;
  border-bottom-width: 1px;
  border-bottom-style: solid;
`;

export const FacebookLinkStyle = styled(AuthenticationLinkStyle)`
  color: ${IconColors.Facebook};
  border-bottom-color: ${IconColors.Facebook};
  svg {
    fill: ${IconColors.Facebook};
  }
`;

export const GoogleLinkStyle = styled(AuthenticationLinkStyle)`
  color: ${IconColors.Google};
  border-bottom-color: ${IconColors.Google};
  svg {
    fill: ${IconColors.Google};
  }
`;
