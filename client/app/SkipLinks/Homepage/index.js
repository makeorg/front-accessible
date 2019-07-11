import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const HomepageSkipLinks = () => {
  return (
    <UnstyledListStyle>
      <li>
        <SkipLink as="a" href="#featured_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.featured.title'),
          })}
        </SkipLink>
      </li>
      <li>
        <SkipLink as="a" href="#current_consultations">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.current_consultations.title'),
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
        <SkipLink as="a" href="#business_consultations">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('homepage.business_consultations.title'),
          })}
        </SkipLink>
      </li>
    </UnstyledListStyle>
  );
};
