import styled from 'styled-components';
import { rem } from 'polished';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { SpaceBetweenColumnToRow } from '../../Elements/FlexElements';
import { FacebookButton, GoogleButton } from './Buttons';

const Authentification = styled(SpaceBetweenColumnToRow)`
  width: 100%;
  margin-top: ${rem('10px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-top: ${rem('15px')};
  }
`;

/* Buttons */
Authentification.FacebookButton = FacebookButton;
Authentification.GoogleButton = GoogleButton;

export default Authentification;
