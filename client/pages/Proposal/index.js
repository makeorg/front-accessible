/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import type { ProposalType } from 'Shared/types/proposal';
import type { QuestionConfiguration } from 'Shared/types/sequence';
import { fetchProposalData } from 'Shared/store/actions/proposal';
import { fetchQuestionConfigurationData } from 'Shared/store/actions/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { match as TypeMatch } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { ProposalPageContentLoader } from './ContentLoader';

type Props = {
  proposal: ProposalType,
  questionConfiguration: QuestionConfiguration,
  fetchProposal: (proposalId: string) => void,
  fetchQuestionConfiguration: (questionSlug: string) => void,
  match: TypeMatch
};

class ProposalPageContainer extends React.Component<Props> {
  componentDidMount() {
    const {
      match,
      proposal,
      questionConfiguration,
      fetchProposal,
      fetchQuestionConfiguration
    } = this.props;

    if (!proposal) {
      fetchProposal(match.params.proposalId);
    }

    if (!questionConfiguration) {
      fetchQuestionConfiguration(match.params.questionSlug);
    }
  }

  render() {
    const {
      match,
      proposal,
      questionConfiguration
    } = this.props;

    if (!questionConfiguration) {
      return null;
    }

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <MiddlePageWrapperStyle>
          <MetaTags
            description={i18n.t('meta.proposal.description')}
          />
          {proposal && (
            <ProposalPageContentLoader
              proposal={proposal}
              questionConfiguration={questionConfiguration}
              questionSlug={match.params.questionSlug}
            />
          )}
        </MiddlePageWrapperStyle>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { data } = state.proposal;
  const { questionConfiguration } = state.sequence;

  return {
    proposal: data,
    questionConfiguration
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProposal: (proposalId: string) => {
    dispatch(fetchProposalData(proposalId));
  },
  fetchQuestionConfiguration: (questionSlug: string) => {
    dispatch(fetchQuestionConfigurationData(questionSlug));
  }
});

export const ProposalPage = connect(mapStateToProps, mapDispatchToProps)(ProposalPageContainer);

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
