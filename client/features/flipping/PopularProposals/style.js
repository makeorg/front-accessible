import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints, Layouts } from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  BasicColors,
  TextColors,
  ShadowColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import {
  TileWithTitleStyle,
  TileTitleStyle,
  TileSeparatorStyle,
} from 'Client/ui/Elements/TileWithTitle/style';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { Elements } from 'Client/app/assets/vars/Elements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';

export const PopularProposalsSliderWrapperStyle = styled.div`
  background-color: ${BackgroundColors.ExtraLightGrey};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 20px 0;
  &.glider-contain {
    margin-top: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
`;

export const PopularProposalsSliderTitleStyle = styled(TileTitleStyle)`
  flex-flow: column;
  align-items: flex-start;
  padding: 0 20px;
`;

export const PopularProposalsSliderSeparatorStyle = styled(TileSeparatorStyle)`
  background-color: ${BorderColors.LightGrey};
`;

export const PopularProposalsWrapperStyle = styled(TileWithTitleStyle)`
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const PopularProposalsSliderListWrapperStyle = styled.div`
  padding: 0 20px 5px;
`;

export const PopularProposalsSliderListStyle = styled(UnstyledListStyle)`
  padding: 0 20px 5px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${intToPx(Layouts.ContainerWidth)};
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 0;
  }
`;

export const PopularProposalsSliderListItemStyle = styled.li`
  margin-right: 10px;
  &:last-child {
    margin-right: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex: 1;
    &:last-child {
      margin-right: 0;
      padding-right: 20px;
    }
  }
`;

export const PopularProposalsArrowsStyle = styled(UnstyledButtonStyle)`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureBlack};
  position: absolute;
  top: 50%;
  z-index: 10;
  &.glider-prev {
    left: 0;
  }
  &.glider-next {
    right: 0;
  }
  svg {
    fill: ${BasicColors.PureWhite};
  }
  &:hover,
  &:focus {
    color: ${TextColors.MediumGrey};
    background-color: ${BackgroundColors.ExtraLightGrey};
    svg {
      fill: ${TextColors.MediumGrey};
    }
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    &.glider-prev {
      transform: translateX(-50%);
    }
    &.glider-next {
      transform: translateX(50%);
    }
  }
`;
