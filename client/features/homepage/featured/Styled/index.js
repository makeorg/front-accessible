import styled from 'styled-components';
import {
  Layouts,
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { ConsultationLabelStyle } from 'Client/ui/Elements/ConsultationElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';

const ArticleHeightMobile = 235;
const ArticleHeightDesktop = 630;

export const FeaturedWrapperStyle = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
`;

export const FeaturedWrapperTitleStyle = styled.h2`
  font-size: 20px;
  line-height: 1;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 34px;
  }
`;

export const FeaturedArticleWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-content: space-between;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    height: ${intToPx(ArticleHeightDesktop)};
  }
`;

export const FeaturedArticleColumnStyle = styled.article`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  flex: 1;
  & > article:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    height: ${intToPx(ArticleHeightDesktop)};
    margin-left: ${intToPx(DefaultPadding.Desktop)};
    & > article:nth-child(2) {
      margin-top: ${intToPx(DefaultPadding.Desktop)};
    }
  }
`;

export const FeaturedArticleStyle = styled.article`
  position: relative;
  z-index: 0;
  height: ${intToPx(ArticleHeightMobile)};
  overflow: hidden;
  flex: 1;
  border-radius: 10px;
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    height: ${intToPx(ArticleHeightDesktop)};
    margin-bottom: 0;
    & > article:nth-child(2) {
      margin-top: ${intToPx(DefaultPadding.Desktop)};
    }
  }
`;

export const FeaturedImageStyle = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  transform: translate(-50%, -50%);
  height: 100%;
  max-width: 1000%;
`;

export const FeaturedInformationsWraperStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-flow: column;
  height: 100%;
  align-items: flex-start;
  padding: ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const FeaturedLabelStyle = styled(ConsultationLabelStyle)`
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
  color: ${BasicColors.PureWhite};
  text-shadow: 0 1px 1px ${ShadowColors.BlackZeroFiveOpacity};
  margin: ${intToPx(DefaultPadding.Mobile)} 0;
  line-height: 1;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 34px;
  }
`;

export const FeaturedDescriptionStyle = styled.p`
  font-size: 13px;
  color: ${BasicColors.PureWhite};
  text-shadow: 0 1px 1px ${ShadowColors.BlackZeroFiveOpacity};
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  line-height: 1.5;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const FeaturedLinkStyle = styled(LinkAsRedButton)`
  font-size: 13px;
  padding: 5px 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    padding: 10px 15px;
  }
`;
