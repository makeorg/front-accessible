import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ActionsSkipLinks = () => {
  return (
    <UnstyledListStyle>
      <li>
        <SkipLink as="a" href="#consultation_nav">
          {i18n.t('skip_links.secondary_nav')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#sidebar_content">
          {i18n.t('skip_links.sidebar_content')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
