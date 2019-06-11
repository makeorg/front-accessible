import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const SequenceSkipLinks = () => {
  return (
    <UnstyledListStyle>
      <li>
        <SkipLink as="a" href="#proposal_submit">
          {i18n.t('skip_links.proposal_submit')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#sequence">
          {i18n.t('skip_links.proposal_list')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
