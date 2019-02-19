// @flow
import * as React from 'react';
import i18n from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { DescriptionStyle, AltDescriptionStyle, DescriptionLinkStyle } from 'Client/ui/Elements/DescriptionElements';
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
  /** Method called to track DescriptionLinkStyle */
  trackModerationLink: () => void,
  /** Method called to track DescriptionText */
  trackModerationText: () => void
}

/**
 * Renders description component after proposal submit button is clicked
 */
class ProposalSubmitDescriptionComponent extends React.Component<Props> {
  componentDidMount() {
    const { trackModerationText } = this.props;
    trackModerationText();
  }

  render() {
    const {
      isPannelOpen,
      country,
      language,
      trackModerationLink
    } = this.props;
    return (
      <DescriptionWrapperStyle id="proposal-submit-description">
        <DescriptionStyle>
          {i18n.t('proposal_submit.description')}
        </DescriptionStyle>
        <AltDescriptionStyle>
          {i18n.t('proposal_submit.moderation_charter')}
          &nbsp;
          <DescriptionLinkStyle
            target="_blank"
            href={localizeModerationCharterLink(country, language)}
            onClick={trackModerationLink}
            tabIndex={isPannelOpen ? -1 : 0}
          >
            {i18n.t('common.click_there')}
            &nbsp;
            <IconInButtonStyle>
              <FontAwesomeIcon aria-label={i18n.t('common.open_new_window')} icon={faExternalLinkAlt} />
            </IconInButtonStyle>
          </DescriptionLinkStyle>
        </AltDescriptionStyle>
      </DescriptionWrapperStyle>
    );
  }
}

export default ProposalSubmitDescriptionComponent;
