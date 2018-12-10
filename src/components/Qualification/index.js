/* @flow */

import * as React from 'react';
import i18next from 'i18next';
import { getQualificationIndex } from 'Helpers/qualification';
import { HiddenItem } from 'Components/Elements/HiddenElements';
import voteStaticParams from 'Constants/vote';
import Qualification from './Styled';
import QualificationButtonComponent from './Button';

type Props = {
  qualifications: Array<Object>,
  proposalId: string,
  votedKey: string,
  tabIndex: number,
  handleQualification: Function
}

const QualificationComponent = (props: Props) => {
  const {
    qualifications,
    proposalId,
    votedKey,
    tabIndex,
    handleQualification
  } = props;

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
};

export default QualificationComponent;
