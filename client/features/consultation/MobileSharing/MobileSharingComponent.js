// @flow
import React from 'react';
import { type Sharing as TypeSharing } from 'Shared/types/sequence';
import { Sharing } from 'Client/features/sharing';
import { SvgClose, SvgShare } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  SharingWrapperStyle,
  ExpandSharingStyle,
  CloseSharingStyle,
} from '../Styled/MobileSharing';

type Props = {
  isExpanded: boolean,
  sharingParams: TypeSharing,
  toggleExpand: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};
export const MobileSharingComponent = (props: Props) => {
  const { isExpanded, sharingParams, toggleExpand } = props;

  if (isExpanded) {
    return (
      <SharingWrapperStyle aria-labelledby="mobile_sharing_title">
        <HiddenItemStyle id="mobile_sharing_title">
          {i18n.t('consultation.sharing.title')}
        </HiddenItemStyle>
        <Sharing sharingParams={sharingParams} />
        <CloseSharingStyle
          onClick={toggleExpand}
          aria-label={i18n.t('consultation.sharing.hide_pannel')}
        >
          <SvgClose aria-hidden />
        </CloseSharingStyle>
      </SharingWrapperStyle>
    );
  }

  return (
    <ExpandSharingStyle
      onClick={toggleExpand}
      aria-label={i18n.t('consultation.sharing.display_pannel')}
    >
      <SvgShare aria-hidden />
    </ExpandSharingStyle>
  );
};
