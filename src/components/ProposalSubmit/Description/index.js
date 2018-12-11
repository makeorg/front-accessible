import React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Description, AltDescription, DescriptionLink } from 'Components/Elements/DescriptionElements';
import { IconInButton } from 'Components/Elements/ButtonElements';
import { DescriptionWrapper } from '../Styled';


class ProposalSubmitDescriptionComponent extends React.Component {
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
            href="https://about.make.org/moderation"
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
