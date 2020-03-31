import styled from 'styled-components';
import {
  MakeThemeColors,
  BackgroundColors,
  BasicColors,
  ShadowColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx, pxToPercent } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  FlexElementStyle,
  MiddleRowStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { TabsOffsetDesktop } from 'Shared/constants/tabs';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import {
  GreyButtonStyle,
  UnstyledButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';
import { RedLinkHTMLElementStyle } from './LinkElements';

const DesktopOffset = intToPx(TabsOffsetDesktop);
const DesktopMarginWithOffset = DefaultPadding.Desktop - TabsOffsetDesktop;

export const ProfileWrapperStyle = styled.div`
  background-color: ${BackgroundColors.LightGrey};
`;

export const ProfileHeaderStyle = styled.header`
  height: 100px;
  width: 100%;
  background-color: ${MakeThemeColors.Blue};
  margin-top: -5px;
`;

export const ProfilePageContentWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  width: 100%;
  align-items: flex-start;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 0 auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 20px;
    flex-flow: row;
    justify-content: space-between;
    margin: 0 auto ${intToPx(DesktopMarginWithOffset)};
    transform: translateY(-${DesktopOffset});
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  height: 100%;
`;

export const ProfilePageWithoutTabsContentStyle = styled(ContentElementStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 90px 0 0;
    width: ${pxToPercent(780, 1140)};
  }
`;

export const ProfilePageContentStyle = styled(ContentElementStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0;
    width: ${pxToPercent(760, 1140)};
    padding-left: ${pxToPercent(20, 1140)};
  }
`;

export const ProfilePageSidebarWrapperStyle = styled.div`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: ${pxToPercent(360, 1140)};
  }
`;

export const ProfilePageSidebarStyle = styled(ContentElementStyle)`
  align-items: center;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 0 20px 20px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
`;

export const ProfileContentHeaderStyle = styled.header`
  width: 100%;
  padding: 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0;
  }
`;

export const ProfileTitleSeparatorStyle = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${BackgroundColors.MediumGrey};
  margin: 5px auto ${intToPx(DefaultPadding.Mobile)};
`;

export const ProfileTabIconStyle = {
  alignSelf: 'center',
  marginLeft: '5px',
  fill: MakeThemeColors.Red,
};

export const ProfileAvatarLayoutStyle = styled(FlexElementStyle)`
  align-self: center;
  flex-flow: column;
`;

export const ProfileAvatarStyle = styled.div`
  display: flex;
  justify-content: center;
  transform: translateY(-${props => intToPx(props.avatarSize / 2)});
  margin-bottom: -${props => intToPx(props.avatarSize / 2)};
  > span {
    margin: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    transform: translateY(-20px);
    margin-bottom: -20px;
    margin-right: 0;
  }
`;

export const ProfileContentWrapperStyle = styled(ColumnElementStyle)`
  align-content: flex-start;
  margin: 20px 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-content: center;
  }
`;

export const ProfileNavigationStyle = styled(ColumnElementStyle)`
  margin-top: 10px;
`;

export const ProfileTitleStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 16px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const ProfileContentStyle = styled(ParagraphStyle)`
  margin-bottom: 10px;
  svg {
    fill: ${TextColors.MediumGrey};
  }
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: center;
  }
`;

export const ProfileAlignLeftContentStyle = styled(ProfileContentStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: left;
  }
`;

export const ProfileDescriptionStyle = styled(ParagraphStyle)`
  width: 100%;
  overflow-wrap: break-word;
  align-self: flex-start;
  max-height: ${props => (props.isCollapsed ? '126px' : '100%')};
  overflow: ${props => (props.isCollapsed ? 'hidden' : 'visible')};
`;

export const ProfileSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0;
`;

export const ProfileInformationButtonStyle = styled(GreyButtonStyle)`
  margin: 10px 0 0;
`;

export const ProfileWebsiteLinkStyle = styled(RedLinkHTMLElementStyle)`
  word-break: break-all;
`;

export const ProfileCollapseWrapperStyle = styled(MiddleRowStyle)`
  position: relative;
  z-index: 0;
  width: 100%;
  margin: 10px 0;
`;

export const ProfileCollapseSeparatorStyle = styled(SeparatorStyle)`
  position: absolute;
  z-index: 0;
  top: 50%;
  left: 0;
  &:before {
    display: ${props => (props.isCollapsed ? 'block' : 'none')};
    content: '';
    position: absolute;
    z-index: 0;
    bottom: 100%;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgb(255, 255, 255)
      ),
      linear-gradient(to bottom, rgba(255, 255, 255, 0) 3%, rgb(255, 255, 255));
  }
`;

export const ProfileCollapseButtonStyle = styled(UnstyledButtonStyle)`
  position: relative;
  z-index: 1;
  background-color: ${BasicColors.PureWhite};
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${MakeThemeColors.Red};
  text-transform: uppercase;
  text-decoration: none;
  padding: 0 10px;
`;
