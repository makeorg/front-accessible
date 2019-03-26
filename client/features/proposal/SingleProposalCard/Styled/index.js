import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  MiddleColumnStyle,
  MiddleColumnToRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';

export const InnerProposalStyle = styled(MiddleColumnStyle)`
  width: 100%;
`;

export const FooterStyle = styled.footer`
  width: 100%;
`;

export const FooterContentStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
`;

export const DescriptionStyle = styled.p`
  width: 100%;
  max-width: ${pxToRem('650px')};
  color: ${TextColors.MediumGrey};
  font-size: ${pxToRem('13px;')};
  > span,
  > a {
    font-family: ${MakeFonts.RobotoBold};
    color: ${props => props.theme.color};
    text-decoration: none;
  }
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    text-align: right;
    font-size: ${pxToRem('16px;')};
  }
`;

export const FooterContentSeparatorStyle = styled(SeparatorStyle)`
  max-width: ${pxToRem('100px')};
  margin: ${pxToRem('5px')} 0 ${pxToRem('15px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    max-width: ${pxToRem('2px')};
    height: ${pxToRem('60px')};
    margin: 0 ${pxToRem('25px')};
  }
`;

export const ButtonStyle = styled(LinkAsRedButton)`
  margin: 0 ${pxToRem('5px')};
`;

export const SharingWrapperStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
  margin: ${pxToRem('15px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    margin: ${pxToRem('15px')} 0;
  }
`;

export const SharingTitleStyle = styled.h2`
  font-size: ${pxToRem('13px')};
  color: ${TextColors.MediumGrey};
  margin: 0 0 ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    font-size: ${pxToRem('18px')};
    margin: 0 ${pxToRem('20px')};
  }
`;
