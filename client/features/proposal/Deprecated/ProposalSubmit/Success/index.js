// @flow
import React, { useRef, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { DescriptionWrapperStyle } from '../style';

/**
 * Renders succes message after proposal is submitted
 */
export const DeprecatedProposalSubmitSuccess = () => {
  const successRef = useRef(null);

  useEffect(() => {
    if (successRef.current) {
      successRef.current.focus();
    }
  }, [successRef.current]);
  return (
    <DescriptionWrapperStyle ref={successRef} tabIndex={0}>
      <ParagraphStyle id="proposal-submit-success">
        {i18n.t('proposal_submit.success')}
      </ParagraphStyle>
    </DescriptionWrapperStyle>
  );
};
