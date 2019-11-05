import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { focusProposalField } from './Consultation';

type Props = {
  canPropose: boolean,
};

export const SequenceSkipLinks = ({ canPropose }: Props) => {
  return (
    <UnstyledListStyle>
      {canPropose && (
        <li>
          <SkipLink onClick={focusProposalField}>
            {i18n.t('skip_links.proposal_submit')}
          </SkipLink>
        </li>
      )}
      <li>
        <SkipLink as="a" href="#sequence">
          {i18n.t('skip_links.proposal_list')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
