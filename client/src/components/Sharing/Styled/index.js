import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { SpaceBetweenRow } from 'Src/components/Elements/FlexElements';
import {
  Facebook,
  Twitter,
  LinkedIn
} from './Buttons';

const Sharing = styled(SpaceBetweenRow)`
  width: 100%;
  max-width: ${pxToRem('150px')};
`;

/* BackButton */
Sharing.Facebook = Facebook;
Sharing.Twitter = Twitter;
Sharing.LinkedIn = LinkedIn;

export default Sharing;
