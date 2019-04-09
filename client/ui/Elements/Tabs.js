import styled from 'styled-components';
import {
  Tabs as TabsWrapper,
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
} from 'react-tabs';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

const TabsWrapperStyle = styled(TabsWrapper)`
  width: 100%;
`;

const TabListStyle = styled(UnstyledTabList)`
  display: flex;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  overflow: auto hidden;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: ${intToPx(DefaultPadding.Desktop)};
    border-bottom: 1px solid ${BasicColors.PureBlack};
    overflow: visible;
  }
`;

const TabStyle = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 185px;
  flex: 1;
  flex-flow: column;
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${MakeFonts.RobotoCondensedBold};
  padding: 5px;
  background-color: ${BackgroundColors.MediumGrey};
  border: 1px solid ${BasicColors.PureBlack};
  border-left: none;
  border-bottom: none;
  :first-child {
    border-left: 1px solid ${BackgroundColors.PureBlack};
    border-right: none;
  }
  cursor: pointer;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    font-size: 18px;
    padding: 10px 15px;
  }
  &.selected {
    background-color: ${BackgroundColors.LightGrey};
    padding: 7px 5px;
    border-top: 4px solid ${BasicColors.PureBlack};
    border-bottom: 1px solid ${BackgroundColors.LightGrey};
    transform: translateY(1px);
    border-left: 1px solid ${BackgroundColors.PureBlack};
    cursor: default;
    @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
      padding: 15px;
    }
    :first-child {
      border-right: 1px solid ${BackgroundColors.PureBlack};
    }
  }
  &.disabled {
    cursor: not-allowed;
  }
`;

TabStyle.tabsRole = 'Tab';
TabListStyle.tabsRole = 'TabList';

export { TabsWrapperStyle, TabStyle, TabListStyle };
