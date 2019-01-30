/* @flow */

import styled from 'styled-components';
import { MiddleColumn } from 'Client/ui/Elements/FlexElements';
import {
  Wrapper,
  FirstRing,
  SecondRing,
  ThirdRing,
  FourthRing
} from './Spinner';

const Spinner = styled(MiddleColumn)`
  width: 100%;
  height: 100%
`;

/* FooterContent */
Spinner.Wrapper = Wrapper;
Spinner.FirstRing = FirstRing;
Spinner.SecondRing = SecondRing;
Spinner.ThirdRing = ThirdRing;
Spinner.FourthRing = FourthRing;

export default Spinner;
