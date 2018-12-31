import styled from 'styled-components';
import { pxToRem } from 'Helpers/styled';
import { SpaceBetweenRow } from 'Components/Elements/FlexElements';
import {
  Facebook,
  Twitter,
  LinkedIn
} from './Buttons';

const Sharing = styled(SpaceBetweenRow)`
  width: 100%;
  max-width: ${pxToRem('150px')};
  margin-top: ${pxToRem('10px')};
`;

/* BackButton */
Sharing.Facebook = Facebook;
Sharing.Twitter = Twitter;
Sharing.LinkedIn = LinkedIn;

export default Sharing;
