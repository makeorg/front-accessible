/* @flow */
import * as React from 'react';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { SingleProposalCard } from 'Client/features/proposal/SingleProposalCard';
import { SingleProposalSharingComponent } from 'Client/features/proposal/SingleProposalCard/Sharing';
import { ProposalSkipLinks } from 'Client/app/SkipLinks/Proposal';

type Props = {
  /** Object with Dynamic properties used to configure the Proposal (author, id, slug, ...) */
  proposal: TypeProposal,
  /** Object with Static properties of the question (theme, ...) */
  questionConfiguration: TypeQuestionConfiguration,
};

/**
 * Renders SequenceContainerLoader
 */
export const ProposalPageContentLoader = (props: Props) => {
  const { proposal, questionConfiguration } = props;

  if (!proposal || !questionConfiguration) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <ProposalSkipLinks />
      <SingleProposalCard proposal={proposal} />
      <SingleProposalSharingComponent
        sharingParams={questionConfiguration.sharing}
      />
    </React.Fragment>
  );
};
