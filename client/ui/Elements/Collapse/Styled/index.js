import styled from 'styled-components';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { IntToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { UnstyledButtonStyle } from '../../ButtonElements';

export const CollapseWrapperStyle = styled.div`
  padding: 10px;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-top: 10px;
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
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
  transform: ${props => (props.collapsing ? `rotate(0)` : `rotate(90deg)`)};
`;

export const CollapseContentStyle = styled.div`
  overflow: hidden;
  ${props => (props.collapsing ? `height: 0;` : `height: auto;`)};
  @media (min-width: ${IntToPx(Breakpoints.Desktop)}) {
    ${props => (props.forcedexpand ? `height: auto;` : '')}
  }
`;

export const CollapseSeparatorStyle = styled(SeparatorStyle)`
  margin: 8px 0 16px;
`;
