import React from 'react';
import { connect } from 'react-redux';
import ProposalSubmitFormComponent from '../../components/ProposalSubmit';
import ProposalSubmitDescriptionComponent from '../../components/ProposalSubmit/Description';
import ProposalSubmitAuthentificationContainer from './Authentification';
import { getProposalLength, getIsProposalValidLength } from '../../helpers/proposal';
import { typingProposal, submitProposal } from '../../actions/proposal';
import { ProposalSubmitWrapper } from '../../components/Elements/MainElements';

/**
 * ProposalSubmitContainer manage the proposal Submit Component business logic
 * @extends React
 */
export class ProposalSubmit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isTyping: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const content = event.target.value;
    const length = getProposalLength(content);
    const canSubmit = getIsProposalValidLength(length);

    const { dispatch } = this.props;

    dispatch(typingProposal(content, length, canSubmit));
  }

  handleFocus() {
    this.setState({
      isTyping: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      isTyping: false
    });

    const {
      content,
      operationId,
      dispatch
    } = this.props;

    dispatch(submitProposal(content, operationId));
  }

  render() {
    const {
      content,
      length,
      canSubmit,
      needAuthentification
    } = this.props;
    const { isTyping } = this.state;

    return (
      <ProposalSubmitWrapper>
        <ProposalSubmitFormComponent
          key="ProposalSubmitFormComponent"
          content={content}
          length={length}
          canSubmit={canSubmit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleFocus={this.handleFocus}
        />
        {(isTyping && !needAuthentification) ? (
          <ProposalSubmitDescriptionComponent
            key="ProposalSubmitDescriptionComponent"
          />
        ) : null}
        {(needAuthentification) ? (
          <ProposalSubmitAuthentificationContainer
            key="ProposalSubmitAuthentificationContainer"
          />
        ) : null}
      </ProposalSubmitWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const { operationId } = state.appConfig;
  const {
    content,
    length,
    canSubmit,
    needAuthentification
  } = state.proposal;

  return {
    operationId,
    content,
    length,
    canSubmit,
    needAuthentification
  };
};

export default connect(mapStateToProps)(ProposalSubmit);
