/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'Shared/helpers/throttle';
import {
  getProposalLength,
  getIsProposalValidLength,
} from 'Shared/helpers/proposal';
import { type Question } from 'Shared/types/question';
import { typingProposal, submitProposal } from 'Shared/store/actions/proposal';
import { sequenceCollapse } from 'Shared/store/actions/sequence';
import { Tracking } from 'Shared/services/Tracking';
import {
  selectSequenceQuestion,
  selectSequenceCollapsed,
} from 'Shared/store/selectors/sequence.selector';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import { ProposalSubmitSuccessComponent } from './Success';
import { ProposalSubmitDescriptionComponent } from './Description';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Content of the proposal */
  content: string,
  /** Length of the proposal */
  length: number,
  /** Boolean toggled when proposal can be submitted */
  canSubmit: boolean,
  /** Boolean toggled when proposal is succesfully submitted */
  isCurrentSubmitSuccess: boolean,
  /** Boolean toggled when user is connected */
  isLoggedIn: boolean,
  /** Boolean toggled when Sequence is collapsed / expanded */
  isSequenceCollapsed: boolean,
  /** Localiszed Language of the app */
  language: string,
  /** Localiszed Country of the app */
  country: string,
  /** Method called to collapse Sequence */
  handleCollapseSequence: Function,
  /** Method called when user is typing a proposal */
  handleTypingProposal: Function,
  /** Method called to submit proposal */
  handleSubmitProposal: Function,
  /** Is user coming from Sequence Page */
  isComingFromSequence?: boolean,
};

type State = {
  /** Boolean toggled when user is typing a proposal */
  isTyping: boolean,
  /** Boolean used to expand / collapse proposal field */
  isFieldExpanded: boolean,
  /** Boolean toggled when user is submitting a proposal */
  isSubmitted: boolean,
};

/**
 * Handles Proposal Submit Business Logic
 */
export class ProposalSubmitHandler extends React.Component<Props, State> {
  state = {
    isTyping: false,
    isSubmitted: false,
    isFieldExpanded: false,
  };

  static defaultProps = {
    isComingFromSequence: false,
  };

  throttleOnSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.throttleOnSubmit = throttle(this.handleOnSubmit);
  }

  componentDidMount() {
    this.setFieldExpanded();
  }

  setFieldExpanded = () => {
    const { isComingFromSequence } = this.props;

    if (isComingFromSequence) {
      this.setState((state, props) => ({
        isFieldExpanded: props.isSequenceCollapsed && state.isTyping,
      }));
    } else {
      this.setState(state => ({
        isFieldExpanded: state.isTyping,
      }));
    }
  };

  handleOnChange = (event: SyntheticEvent<*>) => {
    const content = event.currentTarget.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { handleTypingProposal } = this.props;

    handleTypingProposal(content, length, canSubmit);
  };

  handleOnFocus = () => {
    this.setState({
      isTyping: true,
      isSubmitted: false,
    });

    const { handleCollapseSequence, isSequenceCollapsed } = this.props;
    if (!isSequenceCollapsed) handleCollapseSequence();

    this.setFieldExpanded();
  };

  handleOnSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();

    const { question, content, isLoggedIn, handleSubmitProposal } = this.props;

    Tracking.trackClickProposalSubmit(question.slug);

    if (isLoggedIn) {
      handleSubmitProposal(content);
    }

    this.setState({
      isTyping: false,
      isSubmitted: true,
    });
    this.setFieldExpanded();
  };

  trackModerationText = () => {
    Tracking.trackDisplayModerationText();
  };

  trackModerationLink = () => {
    Tracking.trackClickModerationLink();
  };

  render() {
    const {
      content,
      length,
      canSubmit,
      isCurrentSubmitSuccess,
      isLoggedIn,
      isSequenceCollapsed,
      country,
      language,
    } = this.props;
    const { isTyping, isSubmitted, isFieldExpanded } = this.state;
    const isDescriptionShown =
      isTyping && !isCurrentSubmitSuccess && isSequenceCollapsed;
    const isAuthentificationShown =
      isSubmitted && !isLoggedIn && isSequenceCollapsed;
    const isSuccessShown =
      !isTyping && isCurrentSubmitSuccess && isSequenceCollapsed;
    return (
      <React.Fragment>
        <ProposalSubmitFormComponent
          key="ProposalSubmitFormComponent"
          content={content}
          length={length}
          canSubmit={canSubmit}
          handleOnChange={this.handleOnChange}
          handleOnSubmit={this.throttleOnSubmit}
          handleOnFocus={this.handleOnFocus}
          isFieldExpanded={isFieldExpanded}
        />
        {isDescriptionShown ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
            country={country}
            language={language}
            trackModerationText={this.trackModerationText}
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
  const { isLoggedIn } = state.authentification;
  const { content, length, canSubmit, isCurrentSubmitSuccess } = state.proposal;
  const { country, language } = state.appConfig;

  return {
    isLoggedIn,
    isSequenceCollapsed: selectSequenceCollapsed(state),
    question: selectSequenceQuestion(state),
    content,
    length,
    canSubmit,
    isCurrentSubmitSuccess,
    country,
    language,
  };
};

const mapDispatchToProps = dispatch => ({
  handleCollapseSequence: () => dispatch(sequenceCollapse()),
  handleTypingProposal: (content: string, length: number, canSubmit: boolean) =>
    dispatch(typingProposal(content, length, canSubmit)),
  handleSubmitProposal: (content: string) => dispatch(submitProposal(content)),
});

export const ProposalSubmitContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProposalSubmitHandler);
