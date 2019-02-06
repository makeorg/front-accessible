import * as React from 'react';
import i18next from 'i18next';
import type { Proposal } from 'Shared/types/proposal';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink } from 'Shared/helpers/url';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProposalAuthor } from 'Client/features/proposal/ProposalAuthor';
import { Vote } from 'Client/features/vote';
import ProposalCard from 'Client/features/sequence/Card/Styled';
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
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
        />
      </SingleProposal.InnerProposal>
      <SingleProposal.Footer>
        <SingleProposal.ContentSeparator />
        <SingleProposal.FooterContent>
          <SingleProposal.DescriptionStyle
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
          <CenterRowStyle>
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
          </CenterRowStyle>
        </SingleProposal.FooterContent>
      </SingleProposal.Footer>
    </SingleProposal.Card>
  );
};
