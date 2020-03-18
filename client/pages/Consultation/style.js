import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { intToPx, pxToPercent } from 'Shared/helpers/styled';
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
import { SvgChat } from 'Client/ui/Svg/elements';

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
  box-sizing: border-box;
  width: 100%;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  margin: ${props => (props.isGreatCause ? '20px auto' : '0 auto 20px')};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: 0 20px;
    margin: 20px auto;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    flex-flow: row;
    margin: 45px auto;
  }
`;

export const ContentElementStyle = styled(ColumnElementStyle)`
  width: 100%;
  height: 100%;
`;

export const ConsultationPageContentStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: ${pxToPercent(780, 1140)};
  }
`;

export const ConsultationPageSidebarStyle = styled(ContentElementStyle)`
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 20px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding-left: ${pxToPercent(20, 1140)};
    order: 1;
    width: ${pxToPercent(390, 1140)};
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

export const TopIdeasPageTitleStyle = styled.h2`
  font-size: 16px;
  line-height: 1.5;
  margin: 10px 0 20px;
  padding: 0 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 0 0 20px;
    padding: 0;
    font-size: 18px;
  }
`;

export const TopIdeaDetailsPageTitleStyle = styled(TopIdeasPageTitleStyle)`
  margin: 40px 0 25px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 40px 0 25px;
  }
`;

export const TopIdeaDetailsIconStyle = styled(SvgChat)`
  margin-right: 15px;
  .tofill {
    fill: ${BasicColors.PureBlack};
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
  margin-bottom: -5px;
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
