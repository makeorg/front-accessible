import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { UnstyledButtonStyle } from '../../ButtonElements';
import { MiddleColumnStyle } from '../../FlexElements';

export const CollapseWrapperStyle = styled(MiddleColumnStyle)`
  padding: 10px;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 20px;
    padding: 20px;
  }
  &:first-child {
    margin-top: 0;
  }
`;

export const CollapseTriggerStyle = styled(UnstyledButtonStyle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  &:disabled {
    color: ${BasicColors.PureBlack};
    cursor: text;
  }
`;

export const CollapseIconStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${props => (props.iscollapsed ? `rotate(0)` : `rotate(90deg)`)};
`;

export const CollapseContentStyle = styled.div`
  width: 100%;
  ${props =>
    props.iscollapsed ? `height: 0; visibility: hidden;` : `height: auto;`};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    ${props => (props.forcedexpand ? `height: auto; visibility: visible;` : '')}
  }
`;

export const CollapseSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;
