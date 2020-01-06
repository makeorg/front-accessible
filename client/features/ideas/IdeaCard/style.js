import styled from 'styled-components';
import { PopularProposalHeader } from 'Client/features/proposal/PopularProposalCard/style';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import {
  MakeThemeColors,
  TextColors,
  BorderColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { SvgIdea, SvgLike, SvgThumbsUp } from 'Client/ui/Svg/elements';

export const IdeaCardHeaderStyle = styled(PopularProposalHeader)`
  display: flex;
  justify-content: space-between;
  font-family: ${MakeFonts.CircularStandardBold};
`;

export const LinkStyle = styled(RedLinkStyle)`
  display: flex;
  align-items: center;

  svg {
    fill: ${MakeThemeColors.Red};
  }
`;

export const ProposalsAssociatedStyle = styled.div`
  display: flex;
  align-items: center;
  color: ${TextColors.MediumGrey};
`;

export const IdeaCardContentStyle = styled.div`
  margin: 15px 0;
`;

export const PositionStyle = styled.div`
  display: flex;
  align-items: center;
  svg {
    fill: ${MakeThemeColors.Red};
  }
`;

export const PositionContentStyle = styled.div`
  color: ${TextColors.MediumGrey};
  a {
    color: ${MakeThemeColors.Red};
  }
`;

export const CollapseStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 20px;
  margin-top: 20px;
  border-top: 1px solid ${BorderColors.LightGrey};
  cursor: pointer;
`;

export const CollapseContentStyle = styled.div`
  display: block;
  visibility: hidden;
  height: 0;
  width: 100%;
  &.open {
    visibility: visible;
    height: auto;
  }
`;

export const CollapseTextStyle = styled.button`
  display: flex;
  align-items: center;
  color: ${TextColors.MediumGrey};
  border: none;
  background-color: transparent;
  order: 1;

  svg {
    margin-left: 5px;
    width: 10px;
    height: 10px;
    fill: ${MakeThemeColors.Red};
  }
`;

export const ScoringContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  justify-content: space-between;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    flex-direction: row;
  }
`;

export const SvgIdeaStyle = styled(SvgIdea)``;

export const SvgLikeStyle = styled(SvgLike)`
  fill: ${MakeThemeColors.Red};
`;

export const SvgThumbsUpStyle = styled(SvgThumbsUp)`
  .tofill {
    fill: ${VoteColors.Agree};
  }
`;
