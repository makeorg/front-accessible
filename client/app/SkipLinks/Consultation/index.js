import React from 'react';
import { i18n } from 'Shared/i18n';
import { SkipLink } from 'Client/app/Styled/MainElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  RESULTS_REJECTED,
  RESULTS_CONTEXT,
  RESULTS_KEY_FIGURES,
  RESULTS_TOP_IDEAS,
  RESULTS_CARTOGRAPHY,
  RESULTS_CONTROVERSIALS,
  RESULTS_PARTICIPATION,
} from 'Shared/constants/ids';

type Props = {
  canPropose: boolean,
  withResults: boolean,
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

export const ConsultationSkipLinks = ({ canPropose, withResults }: Props) => {
  if (withResults) {
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
        <li>
          <SkipLink as="a" href={`#${RESULTS_CONTEXT}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.context'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_KEY_FIGURES}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.key_figures.title'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_TOP_IDEAS}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.top_ideas.title'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_CARTOGRAPHY}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.cartography.title'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_CONTROVERSIALS}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.proposals.controversials'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_REJECTED}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.proposals.rejected'),
            })}
          </SkipLink>
        </li>
        <li>
          <SkipLink as="a" href={`#${RESULTS_PARTICIPATION}`}>
            {i18n.t('skip_links.dynamic_section', {
              name: i18n.t('consultation.results.participation.title'),
            })}
          </SkipLink>
        </li>
      </UnstyledListStyle>
    );
  }

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
      {canPropose && (
        <li>
          <SkipLink onClick={focusProposalField}>
            {i18n.t('skip_links.proposal_submit')}
          </SkipLink>
        </li>
      )}
      <li>
        <SkipLink as="a" href="#tag_list">
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
};
