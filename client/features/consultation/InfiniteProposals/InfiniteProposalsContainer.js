/* @flow */
import React from 'react';
import { type ProposalType } from 'Shared/types/proposal';
import { searchProposals } from 'Shared/helpers/proposal';
import { type Question } from 'Shared/types/question';
import { PROPOSALS_LISTING_LIMIT } from 'Shared/constants/proposal';
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
};

export class InfiniteProposalsContainer extends React.Component<Props, State> {
  state = {
    proposals: [],
    page: 1,
    isLoading: false,
    hasMore: true,
  };

  async componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
    this.initPrposals();
  }

  async componentDidUpdate(prevProps: Props) {
    const { tags } = this.props;

    if (tags !== prevProps.tags) {
      this.initPrposals();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    const { isLoading, hasMore } = this.state;

    if (isLoading || !hasMore) return;

    if (
      document.body &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    ) {
      this.loadMoreProposals();
    }
  };

  initPrposals = async () => {
    const { question, tags } = this.props;
    this.setState({ isLoading: true });
    const proposals = await searchProposals(question.questionId, tags);
    this.setState({
      proposals,
      page: 2,
      hasMore: proposals.length === PROPOSALS_LISTING_LIMIT,
      isLoading: false,
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
    }));
  };

  render() {
    const { proposals, isLoading } = this.state;
    return (
      <InfiniteProposalsComponent proposals={proposals} isLoading={isLoading} />
    );
  }
}
