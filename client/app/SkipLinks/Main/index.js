import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const MainSkipLinks = () => {
  return (
    <UnstyledListStyle aria-label={i18n.t('skip_links.main_list')}>
      <li>
        <SkipLink as="a" href="#main_content" tabIndex={1}>
          {i18n.t('skip_links.main_content')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#main_footer" tabIndex={1}>
          {i18n.t('skip_links.main_footer')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
