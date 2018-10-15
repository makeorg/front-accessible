import React from 'react';
import ProposalSubmitButtonComponent from './ProposalSubmitButtonComponent';
import ProposalSubmitWrapper from './Styled';
import { PROPOSAL_BAIT_TEXT } from '../../constants/proposal';

/**
 * ProposalSubmitCmponent render the proposal Submit Component
 * @extends React
 */
class ProposalSubmitComponent extends React.Component {
  render() {
    const {
      length,
      canSubmit,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <ProposalSubmitWrapper>
        <ProposalSubmitWrapper.Label htmlFor="proposal">
          { PROPOSAL_BAIT_TEXT }
        </ProposalSubmitWrapper.Label>
        <ProposalSubmitWrapper.Input
          type="text"
          name="proposal"
          id="proposal"
          onChange={handleChange}
        />
        <ProposalSubmitWrapper.CharLimit>
          <span>{length}</span>
          / 140
        </ProposalSubmitWrapper.CharLimit>
        <ProposalSubmitButtonComponent handleSubmit={handleSubmit} canSubmit={canSubmit} />
      </ProposalSubmitWrapper>
    );
  }
}

export default ProposalSubmitComponent;
