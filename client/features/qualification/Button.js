// @flow
import React, { useState, useEffect } from 'react';
import { QualificationService } from 'Shared/services/Qualification';
import { trackQualify, trackUnqualify } from 'Shared/services/Tracking';
import { voteStaticParams } from 'Shared/constants/vote';
import { type QualificationType } from 'Shared/types/qualification';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';
import { TopComponentContext } from 'Client/context/TopComponentContext';
import { QualifyButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { useDispatch } from 'react-redux';
import { qualify as actionQualify } from 'Shared/store/actions/sequence';
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
  const dispatch = useDispatch();
  const [userQualification, setUserQualification] = useState(qualification);
  const { hasQualified, qualificationKey, count } = userQualification;
  const buttonLabel = i18n.t(`qualification.${qualificationKey}`);
  const [isQualified, setIsQualified] = useState<boolean>(hasQualified);
  const [pendingQualification, setPendingQualification] = useState<boolean>(
    false
  );
  useEffect(() => {
    setUserQualification(qualification);
    setIsQualified(qualification.hasQualified);
  }, [qualification]);

  const handleQualify = async (context: string) => {
    const qualificationResult: ?QualificationType = await QualificationService.qualify(
      proposalId,
      proposalKey,
      votedKey,
      qualificationKey
    );

    if (qualificationResult) {
      setIsQualified(true);
      dispatch(
        actionQualify(proposalId, votedKey, qualificationResult, context)
      );
      trackQualify(proposalId, qualificationKey, votedKey, index, context);
    }
  };

  const handleUnqualify = async (context: string) => {
    const qualificationResult: ?QualificationType = await QualificationService.unqualify(
      proposalId,
      proposalKey,
      votedKey,
      qualificationKey
    );

    if (qualificationResult) {
      setIsQualified(false);
      dispatch(
        actionQualify(proposalId, votedKey, qualificationResult, context)
      );
      trackUnqualify(proposalId, qualificationKey, votedKey, index, context);
    }
  };

  const handleQualification = async (context: string) => {
    if (pendingQualification) {
      return;
    }
    setPendingQualification(true);
    if (isQualified) {
      await handleUnqualify(context);
    } else {
      await handleQualify(context);
    }
    setPendingQualification(false);
  };

  return (
    <TopComponentContext.Consumer>
      {context => (
        <QualifyButtonStyle
          className={isQualified && 'qualified'}
          color={voteStaticParams[votedKey].color}
          onClick={() => handleQualification(context)}
          aria-label={
            pendingQualification ? i18n.t('common.loading') : buttonLabel
          }
          aria-busy={pendingQualification}
          data-cy-button="qualification"
          data-cy-qualification-key={qualificationKey}
          disabled={disableClick}
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
