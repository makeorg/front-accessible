import styled from 'styled-components';
import {
  Layouts,
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

const TabListStyle = styled.ul`
  display: flex;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0;
  margin-bottom: ${intToPx(DefaultPadding.Mobile)};
  overflow: auto hidden;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: ${intToPx(DefaultPadding.Desktop)};
    overflow: visible;
  }
`;

const TabStyle = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 185px;
  flex: 1;
  flex-flow: column;
  font-size: 14px;
  text-transform: uppercase;
  font-family: ${MakeFonts.RobotoCondensedBold};
  background-color: ${props =>
    props.selected ? BackgroundColors.LightGrey : 'rgb(216,216,216)'};
  border-top: ${props =>
    props.selected
      ? `4px solid ${BasicColors.PureBlack}`
      : `1px solid ${BasicColors.PureBlack}`};
  border-bottom: ${props =>
    props.selected ? `1px solid ${BackgroundColors.LightGrey}` : 0};
  border-left: ${props =>
    props.selected ? `1px solid ${BasicColors.PureBlack}` : 0};
  border-right: ${props =>
    props.selected ? 0 : `1px solid ${BasicColors.PureBlack}`};
  :first-child {
    border-left: ${props =>
      props.selected ? 0 : `1px solid ${BasicColors.PureBlack}`};
    border-right: ${props =>
      props.selected ? `1px solid ${BasicColors.PureBlack}` : 0};
  }
  cursor: pointer;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    font-size: 18px;
  }
  &.selected {
    cursor: default;
  }
  &.disabled {
    cursor: not-allowed;
  }
  a {
    margin: 0px;
    display: block;
    width: 100%;
    height: 100%;
    padding: ${props => (props.selected ? '7px 5px' : '5px')};
    text-decoration: none;
    text-align: center;
    @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
      padding: ${props => (props.selected ? '15px' : '10px 15px')};
    }
  }
`;

export { TabStyle, TabListStyle };
