import styled from 'styled-components';
import { ShadowColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ProfileAvatarStyle,
  ProfilePageSidebarStyle,
} from 'Client/ui/Elements/ProfileElements';

export const SearchSidebarTileStyle = styled.div`
  width: 100%;
  background-image: url(${props => props.image});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${BasicColors.PureWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  padding: 20px;
`;

export const SearchResultsConsultationListStyle = styled(UnstyledListStyle)`
  @media (max-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 20px;
  }
`;

export const SearchOrganisationsListStyle = styled(UnstyledListStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px 30px;
  }
  @media (max-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 20px;
  }
`;

export const SearchOrganisationsListItemStyle = styled.li`
  padding: 20px 0 0;
`;

export const SearchOrganisationItemStyle = styled(ProfilePageSidebarStyle)`
  text-decoration: none;
  &.mobile-radius {
    border-radius: ${intToPx(Elements.BorderRadius)};
  }
`;

export const SearchOrganisationAvatarStyle = styled(ProfileAvatarStyle)`
  margin-bottom: 10px;
`;
