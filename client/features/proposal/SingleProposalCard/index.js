import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { getSequenceLink, getConsultationLink } from 'Shared/helpers/url';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { Vote } from 'Client/features/vote';
import { ContentSeparatorStyle } from 'Client/ui/Elements/Separators';
import { TallCardStyle } from 'Client/ui/Cards';
import { SequenceProposalStyle } from 'Client/features/sequence/Card/Styled';
import { isInProgress } from 'Shared/helpers/date';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { CardSeparatorStyle } from 'Client/features/sequence/Card/Styled/Content';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  InnerProposalStyle,
  ProposalFooterStyle,
  FooterContentSeparatorStyle,
  FooterContentStyle,
  DescriptionStyle,
  ButtonWrapperStyle,
  ButtonStyle,
} from './Styled';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
};

export const SingleProposalCard = (props: Props) => {
  const { proposal } = props;
  const { question } = proposal;
  const canVote = isInProgress(question);

  return (
    <TallCardStyle id="proposal_card">
      <InnerProposalStyle>
        <ProposalAuthorElement
          author={proposal.author}
          country={proposal.country}
          language={proposal.language}
        />
        <CardSeparatorStyle />
        <SequenceProposalStyle>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.content')}
          </ScreenReaderItemStyle>
          {proposal.content}
        </SequenceProposalStyle>
        {canVote ? (
          <Vote
            proposalId={proposal.id}
            votes={proposal.votes}
            proposalKey={proposal.proposalKey}
          />
        ) : (
          <DetailledVoteResults
            votes={proposal.votes}
            proposalId={proposal.id}
          />
        )}
      </InnerProposalStyle>
      <ProposalFooterStyle>
        <ContentSeparatorStyle />
        <FooterContentStyle>
          <DescriptionStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('proposal_page.footer_text', {
                operation_name: `<a href="${getConsultationLink(
                  proposal.country,
                  proposal.language,
                  question.slug
                )}">${question.wording.title}</a>`,
              }),
            }}
          />
          <FooterContentSeparatorStyle />
          <ButtonWrapperStyle>
            <ButtonStyle
              as={Link}
              to={getSequenceLink(
                proposal.country,
                proposal.language,
                question.slug
              )}
            >
              {i18n.t('proposal_page.button_1')}
            </ButtonStyle>
            <ButtonStyle
              as={Link}
              to={getConsultationLink(
                proposal.country,
                proposal.language,
                question.slug
              )}
            >
              {i18n.t('proposal_page.button_2')}
            </ButtonStyle>
          </ButtonWrapperStyle>
        </FooterContentStyle>
      </ProposalFooterStyle>
    </TallCardStyle>
  );
};
