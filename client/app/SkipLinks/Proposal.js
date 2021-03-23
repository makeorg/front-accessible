// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ProposalSkipLinks = () => (
  <UnstyledListStyle>
    <li>
      <SkipLink as="a" href="#proposal_card">
        {i18n.t('skip_links.proposal_card')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href="#sharing_proposal">
        {i18n.t('skip_links.sharing')}
      </SkipLink>
    </li>
  </UnstyledListStyle>
);
