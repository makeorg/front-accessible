import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { TextColors, BasicColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { Small } from '../../Elements/Separators';


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
  font-size: ${pxToRem('25px')};
  font-weight: bold;
  color: ${BasicColors.PureBlack};
  text-align: center;
  margin-top: ${pxToRem('150px')}
`;

export const Separator = styled(Small)`
    margin: ${pxToRem('10px')} 0 ${pxToRem('20px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin: ${pxToRem('15px')} 0 ${pxToRem('25px')};
  }
`;
