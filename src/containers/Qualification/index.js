import React from 'react';
import { doUpdateState } from '../../helpers/qualification';
import QualificationService from '../../api/QualificationService';
import QualificationComponent from '../../components/Qualification';

class QualificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualifications: props.qualifications
    };
    this.handleQualification = this.handleQualification.bind(this);
  }

  handleQualification(event, qualification, voteKey) {
    event.preventDefault();
    const { proposalId } = this.props;
    if (qualification.hasQualified) {
      QualificationService.unqualify(proposalId, voteKey, qualification.qualificationKey)
        .then((qualificationResult) => {
          this.setState(
            prevState => doUpdateState(prevState, qualificationResult)
          );
        });
    } else {
      QualificationService.qualify(proposalId, voteKey, qualification.qualificationKey)
        .then((qualificationResult) => {
          this.setState(
            prevState => doUpdateState(prevState, qualificationResult)
          );
        });
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
