// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { MODERATION_CHARTER_LINK } from 'Shared/constants/url';
import { Tracking } from 'Shared/services/Tracking';
import { DescriptionWrapperStyle } from '../Styled';

type Props = {
  /** Method called to track link */
  trackModerationLink: () => void,
};

/**
 * Renders description component after proposal submit button is clicked
 */
export class ProposalSubmitDescriptionComponent extends React.Component<Props> {
  componentDidMount() {
    Tracking.trackDisplayModerationText();
  }

  render() {
    const { trackModerationLink } = this.props;
    return (
      <DescriptionWrapperStyle id="proposal-submit-description">
        <CenterParagraphStyle>
          {i18n.t('proposal_submit.description')}
        </CenterParagraphStyle>
        <CenterParagraphStyle>
          {i18n.t('proposal_submit.moderation_charter')}
          &nbsp;
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={MODERATION_CHARTER_LINK}
            onClick={trackModerationLink}
          >
            {i18n.t('common.click_there')}
            &nbsp;
            <IconWrapperStyle>
              <SvgExternalLink aria-label={i18n.t('common.open_new_window')} />
            </IconWrapperStyle>
          </a>
        </CenterParagraphStyle>
      </DescriptionWrapperStyle>
    );
  }
}
