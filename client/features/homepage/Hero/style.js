import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { color } from 'athena-design-tokens';
import { pxToRem, intToPx } from 'Shared/helpers/styled';
import {
  FlexElementStyle,
  ColumnToRowElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { SvgBlackArrowDown } from 'Client/ui/Svg/elements/BlackArrowDown';
import { SvgWhiteArrowDown } from 'Client/ui/Svg/elements/WhiteArrowDown';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  LinkAsRedButtonStyle,
  BasicButtonStyle,
} from 'Client/ui/Elements/Buttons/V2/style';
import { Image } from 'Client/ui/Image';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';

export const HeroWrapperStyle = styled(FlexElementStyle)`
  background-color: ${color.greyLighter};
`;

export const HeroContentStyle = styled(FlexElementStyle)`
  width: 100%;
  flex-flow: column;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  ${ContainerWithPadding}
  padding-top: 30px;
  padding-bottom: 50px;
  @media (min-width: ${pxToRem(Breakpoints.Desktop)}) {
    flex-flow: row;
    padding-top: 50px;
    align-items: center;
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
  color: ${color.black};
  margin-bottom: 30px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 520px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 42px;
  }
`;

export const HeroDescriptionStyle = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 22px;
  font-family: ${MakeFonts.CircularStandardBook};
  color: ${color.greyDark};
  margin-bottom: 40px;
  margin-top: 30px;
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
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 15px;
  }
`;

export const HeroTransparentButtonStyle = styled(Link)`
  display: inline-flex;
  align-self: flex-start;
  ${BasicButtonStyle};
  border: solid 1px ${color.black};
  background-color: transparent;
  &:hover,
  &:focus {
    color: ${color.black};
    text-decoration: none;
  }
`;

export const WhiteArrowDownIcon = styled(SvgWhiteArrowDown)`
  margin-left: 22px;
`;

export const BlackArrowDownIcon = styled(SvgBlackArrowDown)`
  margin-left: 10px;
`;

export const HeroPicturesStyle = styled(Image)`
  flex: 1;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    object-fit: contain;
    max-width: 50%;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding-left: 30px;
  }
`;
