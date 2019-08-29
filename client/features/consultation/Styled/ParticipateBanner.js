import styled from 'styled-components';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';

export const ParticipateWrapperStyle = styled.aside`
  display: flex;
  align-items: center;
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    106deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  padding: 20px ${intToPx(DefaultPadding.Mobile)};
  margin: 5px 0 15px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 0 35px;
  }
`;

export const ParticipateDescription = styled.p`
  color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 15px;
  line-height: 1.33;
  text-transform: none;
  text-align: right;
  width: 100%;
  max-width: 450px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
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
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 20px;
  }
`;
