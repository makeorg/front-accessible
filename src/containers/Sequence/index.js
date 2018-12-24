/* @flow */
import * as React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import SequenceComponent from 'Components/Sequence';
import SequencePlaceholderComponent from 'Components/Sequence/SequencePlaceholder';
import SequenceService from 'Api/SequenceService';
import { sequenceExpand } from 'Actions/sequence';
import Tracking from 'Services/Tracking';
import {
  CARD_TYPE_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_INTRO,
  CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
  CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
  CARD_TYPE_EXTRASLIDE_FINAL_CARD
} from 'Constants/card';

export const decrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex - 1
});

export const incrementCurrentIndex = (prevState: Object) => ({
  currentIndex: prevState.currentIndex + 1
});

type ExtraSlides = {
  introCard: mixed,
  pushProposal: mixed,
  signUpCard: mixed
};

const buildCard = (proposals: Array<Object>, extraSlides: ExtraSlides) => {
  const cards = proposals.map(proposal => ({
    type: CARD_TYPE_PROPOSAL,
    configuration: proposal
  }));

  if (extraSlides.pushProposal === true || extraSlides.pushProposal instanceof Object) {
    cards.splice(cards.length / 2, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_PROPOSAL,
      configuration: extraSlides.pushProposal
    });
  }

  if (extraSlides.introCard === true || extraSlides.introCard instanceof Object) {
    cards.splice(0, 0, {
      type: CARD_TYPE_EXTRASLIDE_INTRO,
      configuration: extraSlides.introCard
    });
  }

  if (extraSlides.signUpCard === true || extraSlides.signUpCard instanceof Object) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_PUSH_SIGNUP,
      configuration: extraSlides.signUpCard
    });
  }

  if (extraSlides.finalCard === true || extraSlides.finalCard instanceof Object) {
    cards.splice(cards.length, 0, {
      type: CARD_TYPE_EXTRASLIDE_FINAL_CARD,
      configuration: extraSlides.finalCard
    });
  }

  return cards;
};

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
  /** Array with proposals received from Api */
  cards: Array<mixed>,
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

  componentDidMount = () => {
    const { question, firstProposal } = this.props;
    if (question) {
      SequenceService.startSequence(question.landingSequenceId, firstProposal)
        .then(sequence => this.setProposals(sequence))
        .then(() => this.setState({ isSequenceLoaded: true }))
        .catch(error => error);
    }
  }

  setProposals = (sequence) => {
    const { questionConfiguration } = this.props;
    const extraSlides: ExtraSlides = questionConfiguration.sequenceExtraSlides;
    const cards: Array<mixed> = buildCard(sequence.proposals, extraSlides);
    const firstNoVotedProposal = sequence.proposals.find(proposal => (
      proposal.votes.some(vote => vote.hasVoted === false)
    ));
    const indexOfNoVotedCard = cards.findIndex(card => (
      card.type === CARD_TYPE_PROPOSAL && card.configuration.id === firstNoVotedProposal.id
    ));

    this.setState({
      cards,
      currentIndex: indexOfNoVotedCard + 1,
      cardsCount: cards.length - 1,
      isSequenceLoaded: false
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
  const { firstProposal, isSequenceCollapsed } = state.sequence;
  const { isPannelOpen } = state.pannel;

  return {
    firstProposal,
    isSequenceCollapsed,
    isPannelOpen
  };
};

const mapDispatchToProps = dispatch => ({
  handleExpandSequence: () => {
    dispatch(sequenceExpand());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SequenceContainer);
