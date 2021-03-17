// @flow
import styled from 'styled-components';
import { color, typography } from 'athena-design-tokens';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';

export const CollapseWrapperStyle = styled(ColumnElementStyle)`
  padding: 25px 0px;
  border-bottom: solid 1px ${color.grey};
  &:last-child {
    padding-bottom: 0px;
    border-bottom: none;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 35px 0px;
  }
`;

export const CollapseTriggerStyle = styled(UnstyledButtonStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  display: inline-block;
  justify-content: start;
  width: 100%;
  font-size: ${intToPx(typography.font.fontsize.XS.value)};
  line-height: 1.5;
  letter-spacing: 0.14px;
  text-align: left;
  &:disabled {
    color: ${color.black};
    cursor: text;
  }
`;

export const CollapseIconStyle = styled.span`
  display: inline-flex;
  padding-left: 10px;
  padding-right: ${props => (props.iscollapsed ? `0px` : `10px`)};
  transform: ${props => (props.iscollapsed ? `rotate(0)` : `rotate(180deg)`)};
  .tofill {
    fill: ${color.black};
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
