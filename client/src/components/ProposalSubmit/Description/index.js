// @flow
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Description, AltDescription, DescriptionLink } from 'Src/components/Elements/DescriptionElements';
import { IconInButton } from 'Src/components/Elements/ButtonElements';
import { localizeModerationCharterLink } from 'Shared/helpers/url';
import { DescriptionWrapper } from '../Styled';

type Props = {
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called to track moderation text show */
  trackModerationText: () => {},
  /** Method called to track DescriptionLink */
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
      trackModerationLink
    } = this.props;
    return (
      <DescriptionWrapper id="proposal-submit-description">
        <Description>
          {i18next.t('proposal_submit.description')}
        </Description>
        <AltDescription>
          {i18next.t('proposal_submit.moderation_charter')}
          &nbsp;
          <DescriptionLink
            target="_blank"
            href={localizeModerationCharterLink()}
            onClick={trackModerationLink}
            tabIndex={isPannelOpen ? -1 : 0}
          >
            {i18next.t('common.click_there')}
            &nbsp;
            <IconInButton>
              <FontAwesomeIcon aria-label={i18next.t('common.open_new_window')} icon={faExternalLinkAlt} />
            </IconInButton>
          </DescriptionLink>
        </AltDescription>
      </DescriptionWrapper>
    );
  }
}

export default ProposalSubmitDescriptionComponent;
