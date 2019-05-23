import styled from 'styled-components';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';

export const FeaturedArticleWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-content: space-between;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
  }
`;

export const FeaturedArticleColumnStyle = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: 1;
  margin-right: 20px;
  & > article:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturedArticleStyle = styled.article`
  display: flex;
  flex: 1;
  background-color: ${BackgroundColors.LightGrey};
  color: ${BasicColors.PureBlack};
  margin-bottom: 25px;
`;

export const FeaturedArticleCol1Style = styled(FeaturedArticleStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-direction: column;
  }
`;

export const FeaturedInformationsWraperStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const FeaturedPictureWraperStyle = styled.div`
  min-width: 121px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 242px;
  }
`;

export const FeaturedTypeStyle = styled(ConsultationLabelStyle)`
  display: inline-flex;
  font-size: 13px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const FeaturedArticleTitleStyle = styled.h3`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 18px;
  text-transform: none;
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  line-height: 1;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 32px;
  }
`;

export const FeaturedDescriptionStyle = styled.p`
  font-size: 13px;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  line-height: 1.5;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const FeaturedLinkStyle = styled(LinkAsRedButton)``;
