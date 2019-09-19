/* @flow */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { fetchProposalData } from 'Shared/store/actions/proposal';
import { fetchQuestionConfigurationData } from 'Shared/store/actions/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { type match as TypeMatch } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { selectCurrentQuestionConfiguration } from 'Shared/store/selectors/questions.selector';
import { apiClient } from 'Shared/api/ApiService/ApiService.client';
import { ProposalPageContentLoader } from './ContentLoader';

type Props = {
  proposal: TypeProposal,
  questionConfiguration: TypeQuestionConfiguration,
  fetchProposal: (proposalId: string) => void,
  match: TypeMatch,
};

const ProposalPageContainer = (props: Props) => {
  const { match, proposal, fetchProposal, questionConfiguration } = props;
  const { proposalId } = match.params;
  useEffect(() => {
    if (!proposal) {
      fetchProposal(proposalId);
    }
  }, [fetchProposal, proposal, proposalId]);

  if (!questionConfiguration) {
    return <MetaTags description={i18n.t('meta.proposal.description')} />;
  }

  return (
    <ThemeProvider theme={questionConfiguration.theme}>
      <MiddlePageWrapperStyle>
        <MetaTags
          title={i18n.t('meta.proposal.title', { proposal: proposal.content })}
          description={i18n.t('meta.proposal.description')}
        />
        {proposal && (
          <ProposalPageContentLoader
            proposal={proposal}
            questionConfiguration={questionConfiguration}
          />
        )}
      </MiddlePageWrapperStyle>
    </ThemeProvider>
  );
};

const mapStateToProps = state => {
  const { data } = state.proposal;

  return {
    proposal: data,
    questionConfiguration: selectCurrentQuestionConfiguration(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProposal: (proposalId: string) => {
    dispatch(fetchProposalData(proposalId)).then((proposal: TypeProposal) => {
      const { question } = proposal;
      apiClient.questionId = question.questionId;
      apiClient.operationId = question.operationId;
      dispatch(fetchQuestionConfigurationData(question.slug));
    });
  },
});

export const ProposalPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalPageContainer);

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
