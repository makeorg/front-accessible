import styled from 'styled-components';
import {
  MakeThemeColors,
  BackgroundColors,
  BasicColors,
  ShadowColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  FlexElementStyle,
  MiddleRowStyle,
  ColumnToRowElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { TabsOffsetDesktop } from 'Shared/constants/tabs';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import {
  GreyButtonStyle,
  UnstyledButtonStyle,
} from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Elements } from 'Client/app/assets/vars/Elements';

const DesktopOffset = intToPx(TabsOffsetDesktop);
const DesktopMarginWithOffset = DefaultPadding.Desktop - TabsOffsetDesktop;

export const ProfileWrapperStyle = styled.div`
  background-color: ${BackgroundColors.LightGrey};
`;

export const ProfileHeaderStyle = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${MakeThemeColors.Blue};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    height: 100px;
  }
`;

export const ProfilePageContentWrapperStyle = styled(ColumnToRowElementStyle)`
  width: 100%;
  align-items: flex-start;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 0 auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    justify-content: space-between;
    margin: 0 auto ${intToPx(DesktopMarginWithOffset)};
    transform: translateY(-${DesktopOffset});
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  flex: 1 1 auto;
`;

export const ProfilePageContentStyle = styled(ContentElementStyle)`
  margin: ${intToPx(DefaultPadding.Mobile)} 0 30px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0;
    max-width: 750px;
  }
`;

export const ProfilePageSidebarStyle = styled(ContentElementStyle)`
  align-items: center;
  background-color: ${BasicColors.PureWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 0 ${intToPx(DefaultPadding.Mobile)} ${intToPx(DefaultPadding.Mobile)};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 360px;
    margin-right: 30px;
    padding: 0 ${intToPx(DefaultPadding.Desktop)}
      ${intToPx(DefaultPadding.Desktop)};
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
  transform: translateY(-20px);
  margin-bottom: -20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-right: 0;
  }
`;

export const ProfileContentWrapperStyle = styled(ColumnElementStyle)`
  align-content: flex-start;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    align-content: center;
  }
`;

export const ProfileNavigationStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProfileTitleStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  font-size: 16px;
  text-transform: uppercase;
  margin: 5px 0;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
  }
`;

export const ProfileContentStyle = styled(ParagraphStyle)`
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    text-align: center;
  }
  svg {
    fill: ${TextColors.MediumGrey};
  }
`;

export const ProfileDescriptionStyle = styled(ParagraphStyle)`
  padding: 0 5px;
  align-self: flex-start;
  max-height: ${props => (props.isCollapsed ? '35px' : '100%')};
  overflow: ${props => (props.isCollapsed ? 'hidden' : 'visible')};
`;

export const ProfileSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0;
`;

export const ProfileInformationButtonStyle = styled(GreyButtonStyle)`
  margin: 10px 0 0;
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
    height: 50px;
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
