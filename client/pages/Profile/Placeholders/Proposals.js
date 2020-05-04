import React from 'react';
import { SvgLightBulb } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import {
  LightBulbStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';

export const ProfileProposalsPlaceholder = () => {
  return (
    <CenterColumnStyle>
      <SvgLightBulb style={LightBulbStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('profile.proposals.text')}
      </PlaceholderParagraphStyle>
    </CenterColumnStyle>
  );
};
