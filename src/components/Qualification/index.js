import React from 'react';
import Qualification from './Styled';
import QualificationButtonComponent from './Button';
import { getQualificationIndex } from '../../helpers/qualification';
import voteStaticParams from '../../constants/vote';

class QualificationComponent extends React.Component {
  render() {
    const {
      qualifications,
      proposalId,
      votedKey,
      handleQualification,
      tabIndex
    } = this.props;
    return (
      <Qualification>
        {
          qualifications.map(qualification => (
            <QualificationButtonComponent
              key={getQualificationIndex(qualification.qualificationKey, proposalId)}
              color={voteStaticParams[votedKey].color}
              qualificationKey={qualification.qualificationKey}
              qualificationCounter={qualification.count}
              isQualified={qualification.hasQualified}
              handleQualification={event => handleQualification(event, qualification, votedKey)}
              tabIndex={tabIndex}
            />
          ))}
      </Qualification>
    );
  }
}

export default QualificationComponent;
