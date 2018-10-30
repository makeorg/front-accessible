import React from 'react';
import i18next from 'i18next';
import Qualification from './Styled';
import QualificationButtonComponent from './Button';
import { HiddenItem } from '../Elements/HiddenElements';
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
        <HiddenItem aria-hidden as="h3">{i18next.t('unvote.title')}</HiddenItem>
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
