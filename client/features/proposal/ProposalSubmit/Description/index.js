// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { CenterParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { localizeModerationCharterLink } from 'Shared/helpers/url';
import { Svg } from 'Client/ui/Svg';
import { DescriptionWrapperStyle } from '../Styled';

type Props = {
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
    const { country, language, trackModerationLink } = this.props;
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
            href={localizeModerationCharterLink(country, language)}
            onClick={trackModerationLink}
          >
            {i18n.t('common.click_there')}
            &nbsp;
            <IconWrapperStyle>
              <Svg
                aria-label={i18n.t('common.open_new_window')}
                type="SvgExternalLink"
              />
            </IconWrapperStyle>
          </a>
        </CenterParagraphStyle>
      </DescriptionWrapperStyle>
    );
  }
}
