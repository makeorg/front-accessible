import styled from 'styled-components';
import {
  MakeThemeColors,
  BackgroundColors,
  BasicColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import {
  ColumnToRowElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';

export const ProfileWrapperStyle = styled.div`
  background-color: ${BackgroundColors.LightGrey};
`;

export const ProfileHeaderStyle = styled.header`
  height: 40px;
  width: 100%;
  background-color: ${MakeThemeColors.Blue};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    height: 100px;
  }
`;

export const ProfilePageContentWrapperStyle = styled(ColumnToRowElementStyle)`
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin: 0 auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    justify-content: space-between;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  flex: 1 1 auto;
`;

export const ProfilePageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 750px;
  }
`;

export const ProfilePageSidebarStyle = styled(ContentElementStyle)`
  align-items: center;
  background-color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 360px;
    margin-right: 30px;
    transform: translateY(-50px);
  }
`;
