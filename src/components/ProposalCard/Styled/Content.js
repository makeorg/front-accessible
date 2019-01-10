import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { BackgroundColors, TextColors, BasicColors } from 'Assets/vars/Colors';
import { Breakpoints } from 'Assets/vars/Breakpoints';
import { Small } from 'Components/Elements/Separators';
import { UnstyledList } from 'Components/Elements/ListElements';
import { CenterColumn, MiddleColumn, MiddleColumnToRow } from 'Components/Elements/FlexElements';

export const ContentWrapper = styled(MiddleColumn)`
  width: 100%;
  height: 100%;
  padding-top: ${pxToRem('58px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    padding-top: ${pxToRem('82px')};
  }
`;

export const InnerContent = styled(CenterColumn)`
  width: 100%;
`;

export const IntroParagraph = styled.p`
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('18px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('28px')};
  }
`;

export const FinalParagraph = styled.p`
  font-size: ${pxToRem('18px')};
  font-weight: bold;
  color: ${BasicColors.PureBlack};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('24px')};
  }
`;

export const Separator = styled(Small)`
  margin: ${pxToRem('10px')} 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    margin: ${pxToRem('15px')} 0 ${pxToRem('25px')};
  }
`;

export const FinalCardContentWrapper = styled(MiddleColumnToRow)`
  width: 100%;
`;

export const SharingWrapper = styled(CenterColumn)`
  width: 100%;
  border-bottom: ${pxToRem('2px')} solid ${BackgroundColors.ExtraLightGrey};
  padding: 0 0 ${pxToRem('10px')} 0;
  margin-bottom: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: 50%;
    border-bottom: none;
    border-right: ${pxToRem('2px')} solid ${BackgroundColors.ExtraLightGrey};
    padding: ${pxToRem('50px')} ${pxToRem('25px')} ${pxToRem('50px')} 0;
    margin-bottom: 0;
  }
`;

export const MoreWrapper = styled(CenterColumn)`
  width: 100%;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    width: 50%;
    padding-left: ${pxToRem('25px')};
  }
`;

export const PartnerFooter = styled(MiddleColumnToRow)`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  margin: ${pxToRem('15px')} auto 0;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const PartnerAvatar = styled.img`
  margin: ${pxToRem('7.5px')};
`;

export const PartnerList = styled(UnstyledList)`
  display: flex;
`;
