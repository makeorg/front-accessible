/* @flow */
import React from 'react';
import { doUpdateState } from '../../helpers/qualification';
import QualificationService from '../../api/QualificationService';
import QualificationComponent from '../../components/Qualification';
import Tracking from '../../services/Tracking';

type Props = {
  qualifications: Array<Object>,
  proposalId: string,
  index: number,
  tabIndex: number,
  votedKey: string
};

type State = {
  qualifications: Array<Object>
};

class QualificationContainer extends React.Component<Props, State> {
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
