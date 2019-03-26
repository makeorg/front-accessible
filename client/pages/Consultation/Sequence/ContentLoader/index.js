/* @flow */
import * as React from 'react';
import { ProposalSubmit } from 'Client/features/proposal/ProposalSubmit';
import { Sequence } from 'Client/features/sequence';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { type Question } from 'Shared/types/question';
import {
  SequencePageContentStyle,
  SequenceProposalFieldStyle,
} from '../Styled';

type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: Question,
  /** Object with Static properties used to configure the Sequence (theme, extra cards, ...) */
  questionConfiguration: QuestionConfiguration,
};

type State = {
  /** Boolean toggled when tooltip is shown / hidden */
  isSequenceCollapsed: boolean,
};

/**
 * Renders SequenceContainerLoader
 */
export class SequencePageContentLoader extends React.Component<Props, State> {
  state = {
    isSequenceCollapsed: false,
  };

  handleToogleCollapseSequence = () => {
    this.setState(prevState => ({
      isSequenceCollapsed: !prevState.isSequenceCollapsed,
    }));
  };

  render() {
    const { question, questionConfiguration } = this.props;
    const { isSequenceCollapsed } = this.state;

    if (!question) {
      return (
        <SequencePageContentStyle>
          <Spinner />
        </SequencePageContentStyle>
      );
    }

    return (
      <React.Fragment>
        {question.canPropose && (
          <SequenceProposalFieldStyle>
            <ProposalSubmit
              question={question}
              handleCollapse={this.handleToogleCollapseSequence}
              isSequenceCollapsed={isSequenceCollapsed}
            />
          </SequenceProposalFieldStyle>
        )}
        <Sequence
          question={question}
          isSequenceCollapsed={isSequenceCollapsed}
          handleToogleCollapseSequence={this.handleToogleCollapseSequence}
          questionConfiguration={questionConfiguration}
        />
      </React.Fragment>
    );
  }
}
