import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const HomepageSkipLinks = () => {
  return (
    <UnstyledListStyle aria-label={i18n.t('skip_links.secondary_list')}>
      <li>
        <SkipLink as="a" href="#featured_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.featured.title'),
          })}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#great_cause_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.great-causes.title'),
          })}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#corporate">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.corporate.first-section.title'),
          })}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#question_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.question_list.title'),
          })}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
