import React from 'react';
import { Sharing } from 'Client/features/sharing';
import { Svg } from 'Client/ui/Svg';
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
      <SharingWrapperStyle>
        <Sharing />
        <CloseSharingStyle onClick={toggleExpand}>
          <Svg type="SvgClose" />
        </CloseSharingStyle>
      </SharingWrapperStyle>
    );
  }

  return (
    <ExpandSharingStyle onClick={toggleExpand}>
      <Svg type="SvgShare" />
    </ExpandSharingStyle>
  );
};
