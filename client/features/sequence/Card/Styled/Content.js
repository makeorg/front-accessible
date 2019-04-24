import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
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
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
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
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('18px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('28px')};
  }
`;

export const CardSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: ${pxToRem('10px')} 0;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin: ${pxToRem('15px')} 0 ${pxToRem('25px')};
  }
`;

export const SharingInnerStyle = styled(CenterColumnStyle)`
  width: 100%;
  border-bottom: ${pxToRem('2px')} solid ${BackgroundColors.ExtraLightGrey};
  padding: 0 0 ${pxToRem('10px')} 0;
  margin-bottom: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    width: 50%;
    border-bottom: none;
    border-right: ${pxToRem('2px')} solid ${BackgroundColors.ExtraLightGrey};
    padding: ${pxToRem('50px')} ${pxToRem('25px')} ${pxToRem('50px')} 0;
    margin-bottom: 0;
  }
`;

export const SharingWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
`;

export const MoreWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    width: 50%;
    padding-left: ${pxToRem('25px')};
  }
`;

export const PartnerFooterStyle = styled(MiddleColumnToRowStyle)`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  margin: ${pxToRem('15px')} auto 0;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    font-size: ${pxToRem('14px')};
  }
`;

export const PartnerAvatarStyle = styled.img`
  margin: ${pxToRem('7.5px')};
`;

export const PartnerListStyle = styled(UnstyledListStyle)`
  display: flex;
`;
