import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  NAVIGATION_ARIA_CLASS,
  PANEL_ARIA_NEGATIVE_TAB_CLASS,
} from 'Shared/constants/a11y';
import {
  MAIN_SKIPLINKS,
  MAIN_FOOTER,
  MAIN_CONTENT,
} from 'Shared/constants/ids';

export const MainSkipLinks = () => (
  <UnstyledListStyle
    id={MAIN_SKIPLINKS}
    className={`${NAVIGATION_ARIA_CLASS} ${PANEL_ARIA_NEGATIVE_TAB_CLASS}`}
  >
    <li>
      <SkipLink as="a" href={`#${MAIN_CONTENT}`}>
        {i18n.t('skip_links.main_content')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href={`#${MAIN_FOOTER}`}>
        {i18n.t('skip_links.main_footer')}
      </SkipLink>
    </li>
  </UnstyledListStyle>
);
