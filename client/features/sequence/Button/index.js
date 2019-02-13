import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BackArrowStyle, BackButtonStyle } from '../Styled';

/**
 * Renders button used to expand the Sequence
 */
export const CollapseToggle = ({ isSequenceCollapsed, handleExpandSequence, isPannelOpen }) => {
  if (!isSequenceCollapsed) {
    return null;
  }

  return (
    <React.Fragment>
      <BackArrowStyle aria-hidden onClick={handleExpandSequence} tabIndex={isPannelOpen ? -1 : 0}>
        <FontAwesomeIcon icon={faArrowUp} />
      </BackArrowStyle>
      <BackButtonStyle aria-hidden onClick={handleExpandSequence} tabIndex={isPannelOpen ? -1 : 0}>
        {i18n.t('sequence.return')}
      </BackButtonStyle>
    </React.Fragment>
  );
};
