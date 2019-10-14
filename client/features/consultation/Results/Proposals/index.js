import React from 'react';
import {
  type TypeControversialsProposals,
  type TypeRejectedProposals,
} from 'Shared/types/question';
import { ProposalStyle } from 'Client/ui/Elements/ProposalCardElements';
import { i18n } from 'Shared/i18n';
import { SvgLightning } from 'Client/ui/Svg/elements';
import {
  ProposalsListStyle,
  ProposalsListItemStyle,
  ProposalAuthorStyle,
  ResultsPositionStyle,
  ResultsLikeItStyle,
  ResultsNoWayStyle,
  ResultsProposalIconStyle,
} from './Styled';

type Props = {
  proposals: TypeControversialsProposals[] | TypeRejectedProposals[],
  isRejected?: boolean,
};

export const ProposalsResults = ({ proposals, isRejected }: Props) => {
  return (
    <ProposalsListStyle>
      {proposals.map(proposal => (
        <ProposalsListItemStyle key={proposal.author}>
          <ProposalAuthorStyle>{proposal.author}</ProposalAuthorStyle>
          <ProposalStyle as="p">{proposal.content}</ProposalStyle>
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
                {i18n.t(
                  'consultation.results.proposals.controversials_like_it',
                  {
                    count: proposal.like_it,
                  }
                )}
              </ResultsLikeItStyle>
              <SvgLightning style={ResultsProposalIconStyle} />
              <ResultsNoWayStyle>
                {i18n.t(
                  'consultation.results.proposals.controversials_no_way',
                  {
                    count: proposal.no_way,
                  }
                )}
              </ResultsNoWayStyle>
            </ResultsPositionStyle>
          )}
        </ProposalsListItemStyle>
      ))}
    </ProposalsListStyle>
  );
};