import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx } from 'Shared/helpers/styled';
import {
  ColumnElementStyle,
  MiddleColumnStyle,
} from 'Client/ui/Elements/FlexElements';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const ConsultationHeaderWrapperStyle = styled.div`
  background-color: ${props => props.backgroundcolor};
  background: linear-gradient(
    115deg,
    ${props => props.gradientStart},
    ${props => props.gradientEnd}
  );
  margin-top: -5px;
`;

export const ConsultationPageWrapperStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: 15px auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-flow: row;
    margin: 30px auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  height: 100%;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 10px 0 20px;
    max-width: 780px;
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 0;
    padding: 0 20px 0 10px;
    order: 1;
    max-width: 390px;
    position: sticky;
    ${props =>
      props.bottomAffix
        ? `bottom: 0; align-self: flex-end`
        : 'top: 0; align-self: flex-start'};
  }
`;

export const ConsultationIconStyle = styled.span`
  display: inline-flex;
  margin-right: 7.5px;
  path.tofill {
    fill: ${BasicColors.PureBlack};
  }
`;

export const TopIdeasPageTitleStyle = styled(SecondLevelTitleStyle)`
  margin: 0 0 30px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 0 30px;
    padding: 0;
  }
`;

export const TopIdeaDetailsPageTitleStyle = styled(TopIdeasPageTitleStyle)`
  margin: 40px 0 25px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 40px 0 25px;
  }
`;

export const TopIdeasListStyle = styled.ol`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TopIdeasListItemStyle = styled.li`
  margin: 0 0 20px;
`;

export const SequencePageContentStyle = styled(MiddleColumnStyle)`
  width: 100%;
  display: flex;
  flex: 1 1 auto;
  overflow: auto;
`;

export const SequenceProposalFieldStyle = styled.div`
  display: block;
  flex: 0 0 auto;
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin-top: 10px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 25px;
  }
`;

export const SequenceFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  z-index: 2;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  box-shadow: 0 0 16px 6px ${ShadowColors.BlackZeroTwoOpacity};
  background-color: ${props => props.theme.color};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 10px ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const SequenceFooterTitleStyle = styled.p`
  font-family: ${MakeFonts.TradeGothicBoldCondensed};
  color: ${props => props.theme.fontColor};
  text-transform: uppercase;
  font-size: 11px;
  margin-bottom: 5px;
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 20px;
  }
`;

export const SequenceFooterLinkStyle = styled(Link)`
  font-size: 10px;
  color: ${props => props.theme.fontColor};
  outline-color: ${props => props.theme.fontColor};
  &:hover,
  &:focus {
    color: ${props => props.theme.fontColor};
    outline-color: ${props => props.theme.fontColor};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;
