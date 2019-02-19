/* @flow */
import * as React from 'react';
import { Spinner } from 'Client/ui/Spinner';
import type { ProposalType } from 'Shared/types/proposal';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { SingleProposalCardComponent } from 'Client/features/proposal/SingleProposalCard';
import { SingleProposalSharingComponent } from 'Client/features/proposal/SingleProposalCard/Sharing';

type Props = {
  /** Object with Dynamic properties used to configure the Proposal (author, id, slug, ...) */
  proposal: ProposalType,
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
      <Spinner />
    );
  }

  return (
    <React.Fragment>
      <SingleProposalCardComponent {...props} />
      <SingleProposalSharingComponent />
    </React.Fragment>
  );
};
