import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SvgExternalLinkPlain } from 'Client/ui/Svg/elements';
import { UnstyledButtonStyle } from '../style';

export const BasicButtonStyle = `
  display: flex;
  justify-content: center;
  align-items: baseline;
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  border-radius: 20px;
  border: none;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  padding: 10px 25px 7px 25px;
  text-decoration: none;
`;

const RedStyle = `
  color: ${color.white};
  background-color: ${color.brandSecondary};
  .tofill {
    fill: ${color.white};
  }
  &:hover,
  &:focus {
    color: ${color.white};
    text-decoration: none;
  }
`;

const GreyStyle = `
  color: ${color.greyDark};
  background-color: ${color.greyLighter};
  .tofill {
    fill: ${color.brandSecondary};
  }
  &:hover,
  &:focus {
    color: ${color.greyDark};
    text-decoration: none;
  }
`;

export const RedButtonStyle = styled.button.attrs(props => ({
  type: 'button',
  ...props,
}))`
  ${BasicButtonStyle};
  ${RedStyle};
  &:disabled {
    ${GreyStyle};
  }
`;

export const GreyButtonStyle = styled.button`
  ${BasicButtonStyle};
  ${GreyStyle};
`;

export const LinkAsRedButtonStyle = styled(Link)`
  ${BasicButtonStyle};
  ${RedStyle};
  &:disabled {
    ${GreyStyle};
  }
`;

export const ExternalLinkIconStyle = styled(SvgExternalLinkPlain)`
  width: 14px;
  height: 14px;
  margin-left: 7px;
`;

const ButtonNoBackgroundStyle = `
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  text-decoration: underline;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: ${intToPx(typography.font.fontsize.XS.value)};
  }
`;

const GreyNoBackgroundStyle = `
  color: ${color.greyDark};
  .tofill {
    fill: ${color.greyDark};
  }
`;

const RedNoBackgroundStyle = `
  color: ${color.brandSecondary};
  .tofill {
    fill: ${color.brandSecondary};
  }
`;

export const GreyNoBackgroundButtonStyle = styled(UnstyledButtonStyle)`
  ${ButtonNoBackgroundStyle};
  ${GreyNoBackgroundStyle};
`;

export const RedNoBackgroundButtonStyle = styled(UnstyledButtonStyle)`
  ${ButtonNoBackgroundStyle};
  ${RedNoBackgroundStyle};
`;

export const GreyLinkStyle = styled(Link)`
  ${ButtonNoBackgroundStyle};
  ${GreyNoBackgroundStyle};
`;
