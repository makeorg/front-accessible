// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionResultsType } from 'Shared/types/question';
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
  RESULTS_REPORT,
} from 'Shared/constants/ids';

type Props = {
  questionResults: QuestionResultsType,
};

export const ResultsSkipLinks = ({ questionResults }: Props) => (
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
          name: i18n.t('consultation.results.deprecated.key_figures.title'),
        })}
      </SkipLink>
    </li>
    <li>
      <SkipLink as="a" href={`#${RESULTS_TOP_IDEAS}`}>
        {i18n.t('skip_links.dynamic_section', {
          name: i18n.t('consultation.results.top_ideas.skiplink'),
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
          name: i18n.t('consultation.results.proposals.controversials_title'),
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
          name: i18n.t('consultation.results.deprecated.participation.title'),
        })}
      </SkipLink>
    </li>
    {questionResults && questionResults.reports && (
      <li>
        <SkipLink as="a" href={`#${RESULTS_REPORT}`}>
          {i18n.t('skip_links.dynamic_section', {
            name: i18n.t('consultation.results.download.deprecated_title'),
          })}
        </SkipLink>
      </li>
    )}
  </UnstyledListStyle>
);
