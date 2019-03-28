/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { searchProposals } from 'Shared/helpers/proposal';
import { type Question } from 'Shared/types/question';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';
import { Tracking } from 'Shared/services/Tracking';
import { InfiniteProposalsComponent } from './InfiniteProposalsComponent';

type Props = {
  question: Question,
  tags: string[],
};

type State = {
  proposals: ProposalType[],
  page: number,
  isLoading: boolean,
  hasMore: boolean,
  initialLoading: boolean,
};

export class InfiniteProposalsContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
    page: 1,
    isLoading: false,
    hasMore: true,
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
    const { isLoading, hasMore, initialLoading } = this.state;
    const scrollThresold =
      document.body &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight;

    if (isLoading || !hasMore) return;

    if (scrollThresold && !initialLoading) {
      this.loadMoreProposals();
    }
  };

  initProposals = async () => {
    const { question, tags } = this.props;
    this.setState({ isLoading: true });
    const proposals = await searchProposals(question.questionId, tags);
    this.setState({
      proposals,
      page: 2,
      hasMore: proposals.length === PROPOSALS_LISTING_LIMIT,
      isLoading: false,
      initialLoading: true,
    });
  };

  loadMoreProposals = async () => {
    const { question, tags } = this.props;
    const { page } = this.state;
    this.setState({ isLoading: true });
    const proposals = await searchProposals(question.questionId, tags, page);

    this.setState(prevState => ({
      ...prevState,
      proposals: [...prevState.proposals, ...proposals],
      page: prevState.page + 1,
      hasMore: proposals.length === PROPOSALS_LISTING_LIMIT,
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
