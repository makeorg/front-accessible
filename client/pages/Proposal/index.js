// @flow
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { MetaTags } from 'Client/app/MetaTags';
import { type match as TypeMatch } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { ProposalSkipLinks } from 'Client/app/SkipLinks/Proposal';
import { SingleProposalCard } from 'Client/features/proposal/SingleProposalCard';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { ProposalApiService } from 'Shared/api/ProposalApiService';
import { QuestionApiService } from 'Shared/api/QuestionApiService';
import { SingleProposalSharingComponent } from 'Client/features/proposal/SingleProposalCard/Sharing';

type Props = {
  match: TypeMatch,
};

const ProposalPage = (props: Props) => {
  const { match } = props;
  const { proposalId } = match.params;
  const [proposal, setProposal] = useState<?TypeProposal>(undefined);
  const [question, setQuestion] = useState<?TypeQuestion>(undefined);

  useEffect(() => {
    ProposalApiService.getProposal(proposalId).then(response => {
      setProposal(response);
    });
  }, []);

  useEffect(() => {
    if (proposal) {
      QuestionApiService.getDetail(proposal.question.questionId).then(
        response => {
          setQuestion(response);
          apiClient.questionId = response.questionId;
          apiClient.operationId = response.operationId;
        }
      );
    }
  }, [proposal]);

  if (!question) {
    return (
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  return (
    <ThemeProvider theme={question.theme}>
      <MiddlePageWrapperStyle>
        <ProposalSkipLinks />
        {proposal && (
          <React.Fragment>
            <MetaTags
              title={i18n.t('meta.proposal.title', {
                proposal: proposal.content,
              })}
              description={i18n.t('meta.proposal.description')}
            />
            <SingleProposalCard proposal={proposal} />
          </React.Fragment>
        )}
        <SingleProposalSharingComponent />
      </MiddlePageWrapperStyle>
    </ThemeProvider>
  );
};

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
