import styled from 'styled-components';
import { rem } from 'polished';
import { BasicButton } from '../../Elements/ButtonElements';
import { BasicColors, IconColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';

export const LargeButton = styled(BasicButton)`
  width: 100%;
  max-width: ${rem('230px')};
`;

export const FacebookButton = styled(LargeButton)`
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Facebook};
  background-color: ${IconColors.Facebook};
`;

export const GoogleButton = styled(LargeButton)`
  margin-top: ${rem('10px')};
  color: ${BasicColors.PureWhite};
  background: ${IconColors.Google};
  background-color: ${IconColors.Google};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-top: 0;
  }
`;
