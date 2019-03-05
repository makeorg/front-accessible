// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import {
  ParagraphStyle,
  CenterParagraphStyle,
} from 'Client/ui/Elements/ParagraphElements';
import { IconInButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { localizeModerationCharterLink } from 'Shared/helpers/url';
import { DescriptionWrapperStyle } from '../Styled';

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Localiszed Language of the app */
  language: string,
  /** Localiszed Country of the app */
  country: string,
  /** Method called to track moderation text show */
  trackModerationText: () => {},
  /** Method called to track link */
  trackModerationLink: () => void,
  /** Method called to track DescriptionText */
  trackModerationText: () => void,
};

/**
 * Renders description component after proposal submit button is clicked
 */
export class ProposalSubmitDescriptionComponent extends React.Component<Props> {
  componentDidMount() {
    const { trackModerationText } = this.props;
    trackModerationText();
  }

  render() {
    const { isPannelOpen, country, language, trackModerationLink } = this.props;
    return (
      <DescriptionWrapperStyle id="proposal-submit-description">
        <ParagraphStyle>{i18n.t('proposal_submit.description')}</ParagraphStyle>
        <CenterParagraphStyle>
          {i18n.t('proposal_submit.moderation_charter')}
          &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={localizeModerationCharterLink(country, language)}
            onClick={trackModerationLink}
            tabIndex={isPannelOpen ? -1 : 0}
          >
            {i18n.t('common.click_there')}
            &nbsp;
            <IconInButtonStyle>
              <FontAwesomeIcon
                aria-label={i18n.t('common.open_new_window')}
                icon={faExternalLinkAlt}
              />
            </IconInButtonStyle>
          </a>
        </CenterParagraphStyle>
      </DescriptionWrapperStyle>
    );
  }
}
