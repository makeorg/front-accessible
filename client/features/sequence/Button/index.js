import * as React from 'react';
import { i18n } from 'Shared/i18n';
import { SvgArrowTop } from 'Client/ui/Svg/elements';
import { BackArrowStyle, BackButtonStyle } from '../Styled';

/**
 * Renders button used to expand the Sequence
 */
export const CollapseToggle = ({ isClosed, handleOpenSequence }) => {
  if (!isClosed) {
    return null;
  }

  return (
    <React.Fragment>
      <BackArrowStyle
        aria-label={i18n.t('sequence.return')}
        onClick={handleOpenSequence}
      >
        <SvgArrowTop aria-hidden />
      </BackArrowStyle>
      <BackButtonStyle onClick={handleOpenSequence}>
        {i18n.t('sequence.return')}
      </BackButtonStyle>
    </React.Fragment>
  );
};
