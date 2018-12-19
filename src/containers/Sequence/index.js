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
  question: Object,
  questionConfiguration: Object,
  isSequenceCollapsed: boolean,
  isPannelOpen: boolean,
  handleExpandSequence: Function,
};

type State = {
  cards: Array<mixed>,
  cardsCount: number,
  currentIndex: number,
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
    const cards = buildCard(sequence.proposals, extraSlides);

    this.setState({
      cards,
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
