import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ProposalSubmitWrapper from './Styled';
import { RedButton, GreyButton, IconInButton } from '../Styled/ButtonElements';
import { PROPOSAL_LABEL } from '../../constants/proposal';

class ProposalSubmitComponent extends React.Component {
  render() {
    const {
      isProposalValidLength,
      proposalLength,
      handleChange,
      handleFocus,
      handleBlur
    } = this.props;
    return (
      <ProposalSubmitWrapper>
        <ProposalSubmitWrapper.Label htmlFor="proposal">
          { PROPOSAL_LABEL }
        </ProposalSubmitWrapper.Label>
        <ProposalSubmitWrapper.Input
          type="text"
          name="proposal"
          id="proposal"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <ProposalSubmitWrapper.CharLimit>
          <span>{proposalLength}</span>
          / 140
        </ProposalSubmitWrapper.CharLimit>
        {isProposalValidLength ? (
          <RedButton type="submit">
            <IconInButton>
              <FontAwesomeIcon icon={faPencilAlt} />
            </IconInButton>
            Proposer
          </RedButton>
        ) : (
          <GreyButton type="submit" disabled>
            <IconInButton>
              <FontAwesomeIcon icon={faPencilAlt} />
            </IconInButton>
            Proposer
          </GreyButton>
        )}
      </ProposalSubmitWrapper>
    );
  }
}

export default ProposalSubmitComponent;
