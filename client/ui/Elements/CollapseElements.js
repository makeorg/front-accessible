import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import {
  BasicColors,
  ShadowColors,
  MakeThemeColors,
} from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { MiddleColumnStyle } from 'Client/ui/Elements/FlexElements';

export const CollapseWrapperStyle = styled(MiddleColumnStyle)`
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const TileWithCollapseWrapperStyle = styled(CollapseWrapperStyle)`
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 14px 20px 8px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 20px;
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
`;

export const CollapseTriggerStyle = styled(UnstyledButtonStyle)`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  &:disabled {
    color: ${BasicColors.PureBlack};
    cursor: text;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 19px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 32px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    font-size: 18px;
    line-height: 25px;
  }
`;

export const CollapseIconStyle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.iscollapsed ? `rotate(0)` : `rotate(90deg)`)};
  .tofill {
    fill: ${MakeThemeColors.Red};
  }
`;

export const CollapseContentStyle = styled.div`
  width: 100%;
  ${props =>
    props.iscollapsed ? `height: 0; visibility: hidden;` : `height: auto;`};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    ${props => (props.forcedexpand ? `height: auto; visibility: visible;` : '')}
  }
`;

export const CollapseSeparatorStyle = styled(SeparatorStyle)`
  margin-top: 4px;
`;

export const TileWithCollapseSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;
