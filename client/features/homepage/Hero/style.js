import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { pxToRem, intToPx } from 'Shared/helpers/styled';
import {
  FlexElementStyle,
  ColumnToRowElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { SvgBlackArrowDown } from 'Client/ui/Svg/elements/BlackArrowDown';
import { SvgWhiteArrowDown } from 'Client/ui/Svg/elements/WhiteArrowDown';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  LinkAsRedButtonStyle,
  BasicButtonStyle,
} from 'Client/ui/Elements/Buttons/V2/style';
import { Image } from 'Client/ui/Image';

export const HeroWrapperStyle = styled(FlexElementStyle)`
  padding: 30px 20px 50px;
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    padding: 50px 20px;
  }
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    padding: 50px 20px 100px;
  }
`;

export const HeroContentStyle = styled(FlexElementStyle)`
  flex-flow: column;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 0 auto;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    flex-flow: row;
  }
`;

export const HeroInnerContentStyle = styled(ColumnElementStyle)`
  flex: 1;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding-right: 30px;
  }
`;

export const ColumnToRowToColumnStyle = styled(ColumnToRowElementStyle)`
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    flex-flow: column;
  }
`;

export const HeroTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 36px;
  color: ${BasicColors.PureBlack};
  margin-bottom: 30px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 520px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin: 60px 0px 30px 0px;
    font-size: 42px;
  }
`;

export const HeroDescriptionStyle = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${TextColors.BlackWithOpacity};
  margin-bottom: 40px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0px 0px 40px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 57px;
  }
`;

export const HeroRedButtonStyle = styled(LinkAsRedButtonStyle)`
  display: inline-flex;
  align-self: flex-start;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-right: 24px;
  }
`;

export const HeroTransparentButtonStyle = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  ${BasicButtonStyle};
  border: solid 1px ${BasicColors.PureBlack};
  background-color: transparent;
  &:hover,
  &:focus {
    color: ${BasicColors.PureBlack};
    text-decoration: none;
  }
`;

export const WhiteArrowDownIcon = styled(SvgWhiteArrowDown)`
  margin-left: 22px;
`;

export const BlackArrowDownIcon = styled(SvgBlackArrowDown)`
  margin-left: 10px;
`;

export const PicturesWrapperStyle = styled.div`
  flex: 1;
  position: relative;
  margin-bottom: 30px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding-left: 30px;
  }
`;

export const FirstPicture = styled(Image)`
  z-index: 1;
  position: relative;
  left: -20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    left: 0px;
  }
`;

export const SecondPicture = styled(Image)`
  position: absolute;
  right: -20px;
  bottom: 45%;
  z-index: 2;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    top: 15%;
    right: 0px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    top: 27%;
    right: -25%;
  }
`;

export const ThirdPicture = styled(Image)`
  position: absolute;
  left: 45%;
  bottom: 10%;
  z-index: 3;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    bottom: 5%;
    left: 50%;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    bottom: -155px;
    right: 0px;
  }
`;
