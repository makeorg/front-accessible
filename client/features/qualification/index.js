// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { getQualificationIndex } from 'Shared/helpers/qualification';
import { type QualificationType } from 'Shared/types/qualification';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { QualificationButton } from './Button';

type Props = {
  /** Array with qualifications received from Api */
  qualifications: QualificationType[],
  /** Proposal's Id */
  proposalId: string,
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Voted key property */
  votedKey: string,
  /** Index of the card */
  index: number,
};

/**
 * Handles Qualification Business Logic
 */
export const Qualification = ({
  qualifications,
  proposalId,
  proposalKey,
  votedKey,
  index,
}: Props) => (
  <>
    <ScreenReaderItemStyle as="p">
      {i18n.t('qualification.title')}
    </ScreenReaderItemStyle>
    <SpaceBetweenColumnStyle as={UnstyledListStyle}>
      {qualifications.map(qualification => (
        <li
          key={getQualificationIndex(
            qualification.qualificationKey,
            proposalId
          )}
        >
          <QualificationButton
            qualification={qualification}
            votedKey={votedKey}
            proposalKey={proposalKey}
            proposalId={proposalId}
            index={index}
          />
        </li>
      ))}
    </SpaceBetweenColumnStyle>
  </>
);
