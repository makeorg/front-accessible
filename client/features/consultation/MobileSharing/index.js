// @flow
import React, { useState } from 'react';
import { Sharing } from 'Client/features/sharing';
import { SvgClose, SvgShare } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  SharingWrapperStyle,
  ExpandSharingStyle,
  CloseSharingStyle,
} from '../Styled/MobileSharing';

export const MobileSharing = () => {
  const [isExpanded, setExpansion] = useState<boolean>(false);
  const toggleExpand = () => {
    setExpansion(!isExpanded);
  };

  if (isExpanded) {
    return (
      <SharingWrapperStyle aria-labelledby="mobile_sharing_title">
        <HiddenItemStyle id="mobile_sharing_title">
          {i18n.t('consultation.sharing.title')}
        </HiddenItemStyle>
        <Sharing />
        <CloseSharingStyle
          onClick={() => toggleExpand()}
          aria-label={i18n.t('consultation.sharing.hide_pannel')}
        >
          <SvgClose aria-hidden />
        </CloseSharingStyle>
      </SharingWrapperStyle>
    );
  }

  return (
    <ExpandSharingStyle
      onClick={() => toggleExpand()}
      aria-label={i18n.t('consultation.sharing.display_pannel')}
    >
      <SvgShare aria-hidden />
    </ExpandSharingStyle>
  );
};
