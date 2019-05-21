import React from 'react';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  LightBulbStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';

export const ProfileProposalsPlaceholder = () => {
  return (
    <React.Fragment>
      <SvgLightBulb aria-hidden style={LightBulbStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('profile.proposals.text')}
      </PlaceholderParagraphStyle>
    </React.Fragment>
  );
};