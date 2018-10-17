import styled from 'styled-components';
import { rem } from 'polished';
import {
  BasicColors,
  BackgroundColors,
  BorderColors,
  TextColors,
  MakeThemeColors
} from '../../assets/vars/Colors';
import Breakpoints from '../../assets/vars/Breakpoints';

export const NoStyleTextInput = styled.input`
  border: none;
  background: transparent;
  background-color: transparent;
  padding: 0 ${rem('10px')};
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

export const LastFakeInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 ${rem('18px')};
  border-radius: ${rem('30px')};
  border: ${rem('1px')} solid ${BorderColors.LightGrey};
`;

export const ClassicFakeInput = styled(LastFakeInput)`
  margin-bottom: ${rem('15px')};
`;

export const FakeInputWhite = styled(ClassicFakeInput)`
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const FakeInputGrey = styled(ClassicFakeInput)`
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const LastFakeInputWhite = styled(LastFakeInput)`
  background: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureWhite};
`;

export const LastFakeInputGrey = styled(LastFakeInput)`
  background: ${BackgroundColors.LightGrey};
  background-color: ${BackgroundColors.LightGrey};
`;

export const BasicTextInput = styled(NoStyleTextInput)`
  width: 100%;
  color: ${TextColors.MediumGrey};
  font-size: ${rem('14px')};
  line-height: ${rem('35px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('16px')};
    line-height: ${rem('40px')};
  }
`;

export const IconLabel = styled.label`
  width: ${rem('30px')};
  color: ${MakeThemeColors.Red};
  font-size: ${rem('16px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    font-size: ${rem('18px')};
  }
`;
