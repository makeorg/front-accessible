/* @flow */
import * as React from 'react';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { Sequence } from 'Client/features/sequence';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { type Question } from 'Shared/types/question';
import {
  SequencePageContentStyle,
  SequenceProposalFieldStyle,
} from '../Styled';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isClosed: boolean,
};

/**
 * Renders SequenceContainerLoader
 */
export class SequencePageContentLoader extends React.Component<Props, State> {
  state = {
    isClosed: false,
  };

  handleCloseSequence = () => {
    this.setState({
      isClosed: true,
    });
  };

  handleOpenSequence = () => {
    this.setState({
      isClosed: false,
    });
  };

  render() {
    const { question } = this.props;
    const { isClosed } = this.state;

    if (!question) {
      return (
        <SequencePageContentStyle aria-busy>
          <Spinner />
        </SequencePageContentStyle>
      );
    }

    return (
      <React.Fragment>
        {question.canPropose && (
          <SequenceProposalFieldStyle id="proposal_submit">
            <ProposalSubmit
              question={question}
              handleFocus={this.handleCloseSequence}
              canBeOpen={isClosed}
            />
          </SequenceProposalFieldStyle>
        )}
        <Sequence
          question={question}
          isClosed={isClosed}
          handleOpenSequence={this.handleOpenSequence}
        />
      </React.Fragment>
    );
  }
}
