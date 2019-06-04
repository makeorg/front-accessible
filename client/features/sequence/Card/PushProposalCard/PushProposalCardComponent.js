// @flow
import * as React from 'react';
import { type PushProposalCardConfig } from 'Shared/types/card';
import { i18n } from 'Shared/i18n';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { SvgPencil, SvgStepForward } from 'Client/ui/Svg/elements';
import { ExtraLogo } from './ExtraLogo';
import {
  PushProposalButtonStyle,
  PushProposalNextButtonStyle,
} from '../Styled/Buttons';
import { ContentWrapperStyle, InnerContentStyle } from '../Styled/Content';
import { AltMainTitleStyle } from '../Styled/Titles';

type Props = {
  /** Object with Static properties used to configure the Push Proposal Card */
  configuration: PushProposalCardConfig,
  /** Method called when next card button is clicked */
  skipProposalPushCard: () => void,
  /** Method called when proposal button is clicked  */
  focusProposalField: () => void,
};

/**
 * Renders Push Proposal Card
 */
export const PushProposalCardComponent = (props: Props) => {
  const { configuration, skipProposalPushCard, focusProposalField } = props;

  return (
    <ContentWrapperStyle>
      <InnerContentStyle>
        <header>
          <ExtraLogo extraLogo={configuration.extraLogo} />
          <AltMainTitleStyle>
            {i18n.t('push_proposal_card.title')}
          </AltMainTitleStyle>
        </header>
        <MiddleColumnToRowStyle>
          <PushProposalButtonStyle type="submit" onClick={focusProposalField}>
            <IconWrapperStyle aria-hidden>
              <SvgPencil />
            </IconWrapperStyle>
            {i18n.t('common.propose')}
          </PushProposalButtonStyle>
          <PushProposalNextButtonStyle onClick={skipProposalPushCard}>
            <IconWrapperStyle aria-hidden>
              <SvgStepForward />
            </IconWrapperStyle>
            {i18n.t('push_proposal_card.next-cta')}
          </PushProposalNextButtonStyle>
        </MiddleColumnToRowStyle>
      </InnerContentStyle>
    </ContentWrapperStyle>
  );
};
