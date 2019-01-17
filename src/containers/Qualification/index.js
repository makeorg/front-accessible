/* @flow */
import * as React from 'react';
import { doUpdateState } from 'Helpers/qualification';
import QualificationService from 'Api/QualificationService';
import QualificationComponent from 'Components/Qualification';
import Tracking from 'Services/Tracking';

type Props = {
  /** Array with qualifications received from Api */
  qualifications: Array<Object>,
  /** Proposal's Id */
  proposalId: string,
  /** Index of the card */
  index?: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Voted key property */
  votedKey: string
};

type State = {
  /** Array with qualifications received from Api */
  qualifications: Array<Object>
};

/**
 * Handles Qualification Business Logic
 */
class QualificationContainer extends React.Component<Props, State> {
  static defaultProps = {
    index: undefined
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      qualifications: props.qualifications
    };
    this.handleQualification = this.handleQualification.bind(this);
  }

  handleQualification = (event: SyntheticEvent<*>, qualification: Object, voteKey: string) => {
    event.preventDefault();
    const { proposalId, index } = this.props;
    if (qualification.hasQualified) {
      QualificationService.unqualify(proposalId, voteKey, qualification.qualificationKey)
        .then((qualificationResult) => {
          this.setState(prevState => doUpdateState(prevState, qualificationResult));
        });
      Tracking.trackUnqualify(proposalId, qualification.qualificationKey, voteKey, index);
    } else {
      QualificationService.qualify(proposalId, voteKey, qualification.qualificationKey)
        .then((qualificationResult) => {
          this.setState(prevState => doUpdateState(prevState, qualificationResult));
        });
      Tracking.trackQualify(proposalId, qualification.qualificationKey, voteKey, index);
    }
  }

  render() {
    const { tabIndex, proposalId, votedKey } = this.props;
    const { qualifications } = this.state;

    return (
      <QualificationComponent
        proposalId={proposalId}
        votedKey={votedKey}
        qualifications={qualifications}
        handleQualification={this.handleQualification}
        tabIndex={tabIndex}
      />
    );
  }
}

export default QualificationContainer;
