import React from 'react';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  LightBulbStyle,
  PlaceholderParagraphStyle,
} from '../Styled/Placeholders';

export const ProposalsPlaceholder = () => {
  return (
    <React.Fragment>
      <SvgLightBulb aria-hidden style={LightBulbStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('profile.proposals.placeholder_text')}
      </PlaceholderParagraphStyle>
    </React.Fragment>
  );
};
