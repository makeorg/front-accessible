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
  hasMore: boolean,
  seed?: number,
  page: number,
  isLoading: boolean,
};

export class InfiniteProposalsContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
    total: 0,
    hasMore: false,
    seed: undefined,
    page: 0,
    isLoading: false,
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
    const { isLoading, total, proposals, page } = this.state;
    const scrollThresold =
      document.body &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (isLoading || total <= proposals.length) return;

    if (scrollThresold && page > 1) {
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
      hasMore: results.length < total,
      seed,
      page: 1,
      total,
      isLoading: false,
    });
  };

  loadMoreProposals = async () => {
    const { question, tags } = this.props;
    const { page, seed } = this.state;
    this.setState({ isLoading: true });
    const { results, total } = await searchProposals(
      question.questionId,
      tags,
      seed,
      page
    );

    this.setState(prevState => {
      const proposals = [...prevState.proposals, ...results];
      return {
        ...prevState,
        proposals,
        hasMore: proposals.length < total,
        page: prevState.page + 1,
        isLoading: false,
      };
    });
  };

  clickLoadMore = () => {
    this.loadMoreProposals();
    Tracking.trackLoadMoreProposals();
  };

  render() {
    const { proposals, page, isLoading, hasMore } = this.state;
    return (
      <InfiniteProposalsComponent
        proposals={proposals}
        page={page}
        hasMore={hasMore}
        isLoading={isLoading}
        clickLoadMore={this.clickLoadMore}
      />
    );
  }
}
