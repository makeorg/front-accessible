import styled from 'styled-components';
import {
  CenterColumnStyle,
  MiddleRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const SequenceSharingInnerStyle = styled(CenterColumnStyle)`
  width: 100%;
  border-bottom: 2px solid ${BackgroundColors.ExtraLightGrey};
  padding: 0 0 10px 0;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    border-bottom: none;
    border-right: 2px solid ${BackgroundColors.ExtraLightGrey};
    padding: 50px 25px 50px 0;
    margin-bottom: 0;
  }
`;

export const SequenceSharingWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
`;
