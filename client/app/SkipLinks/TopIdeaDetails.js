import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

type Props = {
  hasComments: boolean,
  hasProposals: boolean,
};

export const TopIdeaDetailsSkipLinks = ({
  hasComments,
  hasProposals,
}: Props) => (
  <UnstyledListStyle>
    <li>
      <SkipLink as="a" href="#sidebar_content">
        {i18n.t('skip_links.sidebar_content')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href="#main">
        {i18n.t('skip_links.dynamic_section', {
          name: i18n.t('idea_details.current_page'),
        })}
      </SkipLink>
    </li>
    {hasComments && (
      <li>
        <SkipLink as="a" href="#comments_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('idea_details.comments'),
          })}
        </SkipLink>
      </li>
    )}
    {hasProposals && (
      <li>
        <SkipLink as="a" href="#proposals_list">
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('idea_details.proposals'),
          })}
        </SkipLink>
      </li>
    )}
  </UnstyledListStyle>
);
