/* @flow */
import React from 'react';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { searchProposals } from 'Shared/helpers/proposal';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { Tracking } from 'Shared/services/Tracking';
import { InfiniteProposalsComponent } from './InfiniteProposalsComponent';

type Props = {
  question: TypeQuestion,
  tags: string[],
};

type State = {
  proposals: TypeProposal[],
  total: number,
  seed?: number,
  page: number,
  isLoading: boolean,
  initialLoading: boolean,
};

export class InfiniteProposalsContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
    total: 0,
    seed: undefined,
    page: 1,
    isLoading: false,
    initialLoading: false,
  };

  async componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.initProposals();
  }

  async componentDidUpdate(prevProps: Props) {
    const { tags } = this.props;

    if (tags !== prevProps.tags) {
      this.initProposals();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const { isLoading, total, proposals, initialLoading } = this.state;
    const scrollThresold =
      document.body &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (isLoading || total <= proposals.length) return;

    if (scrollThresold && !initialLoading) {
      this.loadMoreProposals();
    }
  };

  initProposals = async () => {
    const { question, tags } = this.props;
    this.setState({ isLoading: true });
    const { results, total, seed } = await searchProposals(
      question.questionId,
      tags
    );
    this.setState({
      proposals: results,
      seed,
      page: 2,
      total,
      isLoading: false,
      initialLoading: true,
    });
  };

  loadMoreProposals = async () => {
    const { question, tags } = this.props;
    const { page, seed } = this.state;
    this.setState({ isLoading: true });
    const response = await searchProposals(
      question.questionId,
      tags,
      seed,
      page
    );

    this.setState(prevState => ({
      ...prevState,
      proposals: [...prevState.proposals, ...response.results],
      page: prevState.page + 1,
      isLoading: false,
      initialLoading: false,
    }));
  };

  clickLoadMore = () => {
    this.loadMoreProposals();
    Tracking.trackLoadMoreProposals();
  };

  render() {
    const { question } = this.props;
    const { proposals, isLoading, initialLoading } = this.state;
    return (
      <InfiniteProposalsComponent
        question={question}
        proposals={proposals}
        isLoading={isLoading}
        initialLoading={initialLoading}
        clickLoadMore={this.clickLoadMore}
      />
    );
  }
}
