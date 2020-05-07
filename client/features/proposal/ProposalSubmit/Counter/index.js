/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { ProposalCharLimitStyle } from '../Styled';

type Props = {
  /** Value's lentgh */
  currentLength: number,
};
/**
 * Render the Proposal Field
 */
export const CharsCounter = ({ currentLength }: Props) => {
  return (
    <>
      <ProposalCharLimitStyle aria-hidden>
        {`${currentLength}/140`}
      </ProposalCharLimitStyle>
      <ScreenReaderItemStyle>
        {i18n.t('proposal_submit.counter', {
          current: currentLength,
          total: 140,
        })}
      </ScreenReaderItemStyle>
    </>
  );
};
