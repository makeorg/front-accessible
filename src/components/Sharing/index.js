import * as React from 'react';
import Unstyledlist from 'Components/Elements/ListElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import Sharing from './Styled';

/**
 * Renders Sharing
 */
const SharingComponent = () => (
  <Sharing as={Unstyledlist}>
    <li>
      <Sharing.Facebook>
        <FontAwesomeIcon icon={faFacebookF} />
      </Sharing.Facebook>
    </li>
    <li>
      <Sharing.Twitter>
        <FontAwesomeIcon icon={faTwitter} />
      </Sharing.Twitter>
    </li>
    <li>
      <Sharing.LinkedIn>
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Sharing.LinkedIn>
    </li>
  </Sharing>
);

export default SharingComponent;
