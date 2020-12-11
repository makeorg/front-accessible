/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProposalCharLimitStyle } from '../style';

type Props = {
  /** Value's lentgh */
  currentLength: number,
};
/**
 * Render the Proposal Field
 */
export const CharsCounter = ({ currentLength }: Props) => (
  <>
    <ProposalCharLimitStyle aria-hidden>
      {`${currentLength}/140`}
    </ProposalCharLimitStyle>
    <ScreenReaderItemStyle>
      {i18n.t('proposal_submit.deprecated.counter', {
        current: currentLength,
        total: 140,
      })}
    </ScreenReaderItemStyle>
  </>
);
