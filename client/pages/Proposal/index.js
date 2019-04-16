/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { i18n } from 'Shared/i18n';
import { type ProposalType } from 'Shared/types/proposal';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { fetchProposalData } from 'Shared/store/actions/proposal';
import { fetchQuestionConfigurationData } from 'Shared/store/actions/sequence';
import { MetaTags } from 'Client/app/MetaTags';
import { type match as TypeMatch } from 'react-router';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { selectSequenceQuestionConfiguration } from 'Shared/store/selectors/sequence.selector';
import { ProposalPageContentLoader } from './ContentLoader';

type Props = {
  proposal: ProposalType,
  questionConfiguration: QuestionConfiguration,
  fetchProposal: (proposalId: string, questionSlug: string) => void,
  match: TypeMatch,
};

class ProposalPageContainer extends React.Component<Props> {
  componentDidMount() {
    const { match, proposal, fetchProposal } = this.props;

    if (!proposal) {
      fetchProposal(match.params.proposalId, match.params.questionSlug);
    }
  }

  render() {
    const { match, proposal, questionConfiguration } = this.props;

    if (!questionConfiguration) {
      return null;
    }

    return (
      <ThemeProvider theme={questionConfiguration.theme}>
        <MiddlePageWrapperStyle>
          <MetaTags description={i18n.t('meta.proposal.description')} />
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

const mapStateToProps = state => {
  const { data } = state.proposal;

  return {
    proposal: data,
    questionConfiguration: selectSequenceQuestionConfiguration(state),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProposal: (proposalId: string, questionSlug: string) => {
    dispatch(fetchProposalData(proposalId)).then((proposal: ProposalType) => {
      dispatch(
        fetchQuestionConfigurationData(questionSlug, proposal.questionId)
      );
    });
  },
});

export const ProposalPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalPageContainer);

// default export needed for loadable component
export default ProposalPage; // eslint-disable-line import/no-default-export
