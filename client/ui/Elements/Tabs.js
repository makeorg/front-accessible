import styled from 'styled-components';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const TabNavStyle = styled.nav`
  position: relative;
  z-index: 0;
  width: 100%;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  overflow: auto hidden;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${BasicColors.PureBlack};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: ${intToPx(DefaultPadding.Desktop)};
    &::after {
      display: none;
    }
  }
`;

const TabListStyle = styled.ul`
  display: flex;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
`;

const TabStyle = styled.li`
  position: relative;
  z-index: ${props => (props.isSelected ? 1 : 0)};
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  min-width: 150px;
  text-transform: uppercase;
  font-family: ${MakeFonts.RobotoCondensedBold};
  background-color: ${props =>
    props.isSelected ? BackgroundColors.LightGrey : 'rgb(216,216,216)'};
  border-top: ${props =>
    props.isSelected
      ? `4px solid ${BasicColors.PureBlack}`
      : `1px solid ${BasicColors.PureBlack}`};
  border-bottom: ${props =>
    props.isSelected
      ? `1px solid ${BackgroundColors.LightGrey}`
      : `1px solid ${BasicColors.PureBlack}`};
  border-left: 1px solid ${BasicColors.PureBlack};
  border-right: 1px solid ${BasicColors.PureBlack};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
  }
  a {
    display: inline-flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-family: ${MakeFonts.RobotoCondensedBold};
    width: 100%;
    font-size: 14px;
    padding: ${props => (props.isSelected ? '7px 5px' : '5px')};
    text-decoration: none;
    text-align: center;
    color: ${BasicColors.PureBlack};
    text-transform: uppercase;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      flex-flow: row;
      font-size: 18px;
      padding: ${props => (props.isSelected ? '15px' : '10px 15px')};
    }
  }
`;

export const FullWidthTabStyle = styled(TabStyle)`
  flex: 1;
`;

export { TabStyle, TabListStyle };
