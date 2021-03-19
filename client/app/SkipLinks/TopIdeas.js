// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const TopIdeasSkipLinks = () => (
  <UnstyledListStyle>
    <li>
      <SkipLink as="a" href="#sidebar_content">
        {i18n.t('skip_links.sidebar_content')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href="#main">
        {i18n.t('skip_links.dynamic_section', {
          name: i18n.t('idea_card.title'),
        })}
      </SkipLink>
    </li>
  </UnstyledListStyle>
);
