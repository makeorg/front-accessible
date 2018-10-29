import React from 'react';
import { doUnqualifying, doQualifying } from '../../helpers/qualification';
import QualificationService from '../../api/QualificationService';
import QualificationComponent from '../../components/Qualification';

class QualificationContainer extends React.Component {
  constructor(props) {
    const userQualifications = props.qualifications.filter(qualification => qualification.hasQualified === true);
    super(props);
    this.state = {
      userQualifications
    };
    this.handleQualification = this.handleQualification.bind(this);
  }

  handleQualification(event, isQualified, voteKey, qualificationKey) {
    event.preventDefault();
    const { proposalId } = this.props;
    if (isQualified) {
      QualificationService.unqualify(proposalId, voteKey, qualificationKey)
        .then(() => {
          this.setState(
            prevState => doUnqualifying(prevState, qualificationKey)
          );
        });
    } else {
      QualificationService.qualify(proposalId, voteKey, qualificationKey)
        .then((qualificationResult) => {
          this.setState(
            prevState => doQualifying(prevState, qualificationResult)
          );
        });
    }
  }

  render() {
    const {
      qualifications,
      proposalId,
      votedKey
    } = this.props;
    const {
      userQualifications
    } = this.state;
    return (
      <QualificationComponent
        qualifications={qualifications}
        proposalId={proposalId}
        votedKey={votedKey}
        userQualifications={userQualifications}
        handleQualification={this.handleQualification}
      />
    );
  }
}

export default QualificationContainer;
