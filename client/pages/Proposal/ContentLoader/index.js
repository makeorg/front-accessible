/* @flow */
import * as React from 'react';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { SingleProposalCard } from 'Client/features/proposal/SingleProposalCard';
import { SingleProposalSharingComponent } from 'Client/features/proposal/SingleProposalCard/Sharing';

type Props = {
  /** Object with Dynamic properties used to configure the Proposal (author, id, slug, ...) */
  proposal: TypeProposal,
  /** Object with Static properties of the question (theme, ...) */
  questionConfiguration: TypeQuestionConfiguration,
  questionSlug: string,
};

/**
 * Renders SequenceContainerLoader
 */
export const ProposalPageContentLoader = (props: Props) => {
  const { proposal } = props;

  if (!proposal) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <SingleProposalCard {...props} />
      <SingleProposalSharingComponent />
    </React.Fragment>
  );
};
