import * as React from 'react';
import { UnstyledList } from 'Src/components/Elements/ListElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import Sharing from './Styled';

type Props = {
  twitterShareUrl: string,
  facebookShareUrl: string,
  linkedinShareUrl: string,
  tabIndex?: number
}

/**
 * Renders Sharing
 */
export class SharingComponent extends React.Component<Props> {
  static defaultProps = {
    tabIndex: undefined
  }

  render() {
    const {
      twitterShareUrl,
      facebookShareUrl,
      linkedinShareUrl,
      tabIndex
    } = this.props;
    return (
      <Sharing as={UnstyledList}>
        <li>
          <Sharing.Facebook
            rel="noreferrer noopener"
            aria-label="Facebook share"
            as="a"
            href={facebookShareUrl}
            target="_blank"
            tabIndex={tabIndex}
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
            tabIndex={tabIndex}
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
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Sharing.LinkedIn>
        </li>
      </Sharing>
    );
  }
}
