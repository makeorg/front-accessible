import styled from 'styled-components';
import {
  MakeThemeColors,
  BackgroundColors,
  BasicColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import {
  ColumnToRowElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { TabsOffsetDesktop } from 'Shared/constants/tabs';

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
  flex: 1;
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
