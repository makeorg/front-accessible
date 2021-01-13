// citizen-register__wrapper

import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { color, typography } from 'athena-design-tokens';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts, Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';

export const CitizenRegisterContentStyle = styled(FlexElementStyle)`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: auto;
  justify-content: flex-start;
  justify-items: flex-start;
  flex-flow: column;
  padding: 30px 20px 40px;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const CitizenRegisterTitleStyle = styled.h4`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  font-size: ${intToPx(typography.font.fontsize.L.value)};
  margin: 15px 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: ${intToPx(typography.font.fontsize.XL.value)};
    margin: 15px 0;
  }
`;

export const CitizenRegisterSubtitleStyle = styled.p`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  width: 100%;
  margin: 15px 0 10px;
  color: ${color.greyDark};
`;

export const SocialRegisterLabelStyle = styled.span`
  color: ${props =>
    props.theme.fontColor ? color.black : props.theme.fontColor};
  font-weight: bold;
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  margin: 15px 0 10px;
`;

export const SocialCitizenRegisterWrapperStyle = styled(FlexElementStyle)`
  margin: 15px 0 10px;
  flex-flow: column wrap;
  align-content: flex-start;
`;
