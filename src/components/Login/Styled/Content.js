import styled from 'styled-components';
import { rem } from 'polished';
import { MiddleRow } from '../../Elements/FlexElements';
import { FormWrapper } from '../../Elements/FormElements';
import { UnstyledButton } from '../../Elements/ButtonElements';
import { MakeThemeColors } from '../../../assets/vars/Colors';
import { MakeFonts } from '../../../assets/vars/Fonts';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const SepWrapper = styled(MiddleRow)`
  width: 100%;
`;

export const SepText = styled(MiddleRow)`
  width: ${rem('60px')};
  font-size: ${rem('14px')};
`;

export const Form = styled(FormWrapper)`
  width: 100%;
  margin: ${rem('15px')} 0 ${rem('20px')};
`;

export const InlineParagraph = styled.p`
  display: inline;
  font-size: ${rem('14px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('16px')};
  }
`;

export const ExtraParagraph = styled(InlineParagraph)`
  margin-top: ${rem('15px')};
`;

export const ExtraAltParagraph = styled(InlineParagraph)`
  margin-top: ${rem('10px')};
`;

export const RedLinkButton = styled(UnstyledButton)`
  display: inline-block;
  font-family: ${MakeFonts.CircularBold};
  color: ${MakeThemeColors.Red};
  text-decoration: underline;
  margin: 0 ${rem('5px')}
`;
