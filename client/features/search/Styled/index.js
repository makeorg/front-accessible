import styled from 'styled-components';
import { color } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import {
  Breakpoints,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  ProfileAvatarStyle,
  ProfilePageSidebarStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';

export const SearchSidebarTileStyle = styled.div`
  width: 100%;
  background-image: url(${props => props.image});
  background-position: right;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: ${color.white};
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
  padding-top: 40px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding-top: 20px;
    margin-bottom: 0;
  }
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

export const BusinessConsultationsItemStyle = styled.li`
  display: flex;
  border-radius: ${intToPx(Elements.BorderRadius)};
  background-color: ${props => props.backgroundColor || 'rgb(242, 242, 242)'};
  overflow: hidden;
  margin: 0 0 ${intToPx(DefaultPadding.Mobile)};
`;

export const BusinessConsultationsItemLinkStyle = styled(ParagraphStyle)`
  display: flex;
  text-decoration: none;
  font-family: ${MakeFonts.CircularStandardBold};
  width: 100%;
`;

export const BusinessConsultationStyle = styled.div`
  padding: 15px;
  flex: 1;
`;

export const BusinessConsultationsItemStatusStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${color.greyDark};
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  margin-bottom: 4px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
    line-height: 21px;
  }
`;

export const BusinessConsultationsItemBorderStyle = styled.div`
  width: 10px;
  background: linear-gradient(
    352deg,
    ${props => props.colorStart},
    ${props => props.colorEnd}
  );
`;

export const BusinessConsultationsItemArrowStyle = styled(SvgAngleArrowRight)`
  justify-self: center;
  align-self: center;
  margin-right: 5px;
`;
