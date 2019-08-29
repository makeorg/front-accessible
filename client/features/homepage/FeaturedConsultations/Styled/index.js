import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ThirdLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const FeaturedArticleWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-content: space-between;
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const FeaturedArticleColumnStyle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: 1;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
`;

export const FeaturedArticleStyle = styled.article`
  display: flex;
  height: 100%;
  justify-content: space-between;
  background-color: ${BackgroundColors.LightGrey};
  color: ${BasicColors.PureBlack};
  margin-bottom: 30px;
  overflow: hidden;
  border-radius: ${intToPx(Elements.BorderRadius)};
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturedArticleCol1Style = styled(FeaturedArticleStyle)`
  div {
    max-width: 100%;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: column;
  }
`;

export const FeaturedInformationsWrapperStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  width: 100%;
  padding: 12px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    padding: 17px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding: 25px;
  }
`;

export const FeaturedInnerContent = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  align-items: flex-start;
`;

export const FeaturedPictureWraperStyle = styled.div`
  width: 105px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 112px;
    width: auto;
  }
`;

export const FeaturedTypeStyle = styled(ConsultationLabelStyle)`
  display: inline-flex;
`;

export const FeaturedArticleTitleStyle = styled(ThirdLevelTitleStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  width: 100%;
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
`;

export const FeaturedDescriptionStyle = styled.p`
  font-size: 13px;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  line-height: 1.5;
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 16px;
  }
`;
