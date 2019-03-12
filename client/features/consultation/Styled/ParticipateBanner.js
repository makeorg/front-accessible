import styled from 'styled-components';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const ParticipateWrapperStyle = styled.aside`
  display: flex;
  align-items: center;
  background-color: ${props => props.color};
  background: linear-gradient(
    106deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  padding: ${intToPx(DefaultPadding.Mobile)};
  margin: 15px 0;
`;

export const ParticipateTitle = styled.h3`
  color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.RobotoBold};
  font-size: 15px;
  line-height: 1.33;
  text-transform: none;
  text-align: right;
  width: 100%;
  max-width: 450px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 18px;
    line-height: 1.22;
  }
`;

export const ParticipateSeparatorStyle = styled.div`
  width: 1px;
  min-height: 75px;
  background-color: ${BasicColors.PureWhite};
  opacity: 0.3;
  margin: 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: 0 20px;
  }
`;
