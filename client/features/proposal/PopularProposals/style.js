import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { BackgroundColors } from 'Client/app/assets/vars/Colors';
import { TileWithTitleStyle } from 'Client/ui/Elements/TileWithTitle/Styled';
import { CurrentConsultationArrowsStyle } from 'Client/features/homepage/CurrentConsultations/Styled';
import { ProposalsSliderListStyle } from 'Client/features/homepage/Proposals/Styled';

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

export const ArrowStyle = styled(CurrentConsultationArrowsStyle)`
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
