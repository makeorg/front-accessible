import * as React from 'react';
import { UnstyledList } from 'Components/Elements/ListElements';
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
const SharingComponent = ({ twitterShareUrl, facebookShareUrl, linkedinShareUrl }) => (
  <Sharing as={UnstyledList}>
    <li>
      <Sharing.Facebook
        rel="noreferrer noopener"
        aria-label="Facebook share"
        as="a"
        href={facebookShareUrl}
        target="_blank"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </Sharing.Facebook>
    </li>
    <li>
      <Sharing.Twitter
        rel="noreferrer noopener"
        aria-label="Twitter share"
        as="a"
        href={twitterShareUrl}
        target="_blank"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </Sharing.Twitter>
    </li>
    <li>
      <Sharing.LinkedIn
        rel="noreferrer noopener"
        aria-label="Linkedin share"
        as="a"
        href={linkedinShareUrl}
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </Sharing.LinkedIn>
    </li>
  </Sharing>
);

export default SharingComponent;
