import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const SequenceSkipLinks = () => {
  return (
    <UnstyledListStyle aria-label={i18n.t('skip_links.secondary_list')}>
      <li>
        <SkipLink as="a" href="#proposal_submit" tabIndex={1}>
          {i18n.t('skip_links.proposal_submit')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#sequence" tabIndex={1}>
          {i18n.t('skip_links.proposal_list')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
