import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { TAGS_SECTION } from 'Shared/constants/ids';

type Props = {
  canPropose: boolean,
  isGreatCause: boolean,
};

export const focusProposalField = (
  event: SyntheticEvent<HTMLButtonElement>
) => {
  event.preventDefault();
  const proposalInput = document.getElementById('proposal');
  if (proposalInput !== null) {
    proposalInput.focus();
  }
};

export const ConsultationSkipLinks = ({ canPropose, isGreatCause }: Props) => (
  <UnstyledListStyle>
    {isGreatCause && (
      <li>
        <SkipLink as="a" href="#consultation_nav">
          {i18n.t('skip_links.secondary_nav')}
        </SkipLink>
      </li>
    )}
    <li>
      <SkipLink as="a" href="#sidebar_content">
        {i18n.t('skip_links.sidebar_content')}
      </SkipLink>
    </li>
    {canPropose && (
      <li>
        <SkipLink onClick={focusProposalField}>
          {i18n.t('skip_links.proposal_submit')}
        </SkipLink>
      </li>
    )}
    <li>
      <SkipLink as="a" href={`#${TAGS_SECTION}`}>
        {i18n.t('skip_links.tag_list')}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href="#proposal_list">
        {i18n.t('skip_links.proposal_list')}
      </SkipLink>
    </li>
  </UnstyledListStyle>
);
