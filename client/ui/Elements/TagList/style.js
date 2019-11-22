import styled from 'styled-components';
import {
  BasicColors,
  BackgroundColors,
  MakeThemeColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const TaglistWrapperStyle = styled.div`
  background-color: ${BackgroundColors.ExtraLightGrey};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 100%;
  }
`;

export const TagListStyle = styled.ul`
  list-style-type: none;
  padding: 14px;
  width: 100%;
  overflow: auto;
  max-height: ${intToPx(Elements.DropdownsContainerHeight)};

  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: ${intToPx(Elements.DropdownsContainerWidth)};
  }
`;

export const TagListElementStyle = styled.li`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
  color: ${props =>
    props.isSelected ? BasicColors.PureWhite : BasicColors.PureBlack};
  background-color: ${props =>
    props.isSelected ? MakeThemeColors.Red : BasicColors.PureWhite};
  border-radius: 3px;
  padding: 7px 15px;
`;

export const TagListHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${TextColors.MediumGrey};
  color: ${BasicColors.PureWhite};
  padding: 11px 15px 8px 15px;
  font-size: 12px;
`;

export const TagElementUnderlinedStyle = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

export const TagListFooterStyle = styled.div`
  padding: 33px 10%;
  background-color: ${BasicColors.PureWhite};
  color: ${BasicColors.PureBlack};
  text-align: center;
  width: 100%;
`;

export const CenterButtonStyle = styled.div`
  margin: 0 auto;
  display: inline-block;
`;
