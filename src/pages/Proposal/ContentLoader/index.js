/* @flow */
import * as React from 'react';
import SpinnerComponent from 'Components/Spinner';
import type { Proposal } from 'Types/proposal';
import type { QuestionConfiguration } from 'Types/sequence';
import { InnerContent } from 'Components/Elements/MainElements';
import { SingleProposalCardComponent } from 'Components/ProposalCard/SingleProposalCard';
import { SingleProposalSharingComponent } from 'Components/ProposalCard/SingleProposalCard/Sharing';

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
    <InnerContent>
      <SingleProposalCardComponent {...props} />
      <SingleProposalSharingComponent />
    </InnerContent>
  );
};
