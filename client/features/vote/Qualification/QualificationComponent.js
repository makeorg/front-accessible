// @flow
import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { type QualificationType } from 'Shared/types/proposal';
import { getQualificationIndex } from 'Shared/helpers/qualification';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import { voteStaticParams } from 'Shared/constants/vote';
import { QualificationButtonElement } from 'Client/ui/Elements/Qualification/Button';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';

type Props = {
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** Proposal's Id */
  proposalId: string,
  /** Voted key property */
  votedKey: string,
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** When waiting vote response from API */
  pendingVote: boolean,
  /** pending qualification keys property */
  pendingQualificationKeys: Set<string>,
  /** Method called when qualification button is clicked */
  handleQualification: (qualification: Object, votedKey: string) => void,
};

/**
 * Renders Qualification component
 */
export const QualificationComponent = (props: Props) => {
  const {
    qualifications,
    proposalId,
    votedKey,
    handleQualification,
    pendingVote,
    pendingQualificationKeys,
  } = props;

  const handle = qualification => (): void => {
    if (
      !pendingVote &&
      !pendingQualificationKeys.has(qualification.qualificationKey)
    ) {
      handleQualification(qualification, votedKey);
    }
  };

  return (
    <SpaceBetweenColumnStyle>
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
          handleQualification={handle(qualification)}
          pendingQualification={pendingQualificationKeys.has(
            qualification.qualificationKey
          )}
        />
      ))}
    </SpaceBetweenColumnStyle>
  );
};
