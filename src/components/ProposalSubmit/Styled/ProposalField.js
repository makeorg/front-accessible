import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../../assets/vars/Breakpoints';
import NoStyleTextInput from '../../Styled/FormElements';
import { MakeFonts } from '../../../assets/vars/Fonts';
import { TextColors } from '../../../assets/vars/Colors';
import { MiddleRow } from '../../Styled/FlexElements';

export const Label = styled.label`
  font-size: ${rem('14px')};
  line-height: ${rem('40px')};
  margin-left:  ${rem('12px')};
  min-width: ${rem('42px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
    line-height: ${rem('50px')};
    margin-left: ${rem('22px')};
    min-width: ${rem('52px')};
  }
`;

export const Input = styled(NoStyleTextInput)`
  width: 100%;
  font-family: ${MakeFonts.CircularBold};
  font-size: ${rem('14px')};
  line-height: ${rem('40px')};
  padding: 0 ${rem('10px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
    line-height: ${rem('50px')};
  }
`;

export const CharLimit = styled(MiddleRow)`
  font-family: ${MakeFonts.CircularBook};
  color: ${TextColors.MediumGrey};
  font-size: ${rem('12px')};
  min-width: ${rem('55px')};
  margin: 0 ${rem('10px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('14px')};
    min-width: ${rem('70px')};
  }
`;