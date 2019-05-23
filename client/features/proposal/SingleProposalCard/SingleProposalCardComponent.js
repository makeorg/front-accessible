import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { Link } from 'react-router-dom';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink, getConsultationLink } from 'Shared/helpers/url';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProposalAuthorElement } from 'Client/ui/Proposal/AuthorElement';
import { Vote } from 'Client/features/vote';
import { ContentSeparatorStyle } from 'Client/ui/Elements/Separators';
import { TallCardStyle } from 'Client/ui/Cards';
import { SequenceProposalStyle } from 'Client/features/sequence/Card/Styled';
import {
  InnerProposalStyle,
  ProposalFooterStyle,
  FooterContentSeparatorStyle,
  FooterContentStyle,
  DescriptionStyle,
  ButtonStyle,
} from './Styled';
import { CardSeparatorStyle } from '../../sequence/Card/Styled/Content';

type Props = {
  /** Object with all proposal's properties */
  proposal: TypeProposal,
  /** Object with all question's properties */
  questionConfiguration: TypeQuestionConfiguration,
};

/**
 * Renders Single Proposal Card
 */
export const SingleProposalCardComponent = (props: Props) => {
  const { proposal, questionConfiguration } = props;
  const { question } = proposal;

  return (
    <TallCardStyle id="proposal_card">
      <InnerProposalStyle>
        <ProposalAuthorElement
          author={proposal.author}
          country={proposal.country}
          language={proposal.language}
        />
        <CardSeparatorStyle aria-hidden />
        <SequenceProposalStyle>{proposal.content}</SequenceProposalStyle>
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
          proposalKey={proposal.proposalKey}
        />
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
                )}">${questionConfiguration.wording.title}</a>`,
              }),
            }}
          />
          <FooterContentSeparatorStyle />
          <CenterRowStyle>
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
          </CenterRowStyle>
        </FooterContentStyle>
      </ProposalFooterStyle>
    </TallCardStyle>
  );
};
