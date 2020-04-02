// @flow
import React, { useState } from 'react';
import { QualificationService } from 'Shared/services/Qualification';
import { trackQualify, trackUnqualify } from 'Shared/services/Tracking';
import { voteStaticParams } from 'Shared/constants/vote';
import { type QualificationType } from 'Shared/types/qualification';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';
import { TopComponentContext } from 'Client/context/TopComponentContext';
import { QualifyButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { CounterStyle } from './style';

type Props = {
  /** qualification object */
  qualification: QualificationType,
  /** Voted key property */
  votedKey: string,
  /** Proposal's Id */
  proposalId: string,
  /** String containing the hash generate api side for security purpose */
  proposalKey: string,
  /** Index of the card */
  index?: number,
  /** Optional boolean to disable click event on the qualification button */
  disableClick?: boolean,
};

/**
 * Renders Qualification button element
 */
export const QualificationButton = ({
  qualification,
  votedKey,
  proposalId,
  proposalKey,
  index,
  disableClick = false,
}: Props) => {
  const { hasQualified, qualificationKey, count } = qualification;
  const buttonLabel = i18n.t(`qualification.${qualificationKey}`);
  const [isQualified, setIsQualified] = useState<boolean>(hasQualified);
  const [pendingQualification, setPendingQualification] = useState<boolean>(
    false
  );

  const handleQualify = async (cardContext: string) => {
    const qualificationResult: ?QualificationType = await QualificationService.qualify(
      proposalId,
      proposalKey,
      votedKey,
      qualificationKey
    );

    if (qualificationResult) {
      setIsQualified(true);

      trackQualify(proposalId, qualificationKey, votedKey, index, cardContext);
    }
  };

  const handleUnqualify = async (cardContext: string) => {
    const qualificationResult: ?QualificationType = await QualificationService.unqualify(
      proposalId,
      proposalKey,
      votedKey,
      qualificationKey
    );

    if (qualificationResult) {
      setIsQualified(false);

      trackUnqualify(
        proposalId,
        qualificationKey,
        votedKey,
        index,
        cardContext
      );
    }
  };

  const handleQualification = async (cardContext: string) => {
    setPendingQualification(true);
    if (isQualified) {
      await handleUnqualify(cardContext);
    } else {
      await handleQualify(cardContext);
    }
    setPendingQualification(false);
  };

  return (
    <TopComponentContext.Consumer>
      {cardContext => (
        <QualifyButtonStyle
          className={isQualified && 'qualified'}
          color={voteStaticParams[votedKey].color}
          onClick={() => handleQualification(cardContext)}
          aria-label={
            pendingQualification ? i18n.t('common.loading') : buttonLabel
          }
          aria-busy={pendingQualification}
          data-cy-button="qualification"
          data-cy-qualification-key={qualificationKey}
          disabled={pendingQualification || disableClick}
        >
          {pendingQualification ? (
            <LoadingDots />
          ) : (
            <>
              <span aria-hidden>{buttonLabel}</span>
              <CounterStyle aria-hidden>
                {isQualified ? count + 1 : '+1'}
              </CounterStyle>
            </>
          )}
        </QualifyButtonStyle>
      )}
    </TopComponentContext.Consumer>
  );
};
