import styled from 'styled-components';
import { PopularProposalHeader } from 'Client/features/proposal/PopularProposalCard/style';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import {
  MakeThemeColors,
  TextColors,
  VoteColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { SvgIdea, SvgLike, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { Link } from 'react-router-dom';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { CardStyle } from 'Client/ui/Cards';

export const TopIdeaCardStyle = styled(CardStyle)`
  overflow: hidden;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

export const TopIdeaCardHeaderStyle = styled(PopularProposalHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${MakeFonts.CircularStandardBold};
  background-color: ${BackgroundColors.ExtraLightGrey};
  margin: -20px -20px 20px -20px;
`;

export const TopIdeaLinkStyle = styled(RedLinkRouterStyle)`
  display: flex;
  align-items: center;
  svg {
    fill: ${MakeThemeColors.Red};
  }
`;

export const TopIdeaContentStyle = styled(Link)`
  width: 100%;
  font-size: 14px;
  line-height: 19px;
  font-family: ${MakeFonts.CircularStandardBold};
  align-self: flex-start;
  flex: 1 1 auto;
  margin-top: 15px;
  text-decoration: none;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 16px;
    line-height: 22px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 25px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 20px;
    line-height: 30px;
  }
`;

export const ProposalsAssociatedStyle = styled(ParagraphStyle)`
  display: inline-flex;
  align-items: center;
`;

export const TopIdeaCardContentStyle = styled.div`
  margin: 15px 0;
`;

export const PositionStyle = styled.div`
  display: flex;
  svg {
    fill: ${MakeThemeColors.Red};
  }
`;

export const PositionContentStyle = styled(ParagraphStyle)`
  margin-left: 10px;
`;

export const TopIdeaCollapseWrapperStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  margin-top: 10px;
  border-top: 1px solid ${BackgroundColors.TaintedWhite};
`;

export const TopIdeaCollapseContentStyle = styled.div`
  display: block;
  visibility: hidden;
  height: 0;
  width: 100%;
  &.open {
    visibility: visible;
    height: auto;
  }
`;

export const TopIdeaCollapseTriggerStyle = styled(UnstyledButtonStyle)`
  display: flex;
  align-items: center;
  order: 1;
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.AltMediumgrey};
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 24px;
  }
  .tofill {
    fill: ${MakeThemeColors.Red};
  }
`;

export const TopIdeaCollapseIconStyle = {
  marginLeft: '7.5px',
};

export const ScoringContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: space-between;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: row;
  }
`;

export const SvgIdeaStyle = styled(SvgIdea)`
  width: 25px;
  height: 25px;
`;

export const SvgLikeStyle = styled(SvgLike)`
  width: 25px;
  height: 25px;
  fill: ${MakeThemeColors.Red};
`;

export const SvgThumbsUpStyle = styled(SvgThumbsUp)`
  width: 25px;
  height: 25px;
  .tofill {
    fill: ${VoteColors.Agree};
  }
`;
