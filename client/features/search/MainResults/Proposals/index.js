// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { useMobile } from 'Client/hooks/useMedia';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ProposalCardWithQuestion } from 'Client/features/proposal/ProposalCardWithQuestion';
import { i18n } from 'Shared/i18n';
import { searchProposals } from 'Shared/helpers/proposal';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MainResultsProposalsMobile } from './Mobile';
import {
  MainResultsProposalsItemStyle,
  MainResultsMoreProposalsStyle,
} from './Styled';

type Props = {
  country: string,
  language: string,
  searchTerm: string,
  proposals: TypeProposal[],
  count: number,
};
export const MainResultsProposalsComponent = ({
  country,
  language,
  searchTerm,
  proposals,
  count,
}: Props) => {
  const isMobile = useMobile();
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [proposalsResult, setProposalsResult] = useState<TypeProposal[]>(
    proposals
  );
  const getMoreButton =
    count > 4 && count !== proposalsResult.length && !isLoading;

  const loadMoreProposals = async () => {
    setIsLoading(true);
    const { results } = await searchProposals(
      country,
      language,
      searchTerm,
      page,
      4
    );
    const newProposalList = [...proposalsResult, ...results];
    setProposalsResult(newProposalList);
    setPage(page + 1);
    setIsLoading(false);
  };

  if (isMobile) {
    return <MainResultsProposalsMobile proposals={proposals} />;
  }

  return (
    <div id="proposal_list" role="feed" aria-busy={isLoading}>
      <UnstyledListStyle>
        {proposalsResult.map((proposal, index) => (
          <MainResultsProposalsItemStyle key={proposal.id}>
            <ProposalCardWithQuestion
              proposal={proposal}
              position={index + 1}
              size={proposalsResult.length}
            />
          </MainResultsProposalsItemStyle>
        ))}
      </UnstyledListStyle>
      {isLoading && <Spinner />}
      {getMoreButton && (
        <MainResultsMoreProposalsStyle onClick={loadMoreProposals}>
          {i18n.t('consultation.proposal.load_more')}
        </MainResultsMoreProposalsStyle>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { country, language } = state.appConfig;

  return {
    country,
    language,
  };
};

export const MainResultsProposals = connect(mapStateToProps)(
  MainResultsProposalsComponent
);
