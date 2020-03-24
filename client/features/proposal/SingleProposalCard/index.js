import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { type ProposalType } from 'Shared/types/proposal';
import { getSequenceLink, getConsultationLink } from 'Shared/helpers/url';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { Vote } from 'Client/features/vote';
import { ContentSeparatorStyle } from 'Client/ui/Elements/Separators';
import { TallCardStyle } from 'Client/ui/Cards';
import {
  SequenceProposalStyle,
  SequenceCardSeparatorStyle,
} from 'Client/features/sequence/style';
import { isInProgress } from 'Shared/helpers/date';
import { DetailledVoteResults } from 'Client/ui/Proposal/DetailledVoteResults';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  TopComponentContext,
  type TopComponentContextValueType,
  TopComponentContextValue,
} from 'Client/context/TopComponentContext';
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
  proposal: ProposalType,
};

export const SingleProposalCard = ({ proposal }: Props) => {
  const isConsultationOpened = isInProgress(proposal.question);
  const topComponentContext: TopComponentContextValueType = TopComponentContextValue.getSingleProposal();

  return (
    <TopComponentContext.Provider value={topComponentContext}>
      <TallCardStyle id="proposal_card">
        <InnerProposalStyle>
          <ProposalAuthorElement proposal={proposal} />
          <SequenceCardSeparatorStyle />
          <SequenceProposalStyle>
            <ScreenReaderItemStyle>
              {i18n.t('proposal_card.content')}
            </ScreenReaderItemStyle>
            {proposal.content}
          </SequenceProposalStyle>
          {isConsultationOpened ? (
            <Vote
              proposalId={proposal.id}
              questionSlug={proposal.question.slug}
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
                    proposal.question.slug
                  )}">${proposal.question.wording.title}</a>`,
                }),
              }}
            />
            <FooterContentSeparatorStyle />
            <ButtonWrapperStyle>
              {isConsultationOpened && (
                <ButtonStyle
                  as={Link}
                  to={getSequenceLink(
                    proposal.country,
                    proposal.language,
                    proposal.question.slug
                  )}
                >
                  {i18n.t('proposal_page.button_1')}
                </ButtonStyle>
              )}
              <ButtonStyle
                as={Link}
                to={getConsultationLink(
                  proposal.country,
                  proposal.language,
                  proposal.question.slug
                )}
              >
                {i18n.t('proposal_page.button_2')}
              </ButtonStyle>
            </ButtonWrapperStyle>
          </FooterContentStyle>
        </ProposalFooterStyle>
      </TallCardStyle>
    </TopComponentContext.Provider>
  );
};
