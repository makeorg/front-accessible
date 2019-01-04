/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import SequenceComponent from 'Components/Sequence';
import SequencePlaceholderComponent from 'Components/Sequence/SequencePlaceholder';
import QuestionService from 'Api/QuestionService';
import { sequenceExpand } from 'Actions/sequence';
import * as ProposalHelper from 'Helpers/proposal';
import * as SequenceHelper from 'Helpers/sequence';
import Tracking from 'Services/Tracking';
import type { ExtraSlidesConfig } from 'Types/sequence';

export const decrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex - 1
});

export const incrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex + 1
});

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Object,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: Object,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
  /** Method called when "Return to proposal" button is clicked */
  handleExpandSequence: Function,
};

type State = {
  /** Array with cards of the sequence */
  cards: Array<mixed>,
  /** Array with proposals received from Api */
  proposals: Array<mixed>,
  /** Number of proposals */
  cardsCount: number,
  /** Incremented / Decremented Index */
  currentIndex: number,
  /** Check if sequence is loaded */
  isSequenceLoaded: boolean
};

const Sequence = ({
  cards,
  cardsCount,
  currentIndex,
  isSequenceCollapsed,
  expandSequence,
  isPannelOpen,
  handleStartSequence,
  goToNextCard,
  skipSignUpCard,
  skipProposalPushCard,
  goToPreviousCard,
  isSequenceLoaded
}) => {
  if (isSequenceLoaded) {
    return (
      <CSSTransition
        in={isSequenceLoaded}
        timeout={500}
        classNames="fadein"
        mountonEnter="true"
      >
        <SequenceComponent
          cards={cards}
          cardsCount={cardsCount}
          currentIndex={currentIndex}
          isSequenceCollapsed={isSequenceCollapsed}
          handleExpandSequence={expandSequence}
          isPannelOpen={isPannelOpen}
          handleStartSequence={handleStartSequence}
          goToNextCard={goToNextCard}
          skipSignUpCard={skipSignUpCard}
          skipProposalPushCard={skipProposalPushCard}
          goToPreviousCard={goToPreviousCard}
        />
      </CSSTransition>
    );
  }

  return (
    <SequencePlaceholderComponent
      handleExpandSequence={expandSequence}
      isPannelOpen={isPannelOpen}
    />
  );
};

/**
 * Handles Sequence Business Logic
 */
class SequenceContainer extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      proposals: [],
      cardsCount: 0,
      currentIndex: 0,
      isSequenceLoaded: false
    };

    this.goToNextCard = this.goToNextCard.bind(this);
    this.skipSignUpCard = this.skipSignUpCard.bind(this);
    this.skipProposalPushCard = this.skipProposalPushCard.bind(this);
    this.goToPreviousCard = this.goToPreviousCard.bind(this);
    this.handleStartSequence = this.handleStartSequence.bind(this);
    this.expandSequence = this.expandSequence.bind(this);
  }

  componentDidUpdate = (prevProps) => {
    const {
      isLoggedIn,
      hasProposed,
      question,
      firstProposal,
      votedProposalIds
    } = this.props;
    const hasVoted = votedProposalIds.length > 0;

    if (question && hasVoted && (isLoggedIn !== prevProps.isLoggedIn || hasProposed !== prevProps.hasProposed)) {
      const includedProposalIds = [...votedProposalIds, ...[firstProposal]];

      QuestionService.startSequence(question.questionId, includedProposalIds)
        .then(sequence => this.setProposals(sequence, isLoggedIn, hasProposed))
        .catch(error => error);
    }
  }

  componentDidMount = () => {
    const {
      question,
      firstProposal,
      isLoggedIn,
      hasProposed
    } = this.props;

    if (question) {
      QuestionService.startSequence(question.questionId, [firstProposal])
        .then(sequence => this.setProposals(sequence, isLoggedIn, hasProposed))
        .catch(error => error);
    }
  }

  setProposals = (sequence: Object, isLoggedIn: boolean, hasProposed: boolean) => {
    const { questionConfiguration } = this.props;
    const { proposals } = sequence;
    const extraSlidesConfig: ExtraSlidesConfig = questionConfiguration.sequenceExtraSlides;
    const votedFirstProposals: Array<Object> = ProposalHelper.sortProposalsByVoted(proposals);
    const cards: Array<mixed> = SequenceHelper.buildCards(
      votedFirstProposals,
      extraSlidesConfig,
      isLoggedIn,
      hasProposed
    );

    const firstNoVotedProposal: ?Objet = ProposalHelper.searchFirstNoVotedProposal(votedFirstProposals);
    const currentIndex: number = SequenceHelper.findIndexOfFirstNoVotedCard(firstNoVotedProposal, cards);

    this.setState({
      proposals: votedFirstProposals,
      cards,
      currentIndex,
      cardsCount: cards.length - 1,
      isSequenceLoaded: true
    });
  }

  handleStartSequence = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickStartSequence();
  }

  goToNextCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickNextCard();
  }

  skipSignUpCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackSkipSignUpCard();
  }

  skipProposalPushCard = () => {
    this.setState(incrementCurrentIndex);
    Tracking.trackClickProposalPushCardIgnore();
  }

  goToPreviousCard = () => {
    this.setState(decrementCurrentIndex);
    Tracking.trackClickPreviousCard();
  }

  expandSequence = () => {
    const { handleExpandSequence } = this.props;
    handleExpandSequence();
  }

  render() {
    return (
      <Sequence
        expandSequence={this.expandSequence}
        handleStartSequence={this.handleStartSequence}
        goToNextCard={this.goToNextCard}
        skipSignUpCard={this.skipSignUpCard}
        skipProposalPushCard={this.skipProposalPushCard}
        goToPreviousCard={this.goToPreviousCard}
        {...this.state}
        {...this.props}
      />
    );
  }
}


const mapStateToProps = (state) => {
  const { firstProposal, votedProposalIds, isSequenceCollapsed } = state.sequence;
  const { hasProposed } = state.proposal;
  const { isPannelOpen } = state.pannel;
  const { isLoggedIn } = state.authentification;

  return {
    firstProposal,
    votedProposalIds,
    isSequenceCollapsed,
    hasProposed,
    isPannelOpen,
    isLoggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);
