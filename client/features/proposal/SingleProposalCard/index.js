import * as React from 'react';
import i18n from 'Shared/i18n';
import { Link } from 'react-router-dom';
import type { ProposalType } from 'Shared/types/proposal';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { getSequenceLink } from 'Shared/helpers/url';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import { ProposalAuthor } from 'Client/features/proposal/ProposalAuthor';
import { Vote } from 'Client/features/vote';
import {
  CardStyle,
  InnerProposalStyle,
  FooterStyle,
  ContentSeparatorStyle,
  FooterContentSeparatorStyle,
  FooterContentStyle,
  DescriptionStyle,
  ButtonStyle
} from './Styled';
import { ProposalStyle } from '../../sequence/Card/Styled';
import { SeparatorStyle } from '../../sequence/Card/Styled/Content';

type Props = {
  /** Object with all proposal's properties */
  proposal: ProposalType,
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
    <CardStyle>
      <InnerProposalStyle>
        <ProposalAuthor author={proposal.author} />
        <SeparatorStyle aria-hidden />
        <ProposalStyle>
          {proposal.content}
        </ProposalStyle>
        <Vote
          proposalId={proposal.id}
          votes={proposal.votes}
          proposalKey={proposal.proposalKey}
        />
      </InnerProposalStyle>
      <FooterStyle>
        <ContentSeparatorStyle />
        <FooterContentStyle>
          <DescriptionStyle
            dangerouslySetInnerHTML={
              {
                __html: i18n.t(
                  'proposal_page.footer_text',
                  { operation_name: `<span>${questionConfiguration.wording.title}</span>` }
                )
              }
            }
          />
          <FooterContentSeparatorStyle />
          <CenterRowStyle>
            <ButtonStyle
              as={Link}
              to={getSequenceLink(questionSlug, proposal.country, proposal.language)}
            >
              {i18n.t('proposal_page.button_1')}
            </ButtonStyle>
            <ButtonStyle
              as="a"
              href={questionConfiguration.aboutUrl}
            >
              {i18n.t('proposal_page.button_2')}
            </ButtonStyle>
          </CenterRowStyle>
        </FooterContentStyle>
      </FooterStyle>
    </CardStyle>
  );
};
