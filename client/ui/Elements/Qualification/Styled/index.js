import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ButtonStyle = styled.button`
  font-family: ${MakeFonts.RobotoBold};
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-width: 2px;
  font-size: 12px;
  line-height: 26px;
  border-style: solid;
  padding: 0 10px;
  border-radius: 36px;
  border-color: ${props => props.color};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 28px;
  }
`;

export const IsQualifiedButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
`;

export const QualifyButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
`;

export const CounterStyle = styled.span`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 14px;
  margin-left: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;
