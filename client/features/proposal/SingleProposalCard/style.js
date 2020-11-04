import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { color } from 'athena-design-tokens';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  MiddleColumnStyle,
  MiddleColumnToRowStyle,
  FlexElementStyle,
} from 'Client/ui/Elements/FlexElements';
import {
  SeparatorStyle,
  SmallSeparatorStyle,
} from 'Client/ui/Elements/Separators';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const InnerProposalStyle = styled(MiddleColumnStyle)`
  width: 100%;
`;

export const ProposalFooterStyle = styled.footer`
  width: 100%;
`;

export const FooterContentStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
`;

export const DescriptionStyle = styled(ParagraphStyle)`
  width: 100%;
  max-width: 650px;
  color: ${color.greyDark};
  > span,
  > a {
    font-family: ${MakeFonts.CircularStandardBold};
    color: ${props => props.theme.color};
    text-decoration: underline;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: right;
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
      Breakpoints.LargeDesktop
    )}) {
    flex-flow: column;
  }
`;

export const ButtonStyle = styled(LinkAsRedButton)`
  margin: 0 5px;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.LargeDesktop
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
  color: ${color.greyDark};
  margin: 0 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    margin: 0 20px;
  }
`;

export const ProposalCardContentStyle = styled.blockquote`
  max-width: 100%;
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.CircularStandardBold};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 22px;
  }
`;

export const ProposalCardSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 15px 0 25px;
  }
`;
