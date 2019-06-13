import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  MiddleColumnStyle,
  MiddleColumnToRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';

export const InnerProposalStyle = styled(MiddleColumnStyle)`
  width: 100%;
`;

export const ProposalFooterStyle = styled.footer`
  width: 100%;
`;

export const FooterContentStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
`;

export const DescriptionStyle = styled.p`
  width: 100%;
  max-width: 650px;
  color: ${TextColors.MediumGrey};
  font-size: 13px};
  > span,
  > a {
    font-family: ${MakeFonts.RobotoBold};
    color: ${props => props.theme.color};
    text-decoration: none;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: right;
    font-size: 16px;
  }
`;

export const FooterContentSeparatorStyle = styled(SeparatorStyle)`
  max-width: 100px;
  margin: 5px 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 2px;
    height: 60px;
    margin: 0 25px;
  }
`;

export const ButtonWrapperStyle = styled(FlexElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    flex-flow: column;
  }
`;

export const ButtonStyle = styled(LinkAsRedButton)`
  margin: 0 5px;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    margin: 5px 0;
  }
`;

export const SharingWrapperStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
  margin: 15px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 15px 0;
  }
`;

export const SharingTitleStyle = styled.h2`
  font-size: 13px;
  color: ${TextColors.MediumGrey};
  margin: 0 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    margin: 0 20px;
  }
`;
