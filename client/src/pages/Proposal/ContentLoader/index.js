/* @flow */
import * as React from 'react';
import SpinnerComponent from 'Src/components/Spinner';
import type { Proposal } from 'Src/types/proposal';
import type { QuestionConfiguration } from 'Src/types/sequence';
import { SingleProposalCardComponent } from 'Src/components/ProposalCard/SingleProposalCard';
import { SingleProposalSharingComponent } from 'Src/components/ProposalCard/SingleProposalCard/Sharing';

type Props = {
  /** Object with Dynamic properties used to configure the Proposal (author, id, slug, ...) */
  proposal: Proposal,
  /** Object with Static properties of the question (theme, ...) */
  questionConfiguration: QuestionConfiguration,
  questionSlug: string
};

/**
 * Renders SequenceContainerLoader
 */
export const ProposalPageContentLoader = (props: Props) => {
  const { proposal } = props;

  if (!proposal) {
    return (
      <SpinnerComponent />
    );
  }

  return (
    <React.Fragment>
      <SingleProposalCardComponent {...props} />
      <SingleProposalSharingComponent />
    </React.Fragment>
  );
};
