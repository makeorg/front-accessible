/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { startSequence } from 'Shared/services/Sequence';
import { sequenceExpand } from 'Shared/store/actions/sequence';
import * as ProposalHelper from 'Shared/helpers/proposal';
import * as SequenceHelper from 'Shared/helpers/sequence';
import { Tracking } from 'Shared/services/Tracking';
import {
  type CardType,
  type ExtraSlidesConfig,
  type QuestionConfiguration,
} from 'Shared/types/sequence';
import { type ProposalType } from 'Shared/types/proposal';
import { type Question } from 'Shared/types/question';
import { selectSequenceCollapsed } from 'Shared/store/selectors/sequence.selector';
import {
  type Props as SequenceProps,
  SequenceComponent,
} from './SequenceComponent';
import { SequencePlaceholderComponent } from './SequencePlaceholder';

export const decrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex - 1,
});

export const incrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex + 1,
});

type Props = {
  /** Offset of cards without pagination (introCard) */
  cardOffset: number,
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: QuestionConfiguration,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when Modal is opened / closed */
  isModalOpen: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleExpandSequence: () => void,
  /** Boolean toggled when User is Logged in */
  isLoggedIn: boolean,
  /** Boolean toggled when User has submitted a proposal */
  hasProposed: boolean,
  /** Id of the first proposal to display */
  firstProposal: string,
  /** Array with the voted proposals' ids */
  votedProposalIds: string[],
};

type State = {
  /** Array with cards of the sequence */
  cards: CardType[],
  /** Array with proposals received from Api */
  proposals: ProposalType[],
  /** Number of proposals */
  cardsCount: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Sequence has started yet */
  hasStarted: boolean,
  /** Check if sequence is loaded */
  isSequenceLoaded: boolean,
};

type ContainerProps = {
  isSequenceLoaded: boolean,
  isSequenceCollapsed: boolean,
  expandSequence: () => void,
};

const Sequence = ({
  cards,
  cardsCount,
  cardOffset,
  currentIndex,
  isSequenceCollapsed,
  isModalOpen,
  handleStartSequence,
  goToNextCard,
  skipSignUpCard,
  skipProposalPushCard,
  goToPreviousCard,
  expandSequence,
  isSequenceLoaded,
}: SequenceProps & ContainerProps) => {
  if (isSequenceLoaded) {
    return (
      <SequenceComponent
        cards={cards}
        cardsCount={cardsCount}
        currentIndex={currentIndex}
        cardOffset={cardOffset}
        isSequenceCollapsed={isSequenceCollapsed}
        handleExpandSequence={expandSequence}
        isModalOpen={isModalOpen}
        handleStartSequence={handleStartSequence}
        goToNextCard={goToNextCard}
        skipSignUpCard={skipSignUpCard}
        skipProposalPushCard={skipProposalPushCard}
        goToPreviousCard={goToPreviousCard}
      />
    );
  }

  return (
    <SequencePlaceholderComponent
      handleExpandSequence={expandSequence}
      isSequenceCollapsed={isSequenceCollapsed}
      isModalOpen={isModalOpen}
    />
  );
};

/**
 * Handles Sequence Business Logic
 */
class SequenceHandler extends React.Component<Props, State> {
  state = {
    cards: [],
    proposals: [],
    cardsCount: 0,
    currentIndex: 0,
    hasStarted: false,
    isSequenceLoaded: false,
  };

  componentDidUpdate = async prevProps => {
    const {
      isLoggedIn,
      hasProposed,
      question,
      firstProposal,
      votedProposalIds,
    } = this.props;

    if (
      question &&
      (isLoggedIn !== prevProps.isLoggedIn ||
        hasProposed !== prevProps.hasProposed)
    ) {
      const includedProposalIds = [firstProposal, ...votedProposalIds];

      const proposals = await startSequence(
        question.questionId,
        includedProposalIds
      );
      this.setProposals(proposals, isLoggedIn, hasProposed);
    }
  };

  componentDidMount = async () => {
    const { question, firstProposal, isLoggedIn, hasProposed } = this.props;

    if (question) {
      const proposals = await startSequence(question.questionId, [
        firstProposal,
      ]);
      this.setProposals(proposals, isLoggedIn, hasProposed);
    }
  };

  setProposals = (
    proposals: ProposalType[],
    isLoggedIn: boolean,
    hasProposed: boolean
  ) => {
    const { questionConfiguration, question } = this.props;
    const { hasStarted } = this.state;
    const extraSlidesConfig: ExtraSlidesConfig =
      questionConfiguration.sequenceConfig;

    const cards: CardType[] = SequenceHelper.buildCards(
      proposals,
      extraSlidesConfig,
      isLoggedIn,
      hasProposed,
      question.canPropose
    );

    const firstUnvotedProposal:
      | typeof undefined
      | ProposalType = ProposalHelper.searchFirstUnvotedProposal(proposals);
    const indexOfFirstUnvotedCard: number = SequenceHelper.findIndexOfFirstUnvotedCard(
      firstUnvotedProposal,
      cards
    );
    const currentIndex: number =
      indexOfFirstUnvotedCard === 0 && hasStarted ? 1 : indexOfFirstUnvotedCard;

    this.setState({
      proposals,
      cards,
      currentIndex,
      cardsCount: cards.length - 1,
      isSequenceLoaded: true,
    });
  };

  handleStartSequence = () => {
    const { question } = this.props;

    this.setState(prevState => ({
      ...incrementCurrentIndex(prevState),
      hasStarted: true,
    }));
    Tracking.trackClickStartSequence(question.slug);
  };

  goToNextCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickNextCard();
  };

  skipSignUpCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackSkipSignUpCard();
  };

  skipProposalPushCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickProposalPushCardIgnore();
  };

  goToPreviousCard = () => {
    this.setState(decrementCurrentIndex);
    Tracking.trackClickPreviousCard();
  };

  expandSequence = () => {
    const { handleExpandSequence } = this.props;
    handleExpandSequence();
  };

  render() {
    const { cardOffset } = this.props;
    return (
      <Sequence
        expandSequence={this.expandSequence}
        handleStartSequence={this.handleStartSequence}
        goToNextCard={this.goToNextCard}
        skipSignUpCard={this.skipSignUpCard}
        skipProposalPushCard={this.skipProposalPushCard}
        goToPreviousCard={this.goToPreviousCard}
        cardOffset={cardOffset}
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  const { firstProposal, votedProposalIds } = state.sequence;
  const { hasProposed } = state.proposal;
  const { isModalOpen } = state.modal;
  const { isLoggedIn } = state.authentification;

  return {
    firstProposal,
    votedProposalIds,
    isSequenceCollapsed: selectSequenceCollapsed(state),
    hasProposed,
    isModalOpen,
    isLoggedIn,
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  },
});

export const SequenceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SequenceHandler);
