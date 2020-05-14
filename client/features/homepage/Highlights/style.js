import styled from 'styled-components';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const HighlightsWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  margin-top: 60px;
`;

export const HighlightsBannerTitle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 30px;
  color: ${BasicColors.PureBlack};
  padding: 20px 0px;
  text-transform: none;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 42px;
  }
`;

export const HighlightsBannerFiguresContainer = styled(SpaceBetweenRowStyle)`
  padding: 20px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HighlightFigureContainer = styled.div`
  display: flex;
  flex-flow: column;
  margin-bottom: 50px;
`;

export const SvgWrapperStyle = styled.span`
  margin-bottom: 30px;
`;

export const FiguresWrapperStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 22px;
  color: ${BasicColors.PureBlack};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 26px;
  }
`;

export const SubtitleFiguresWrapperStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBook};
  font-size: 14px;
  color: ${ShadowColors.BlackZeroSixOpacity};
  padding-top: 7px;
  padding-bottom: 30px;
`;

export const FigureSeparationLine = styled.hr`
  margin: 0px;
  width: 50px;
  height: 4px;
  border: solid 0.5px ${ShadowColors.BlackZeroSixOpacity};
  background-color: ${ShadowColors.BlackZeroSixOpacity};
`;
