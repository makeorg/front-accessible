/* @flow */
import * as React from 'react';
import { doUpdateState } from 'Shared/helpers/qualification';
import QualificationService from 'Shared/api/QualificationService';
import Tracking from 'Shared/services/Tracking';
import { throttle } from 'Shared/helpers/throttle';
import { QualificationComponent } from './QualificationComponent';

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
export class QualificationContainer extends React.Component<Props, State> {
  static defaultProps = {
    index: undefined
  };

  throttleQualification: any = undefined;

  constructor(props: Props) {
    super(props);
    this.state = {
      qualifications: props.qualifications
    };

    this.throttleQualification = throttle(this.handleQualification);
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
        handleQualification={this.throttleQualification}
        tabIndex={tabIndex}
      />
    );
  }
}
