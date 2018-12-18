import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { TextColors, BasicColors } from 'Assets/vars/Colors';
import Breakpoints from 'Assets/vars/Breakpoints';
import { Small } from 'Components/Elements/Separators';
import Unstyledlist from 'Components/Elements/ListElements';
import { MiddleColumn, MiddleColumnToRow } from 'Components/Elements/FlexElements';

export const InnerContent = styled(MiddleColumn)`
  height: 100%;
  padding-top: ${pxToRem('52px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    padding-top: ${pxToRem('82px')};
  }
`;

export const IntroParagraph = styled.p`
  font-size: ${pxToRem('12px')};
  line-height: ${pxToRem('18px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('18px')};
    line-height: ${pxToRem('28px')};
  }
`;

export const FinalParagraph = styled.p`
  font-size: ${pxToRem('18px')};
  font-weight: bold;
  color: ${BasicColors.PureBlack};
  text-align: center;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('24px')};
  }
`;

export const Separator = styled(Small)`
  margin: ${pxToRem('10px')} 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin: ${pxToRem('15px')} 0 ${pxToRem('25px')};
  }
`;

export const PartnerFooter = styled(MiddleColumnToRow)`
  font-size: ${pxToRem('12px')};
  color: ${TextColors.MediumGrey};
  margin: ${pxToRem('15px')} auto 0;
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    font-size: ${pxToRem('14px')};
  }
`;

export const PartnerAvatar = styled.img`
  margin: ${pxToRem('7.5px')};
`;

export const PartnerList = styled(Unstyledlist)`
  display: flex;
`;
