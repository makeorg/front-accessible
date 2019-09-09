/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'Shared/helpers/throttle';
import {
  getProposalLength,
  proposalHasValidLength,
} from 'Shared/helpers/proposal';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { type Question } from 'Shared/types/question';
import { proposeSuccess } from 'Shared/store/actions/proposal';
import {
  trackDisplayProposalSubmitValidation,
  trackClickProposalSubmit,
  trackClickModerationLink,
} from 'Shared/services/Tracking';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { propose } from 'Shared/services/Proposal';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitSuccessComponent } from './Success';
import { ProposalSubmitDescriptionComponent } from './Description';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Boolean toggled when user is connected */
  isLoggedIn: boolean,
  /** Boolean to check if prposal submit can be expanded */
  canBeOpen: boolean,
  /** Method to dispatch propose sucess action */
  handleProposeSuccess: () => void,
  /** Method to handle when proposal submit is focused */
  handleFocus: () => void,
};

type State = {
  /** Content of the proposal */
  content: string,
  /** Length of the proposal */
  length: number,
  /** Boolean toggled when user is typing a proposal */
  isTyping: boolean,
  /** Boolean toggled when user is submitting a proposal */
  isSubmitted: boolean,
  /** Boolean toggled when proposal is submitted successfully */
  isSucess: boolean,
};

/**
 * Handles Proposal Submit Business Logic
 */
export class ProposalSubmitHandler extends React.Component<Props, State> {
  state = {
    content: '',
    length: getProposalLength(),
    isTyping: false,
    isSubmitted: false,
    isSucess: false,
  };

  static defaultProps = {
    canBeOpen: true,
    handleFocus: () => {},
  };

  throttleOnSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.throttleOnSubmit = throttle(this.handleOnSubmit);
  }

  componentDidUpdate(prevProps: Props) {
    const { isLoggedIn } = this.props;
    const { isSubmitted } = this.state;
    if (isLoggedIn !== prevProps.isLoggedIn && isSubmitted) {
      this.submitProposal();
    }
  }

  submitProposal = async () => {
    const { question, handleProposeSuccess } = this.props;
    const { content } = this.state;

    try {
      await propose(content, question.questionId);
      handleProposeSuccess();
      this.setState({
        isSucess: true,
        content: '',
        length: getProposalLength(),
      });
      trackDisplayProposalSubmitValidation();
    } catch {
      this.setState({
        isSucess: false,
      });
    }
  };

  handleOnChange = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    const content = event.currentTarget.value;
    const length = getProposalLength(content);

    this.setState({ content, length });
  };

  handleOnFocus = () => {
    const { handleFocus } = this.props;
    this.setState({
      isTyping: true,
      isSubmitted: false,
    });

    handleFocus();
  };

  handleOnSubmit = (event: SyntheticEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    this.setState({
      isTyping: false,
      isSubmitted: true,
    });

    const { isLoggedIn, canBeOpen, handleFocus } = this.props;
    const { length } = this.state;

    if (!canBeOpen) handleFocus();

    trackClickProposalSubmit();

    if (isLoggedIn && proposalHasValidLength(length)) {
      this.submitProposal();
    }
  };

  handleOnKeydown = (event: SyntheticKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  trackModerationLink = () => {
    trackClickModerationLink();
  };

  render() {
    const { isLoggedIn, canBeOpen } = this.props;
    const { content, length, isTyping, isSubmitted, isSucess } = this.state;
    const isDescriptionShown = canBeOpen && isTyping && !isSubmitted;
    const isAuthentificationShown = canBeOpen && isSubmitted && !isLoggedIn;
    const isSuccessShown = canBeOpen && isSucess;
    const isOpen = isDescriptionShown || isAuthentificationShown;

    return (
      <React.Fragment>
        <ProposalSubmitFormComponent
          key="ProposalSubmitFormComponent"
          content={content}
          length={length}
          canSubmit={proposalHasValidLength(length)}
          isOpen={isOpen}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.throttleOnSubmit}
          handleOnFocus={this.handleOnFocus}
          handleOnKeydown={this.handleOnKeydown}
        />
        {isDescriptionShown ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
            trackModerationLink={this.trackModerationLink}
          />
        ) : null}
        {isSuccessShown ? (
          <ProposalSubmitSuccessComponent key="ProposalSubmitSuccessComponent" />
        ) : null}
        {isAuthentificationShown ? (
          <ProposalSubmitAuthentification key="ProposalSubmitAuthentificationContainer" />
        ) : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { isLoggedIn } = selectAuthentification(state);

  return {
    isLoggedIn,
    question: selectCurrentQuestion(state),
  };
};
const mapDispatchToProps = dispatch => ({
  handleProposeSuccess: () => dispatch(proposeSuccess()),
});

export const ProposalSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalSubmitHandler);
