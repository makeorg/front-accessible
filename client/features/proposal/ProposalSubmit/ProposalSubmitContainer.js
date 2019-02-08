/* @flow */

import * as React from 'react';
import { connect } from 'react-redux';
import { throttle } from 'Shared/helpers/throttle';
import { getProposalLength, getIsProposalValidLength } from 'Shared/helpers/proposal';
import { typingProposal, submitProposal } from 'Shared/store/actions/proposal';
import { sequenceCollapse } from 'Shared/store/actions/sequence';
import { getToken } from 'Shared/store/actions/authentification';
import Tracking from 'Shared/services/Tracking';
import { ProposalSubmitAuthentification } from './Authentification';
import { ProposalSubmitFormComponent } from './ProposalSubmitFormComponent';
import ProposalSubmitSuccessComponent from './Success';
import ProposalSubmitDescriptionComponent from './Description';
import { ProposalSubmitFormWrapper } from './Styled';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Object,
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
  /** Boolean toggled when Sliding pannel is opened / closed */
  isPannelOpen: boolean,
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
  /** Method called to get user token */
  handleGetUserToken: Function
};

type State = {
  /** Boolean toggled when user is typing a proposal */
  isTyping: boolean
}

/**
* Handles Proposal Submit Business Logic
*/
export class ProposalSubmitHandler extends React.Component<Props, State> {
  state = {
    isTyping: false
  }

  throttleSubmit: any = undefined;

  constructor(props: Props) {
    super(props);
    this.throttleSubmit = throttle(this.handleSubmit);
  }

  handleChange = (event: SyntheticEvent<*>) => {
    const content = event.currentTarget.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { handleTypingProposal } = this.props;

    handleTypingProposal(content, length, canSubmit);
  }

  handleFocus = () => {
    this.setState({
      isTyping: true
    });

    const { handleCollapseSequence, isSequenceCollapsed } = this.props;
    if (!isSequenceCollapsed) handleCollapseSequence();
  }

  handleSubmit = (event: SyntheticEvent<*>) => {
    event.preventDefault();


    const {
      question,
      content,
      isLoggedIn,
      handleSubmitProposal,
      handleGetUserToken
    } = this.props;

    Tracking.trackClickProposalSubmit(question.slug);

    if (isLoggedIn) {
      handleSubmitProposal(content).then(() => {
        this.setState({
          isTyping: false
        });
      });
    } else {
      handleGetUserToken()
        .then(() => {
          this.setState({
            isTyping: false
          });
        })
        .catch(() => {
          this.setState({
            isTyping: false
          });
        });
    }
  }

  trackModerationText = () => {
    Tracking.trackDisplayModerationText();
  }

  trackModerationLink = () => {
    Tracking.trackClickModerationLink();
  }

  render() {
    const {
      content,
      length,
      canSubmit,
      isCurrentSubmitSuccess,
      isLoggedIn,
      isSequenceCollapsed,
      isPannelOpen,
      country,
      language
    } = this.props;
    const { isTyping } = this.state;
    const isDescriptionShown = isTyping && !isCurrentSubmitSuccess && isSequenceCollapsed;
    const isAuthentificationShown = !isTyping && !isLoggedIn && isSequenceCollapsed;
    const isSuccessShown = !isTyping && isCurrentSubmitSuccess && isSequenceCollapsed;
    return (
      <ProposalSubmitFormWrapper>
        <ProposalSubmitFormComponent
          key="ProposalSubmitFormComponent"
          content={content}
          length={length}
          canSubmit={canSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.throttleSubmit}
          handleFocus={this.handleFocus}
          isPannelOpen={isPannelOpen}
          isSequenceCollapsed={isSequenceCollapsed}
          isTyping={isTyping}
        />
        {isDescriptionShown ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
            isPannelOpen={isPannelOpen}
            country={country}
            language={language}
            trackModerationText={this.trackModerationText}
            trackModerationLink={this.trackModerationLink}
          />
        ) : null}
        {(isSuccessShown) ? (
          <ProposalSubmitSuccessComponent
            key="ProposalSubmitSuccessComponent"
          />
        ) : null}
        {isAuthentificationShown ? (
          <ProposalSubmitAuthentification
            key="ProposalSubmitAuthentificationContainer"
          />
        ) : null}
      </ProposalSubmitFormWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { isLoggedIn } = state.authentification;
  const { isSequenceCollapsed, question } = state.sequence;
  const { isPannelOpen } = state.pannel;
  const {
    content,
    length,
    canSubmit,
    isCurrentSubmitSuccess
  } = state.proposal;
  const { country, language } = state.appConfig;

  return {
    isLoggedIn,
    isSequenceCollapsed,
    isPannelOpen,
    question,
    content,
    length,
    canSubmit,
    isCurrentSubmitSuccess,
    country,
    language
  };
};

const mapDispatchToProps = dispatch => ({
  handleCollapseSequence: () => (
    dispatch(sequenceCollapse())
  ),
  handleTypingProposal: (content: string, length: number, canSubmit: boolean) => (
    dispatch(typingProposal(content, length, canSubmit))
  ),
  handleSubmitProposal: (content: string) => (
    dispatch(submitProposal(content))
  ),
  handleGetUserToken: () => (
    dispatch(getToken())
  )
});

export const ProposalSubmitContainer = connect(mapStateToProps, mapDispatchToProps)(ProposalSubmitHandler);
