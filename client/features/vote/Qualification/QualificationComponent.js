/* @flow */
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import type { QualificationType } from 'Shared/types/proposal';
import { getQualificationIndex } from 'Shared/helpers/qualification';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { QualificationButtonElement } from 'Client/ui/Elements/Qualification/Button';
import * as Qualification from './Styled';

type Props = {
  /** Array with qualifications received from Api */
  qualifications: Array<QualificationType>,
  /** Proposal's Id */
  proposalId: string,
  /** Voted key property */
  votedKey: string,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when qualification button is clicked */
  handleQualification: (
    event: SyntheticEvent<HTMLButtonElement>,
    qualification: Object,
    votedKey: string
  ) => {},
};

/**
 * Renders Qualification component
 */
export const QualificationComponent = (props: Props) => {
  const {
    qualifications,
    proposalId,
    votedKey,
    tabIndex,
    handleQualification,
  } = props;

  return (
    <Qualification.ContainerStyle>
      <HiddenItemStyle aria-hidden as="h3">
        {i18n.t('unvote.title')}
      </HiddenItemStyle>
      {qualifications.map(qualification => (
        <QualificationButtonElement
          key={getQualificationIndex(
            qualification.qualificationKey,
            proposalId
          )}
          color={voteStaticParams[votedKey].color}
          label={i18n.t(`qualification.${qualification.qualificationKey}`)}
          qualificationCounter={qualification.count}
          isQualified={qualification.hasQualified}
          handleQualification={event =>
            handleQualification(event, qualification, votedKey)
          }
          tabIndex={tabIndex}
        />
      ))}
    </Qualification.ContainerStyle>
  );
};
