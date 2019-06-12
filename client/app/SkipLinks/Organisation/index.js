import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const OrganisationProfileSkipLinks = () => {
  return (
    <UnstyledListStyle>
      <li>
        <SkipLink as="a" href="#organisation_nav">
          {i18n.t('skip_links.secondary_nav')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};