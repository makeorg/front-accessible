import styled from 'styled-components';
import { rem } from 'polished';
import { TextColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { Small } from '../../Elements/Separators';


export const IntroParagraph = styled.p`
  font-size: ${rem('12px')};
  line-height: ${rem('18px')};
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
    line-height: ${rem('28px')};
  }
`;

export const Sep = styled(Small)`
    margin: ${rem('10px')} 0 ${rem('20px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin: ${rem('15px')} 0 ${rem('25px')};
  }
`;
