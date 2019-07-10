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
  padding: 0 ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
    flex-flow: row;
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
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturedArticleCol1Style = styled(FeaturedArticleStyle)`
  div {
    max-width: 100%;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
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
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const FeaturedInnerContent = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  align-items: flex-start;
`;

export const FeaturedPictureWraperStyle = styled.div`
  min-width: 145px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 195px;
  }
`;

export const FeaturedTypeStyle = styled(ConsultationLabelStyle)`
  display: inline-flex;
  padding: 5px 10px;
  font-size: 13px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const FeaturedArticleTitleStyle = styled.h3`
  font-family: ${MakeFonts.RobotoBold};
  font-size: 18px;
  text-transform: none;
  width: 100%;
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  line-height: 1.3;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 27px;
  }
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

export const FeaturedLinkStyle = styled(LinkAsRedButton)`
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) and (max-width: ${intToPx(
      Breakpoints.Desktop
    )}) {
    font-size: 22px;
    padding: 12px 25px;
  }
`;
