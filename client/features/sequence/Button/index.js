import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { BackArrowStyle, BackButtonStyle } from '../Styled';

/**
 * Renders button used to expand the Sequence
 */
export const CollapseToggle = ({
  isSequenceCollapsed,
  handleToogleCollapseSequence,
}) => {
  if (!isSequenceCollapsed) {
    return null;
  }

  return (
    <React.Fragment>
      <BackArrowStyle aria-hidden onClick={handleToogleCollapseSequence}>
        <FontAwesomeIcon icon={faArrowUp} />
      </BackArrowStyle>
      <BackButtonStyle aria-hidden onClick={handleToogleCollapseSequence}>
        {i18n.t('sequence.return')}
      </BackButtonStyle>
    </React.Fragment>
  );
};
