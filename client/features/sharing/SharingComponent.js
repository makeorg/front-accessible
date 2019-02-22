import * as React from 'react';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  SharingStyle,
  FacebookButtonStyle,
  TwitterButtonStyle,
  LinkedInButtonStyle,
} from './Styled';

type Props = {
  twitterShareUrl: string,
  facebookShareUrl: string,
  linkedinShareUrl: string,
  tabIndex?: number,
};

/**
 * Renders Sharing
 */
export class SharingComponent extends React.Component<Props> {
  static defaultProps = {
    tabIndex: undefined,
  };

  render() {
    const {
      twitterShareUrl,
      facebookShareUrl,
      linkedinShareUrl,
      tabIndex,
    } = this.props;
    return (
      <SharingStyle as={UnstyledListStyle}>
        <li>
          <FacebookButtonStyle
            rel="noreferrer noopener"
            aria-label="Facebook share"
            as="a"
            href={facebookShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </FacebookButtonStyle>
        </li>
        <li>
          <TwitterButtonStyle
            rel="noreferrer noopener"
            aria-label="Twitter share"
            as="a"
            href={twitterShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterButtonStyle>
        </li>
        <li>
          <LinkedInButtonStyle
            rel="noreferrer noopener"
            aria-label="Linkedin share"
            as="a"
            href={linkedinShareUrl}
            target="_blank"
            tabIndex={tabIndex}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </LinkedInButtonStyle>
        </li>
      </SharingStyle>
    );
  }
}
