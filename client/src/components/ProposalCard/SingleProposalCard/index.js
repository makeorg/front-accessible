import * as React from 'react';
import i18next from 'i18next';
import type { Proposal } from 'Shared/types/proposal';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink } from 'Shared/helpers/url';
import { CenterRow } from 'Client/ui/Elements/FlexElements';
import { ProposalAuthor } from 'Src/components/ProposalCard/ProposalAuthor';
import VoteContainer from 'Src/containers/Vote';
import ProposalCard from 'Src/components/ProposalCard/Styled';
import * as SingleProposal from './Styled';

type Props = {
  /** Object with all proposal's properties */
  proposal: Proposal,
  /** Object with all question's properties */
  questionConfiguration: QuestionConfiguration,
  questionSlug: string
}

/**
 * Renders Single Proposal Card
 */
export const SingleProposalCardComponent = (props: Props) => {
  const {
    proposal,
    questionConfiguration,
    questionSlug
  } = props;

  return (
    <SingleProposal.Card>
      <SingleProposal.InnerProposal>
        <ProposalAuthor author={proposal.author} />
        <ProposalCard.Separator aria-hidden />
        <ProposalCard.Proposal>
          {proposal.content}
        </ProposalCard.Proposal>
        <VoteContainer
          proposalId={proposal.id}
          votes={proposal.votes}
        />
      </SingleProposal.InnerProposal>
      <SingleProposal.Footer>
        <SingleProposal.ContentSeparator />
        <SingleProposal.FooterContent>
          <SingleProposal.Description
            dangerouslySetInnerHTML={
              {
                __html: i18next.t(
                  'proposal_page.footer_text',
                  { operation_name: `<span>${questionConfiguration.wording.title}</span>` }
                )
              }
            }
          />
          <SingleProposal.FooterContentSeparator />
          <CenterRow>
            <SingleProposal.Button
              as="a"
              href={getSequenceLink(questionSlug)}
            >
              {i18next.t('proposal_page.button_1')}
            </SingleProposal.Button>
            <SingleProposal.Button
              as="a"
              href={questionConfiguration.aboutUrl}
            >
              {i18next.t('proposal_page.button_2')}
            </SingleProposal.Button>
          </CenterRow>
        </SingleProposal.FooterContent>
      </SingleProposal.Footer>
    </SingleProposal.Card>
  );
};
