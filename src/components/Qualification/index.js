import React from 'react';
import Qualification from './Styled';
import QualificationButtonComponent from './Button';
import { getQualificationIndex, getQualifiedKey, getQualificationCount } from '../../helpers/qualification';
import voteStaticParams from '../../constants/vote';

class QualificationComponent extends React.Component {
  render() {
    const {
      qualifications,
      proposalId,
      votedKey,
      handleQualification,
      userQualifications
    } = this.props;
    return (
      <Qualification>
        {
          qualifications.map(qualification => (
            <QualificationButtonComponent
              key={getQualificationIndex(qualification.qualificationKey, proposalId)}
              color={voteStaticParams[votedKey].color}
              qualificationKey={qualification.qualificationKey}
              qualificationCounter={getQualificationCount(userQualifications, qualification.qualificationKey)}
              isQualified={getQualifiedKey(userQualifications, qualification.qualificationKey)}
              handleQualification={
                event => handleQualification(
                  event,
                  getQualifiedKey(userQualifications, qualification.qualificationKey),
                  votedKey, qualification.qualificationKey
                )}
            />
          ))}
      </Qualification>
    );
  }
}

export default QualificationComponent;
