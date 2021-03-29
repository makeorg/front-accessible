// @flow
import React from 'react';
import {
  type TypeControversialsProposals,
  type RejectedProposalsType,
} from 'Shared/types/question';
import { ProposalStyle } from 'Client/ui/Elements/ProposalCardElements';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { formatAuthorName } from 'Shared/helpers/stringFormatter';
import {
  ProposalsListStyle,
  ProposalsListItemStyle,
  ProposalAuthorStyle,
  ResultsPositionStyle,
  ResultsLikeItStyle,
  ResultsNoWayStyle,
  ResultsProposalIconStyle,
} from './style';

type Props = {
  proposals: TypeControversialsProposals[] | RejectedProposalsType[],
  isRejected?: boolean,
  question: QuestionType,
};

export const DeprecatedProposalsResults = ({
  proposals,
  question,
  isRejected,
}: Props) => (
  <ProposalsListStyle>
    {proposals.map(proposal => (
      <ProposalsListItemStyle key={proposal.author}>
        <ProposalAuthorStyle>
          <ScreenReaderItemStyle>
            {i18n.t('proposal_card.author.from')}
          </ScreenReaderItemStyle>
          {formatAuthorName(proposal.author)}
        </ProposalAuthorStyle>
        <ScreenReaderItemStyle>
          {i18n.t('proposal_card.content')}
        </ScreenReaderItemStyle>
        <ProposalStyle as="p" lang={question.language}>
          {proposal.content}
        </ProposalStyle>
        {isRejected ? (
          <ResultsPositionStyle>
            <ResultsNoWayStyle>
              {i18n.t('consultation.results.proposals.rejected_results', {
                disagree: proposal.disagree,
                no_way: proposal.no_way,
              })}
            </ResultsNoWayStyle>
          </ResultsPositionStyle>
        ) : (
          <ResultsPositionStyle>
            <ResultsLikeItStyle>
              {i18n.t('consultation.results.proposals.controversials_agree', {
                count: proposal.agree,
              })}
            </ResultsLikeItStyle>
            <ResultsProposalIconStyle aria-hidden focusable="false" />
            <ResultsNoWayStyle>
              {i18n.t(
                'consultation.results.proposals.controversials_disagree',
                {
                  count: proposal.disagree,
                }
              )}
            </ResultsNoWayStyle>
          </ResultsPositionStyle>
        )}
      </ProposalsListItemStyle>
    ))}
  </ProposalsListStyle>
);