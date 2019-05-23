import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const ConsultationSkipLinks = () => {
  return (
    <UnstyledListStyle aria-label={i18n.t('skip_links.secondary_list')}>
      <li>
        <SkipLink as="a" href="#consultation_nav" tabIndex={1}>
          {i18n.t('skip_links.secondary_nav')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#sidebar_content" tabIndex={1}>
          {i18n.t('skip_links.sidebar_content')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#proposal_submit" tabIndex={1}>
          {i18n.t('skip_links.proposal_submit')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#tag_list" tabIndex={1}>
          {i18n.t('skip_links.tag_list')}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#proposal_list" tabIndex={1}>
          {i18n.t('skip_links.proposal_list')}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
