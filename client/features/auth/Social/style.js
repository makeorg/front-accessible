import styled from 'styled-components';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { SvgMailPlain } from 'Client/ui/Svg/elements';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';

export const AuthenticationButtonWrapperStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: 215px;
  align-self: center;
  margin: 20px 0;
  &.small-wrapper {
    max-width: 120px;
  }
`;

export const SocialButtonStyle = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  padding: 0;
  margin: 0 10px;
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
