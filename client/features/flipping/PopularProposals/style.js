import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
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
} from 'Client/ui/Elements/TileWithTitle/Styled';
import { ProposalsSliderListStyle } from 'Client/features/homepage/Proposals/style';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { Elements } from 'Client/app/assets/vars/Elements';

export const PopularProposalsSliderWrapperStyle = styled.div`
  background-color: ${BackgroundColors.ExtraLightGrey};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-top: 15px;
  padding: 20px 0;
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

export const PopularProposalsSliderListStyle = styled(ProposalsSliderListStyle)`
  padding: 5px 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 5px 20px;
  }
`;

export const PopularProposalsSliderListItemStyle = styled.li`
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex: 1;
    &:last-child {
      margin-right: 0;
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
