import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import {
  BackgroundColors,
  BasicColors,
  TextColors,
} from 'Client/app/assets/vars/Colors';
import { TileWithTitleStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { ProposalsSliderListStyle } from 'Client/features/homepage/Proposals/Styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';

export const PopularProposalsWrapperStyle = styled(TileWithTitleStyle)`
  background-color: ${BackgroundColors.ExtraLightGrey};
`;

export const PopularProposalsSliderListStyle = styled(ProposalsSliderListStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding: 5px 0;
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
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: ${BasicColors.PureWhite};
  background-color: ${BasicColors.PureBlack};
  font-size: 15px;
  margin-right: 15px;
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
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    margin: 0 0 0 15px;
  }
`;

export const ArrowStyle = styled(PopularProposalsArrowsStyle)`
  position: absolute;
  top: 50%;
  right: ${props => (props.direction === 'left' ? 'unset' : 0)};
  left: ${props => (props.direction === 'left' ? 0 : 'unset')};
  transform: ${props =>
    props.direction === 'left' ? 'translateX(-50%)' : 'translateX(50%)'};
  z-index: 10;
  width: 35px;
  height: 35px;
`;
