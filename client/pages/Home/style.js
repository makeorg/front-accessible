import styled from 'styled-components';
import { pxToRem, intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import {
  MiddleColumnStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const HomepageWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: ${BasicColors.PureWhite};
  padding: 0 20px;
`;

export const HomepageSectionStyle = styled(ColumnElementStyle)`
  width: 100%;
  margin: 0 auto 100px;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  &:first-child {
    margin-top: 50px;
    @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
      margin-top: 166px;
    }
  }
  &:last-child {
    margin-bottom: 50px;
  }
`;

export const HomepageSectionTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 30px;
  color: ${BasicColors.PureBlack};
  margin-bottom: 40px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 42px;
  }
`;
