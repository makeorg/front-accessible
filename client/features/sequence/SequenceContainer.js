/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { startSequence } from 'Shared/services/Sequence';
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
  isClosed: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleOpenSequence: () => void,
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
};

const Sequence = ({
  cards,
  cardsCount,
  cardOffset,
  currentIndex,
  isClosed,
  handleStartSequence,
  goToNextCard,
  skipSignUpCard,
  skipProposalPushCard,
  goToPreviousCard,
  handleOpenSequence,
  isSequenceLoaded,
}: SequenceProps & ContainerProps) => {
  if (isSequenceLoaded) {
    return (
      <SequenceComponent
        cards={cards}
        cardsCount={cardsCount}
        currentIndex={currentIndex}
        cardOffset={cardOffset}
        isClosed={isClosed}
        handleOpenSequence={handleOpenSequence}
        handleStartSequence={handleStartSequence}
        goToNextCard={goToNextCard}
        skipSignUpCard={skipSignUpCard}
        skipProposalPushCard={skipProposalPushCard}
        goToPreviousCard={goToPreviousCard}
      />
    );
  }

  return <SequencePlaceholderComponent />;
};

/**
 * Handles Sequence Business Logic
 */
class SequenceHandler extends React.Component<Props, State> {
  state: State = {
    cards: [],
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
      cards,
      currentIndex,
      cardsCount: cards.length - 1,
      isSequenceLoaded: true,
    });
  };

  handleStartSequence = () => {
    this.setState(prevState => ({
      ...incrementCurrentIndex(prevState),
      hasStarted: true,
    }));
    Tracking.trackClickStartSequence();
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

  render() {
    const { cardOffset, isClosed, handleOpenSequence } = this.props;
    const { cards, cardsCount, currentIndex, isSequenceLoaded } = this.state;
    return (
      <Sequence
        cards={cards}
        cardsCount={cardsCount}
        cardOffset={cardOffset}
        currentIndex={currentIndex}
        isClosed={isClosed}
        handleStartSequence={this.handleStartSequence}
        goToNextCard={this.goToNextCard}
        skipSignUpCard={this.skipSignUpCard}
        skipProposalPushCard={this.skipProposalPushCard}
        goToPreviousCard={this.goToPreviousCard}
        handleOpenSequence={handleOpenSequence}
        isSequenceLoaded={isSequenceLoaded}
      />
    );
  }
}

const mapStateToProps = state => {
  const { firstProposal, votedProposalIds } = state.sequence;
  const { hasProposed } = state.proposal;
  const { isLoggedIn } = state.authentification;

  return {
    firstProposal,
    votedProposalIds,
    hasProposed,
    isLoggedIn,
  };
};

export const SequenceContainer = connect(mapStateToProps)(SequenceHandler);
