import React from 'react';
import { Sharing } from 'Client/features/sharing';
import { Svg } from 'Client/ui/Svg';
import { i18n } from 'Shared/i18n';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
import {
  SharingWrapperStyle,
  ExpandSharingStyle,
  CloseSharingStyle,
} from '../Styled/MobileSharing';

type Props = {
  isExpanded: boolean,
  toggleExpand: (event: SyntheticInputEvent<HTMLInputElement>) => void,
};
export const MobileSharingComponent = (props: Props) => {
  const { isExpanded, toggleExpand } = props;

  if (isExpanded) {
    return (
      <SharingWrapperStyle aria-labelledby="mobile_sharing_title">
        <HiddenItemStyle id="mobile_sharing_title">
          {i18n.t('consultation.sharing.title')}
        </HiddenItemStyle>
        <Sharing />
        <CloseSharingStyle
          onClick={toggleExpand}
          aria-label={i18n.t('consultation.sharing.hide_pannel')}
        >
          <Svg aria-hidden type="SvgClose" />
        </CloseSharingStyle>
      </SharingWrapperStyle>
    );
  }

  return (
    <ExpandSharingStyle
      onClick={toggleExpand}
      aria-label={i18n.t('consultation.sharing.display_pannel')}
    >
      <Svg aria-hidden type="SvgShare" />
    </ExpandSharingStyle>
  );
};
