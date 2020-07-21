import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import {
  SpaceBetweenRowStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { SvgPeople, SvgLight, SvgHandHeart } from 'Client/ui/Svg/elements';

export const HighlightsBannerFiguresContainerStyle = styled(
  SpaceBetweenRowStyle
)`
  padding: 0;
  flex-wrap: wrap;
`;

export const HighlightFigureContainerStyle = styled(ColumnElementStyle)`
  margin-bottom: 50px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 0;
  }
`;

const IconStyle = `
  margin-bottom: 30px;
  .tofill {
    fill: #253186
  }
`;

export const PeopleIconStyle = styled(SvgPeople)`
  ${IconStyle}
  height: 31px;
`;

export const LigthIconStyle = styled(SvgLight)`
  ${IconStyle}
`;

export const HeartIconStyle = styled(SvgHandHeart)`
  ${IconStyle}
`;

export const FiguresStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 22px;
  color: ${BasicColors.PureBlack};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 26px;
  }
`;

export const SubtitleFiguresStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 14px;
  color: ${ShadowColors.BlackZeroSixOpacity};
  padding: 7px 15px 30px 0px;
`;

export const FigureSeparationLineStyle = styled.hr`
  margin: 0px;
  width: 50px;
  height: 4px;
  border: solid 0.5px ${ShadowColors.BlackZeroSixOpacity};
  background-color: ${ShadowColors.BlackZeroSixOpacity};
`;
