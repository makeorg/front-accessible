import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { SmallSeparatorStyle } from 'Client/ui/Elements/Separators';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  MiddleRowStyle,
  CenterColumnStyle,
  MiddleColumnStyle,
  MiddleColumnToRowStyle,
} from 'Client/ui/Elements/FlexElements';

export const ContentWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
`;

export const ContentSpecialWrapperStyle = styled(ContentWrapperStyle)`
  height: auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    height: 100%;
  }
`;

export const FinalCardContentWrapperStyle = styled(MiddleColumnToRowStyle)`
  width: 100%;
`;

export const InnerContentStyle = styled(CenterColumnStyle)`
  width: 100%;
`;

export const IntroParagraphStyle = styled.p`
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const CardSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 15px 0 25px;
  }
`;

export const SharingInnerStyle = styled(CenterColumnStyle)`
  width: 100%;
  border-bottom: 2px solid ${BackgroundColors.ExtraLightGrey};
  padding: 0 0 10px 0;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    border-bottom: none;
    border-right: 2px solid ${BackgroundColors.ExtraLightGrey};
    padding: 50px 25px 50px 0;
    margin-bottom: 0;
  }
`;

export const SharingWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
  margin-top: 10px;
`;

export const MoreWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    padding-left: 25px;
  }
`;

export const PartnerFooterStyle = styled(MiddleColumnToRowStyle)`
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  margin: 15px auto 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const PartnerAvatarStyle = styled.img`
  margin: 7.5px;
`;

export const PartnerListStyle = styled(UnstyledListStyle)`
  display: flex;
`;
