import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  BackgroundColors,
  ShadowColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { SvgLightning } from 'Client/ui/Svg/elements';

export const ProposalsListStyle = styled(UnstyledListStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

export const ProposalsListItemStyle = styled.li`
  display: flex;
  flex-flow: column;
  flex: 1;
  align-content: space-between;
  padding: 20px;
  background-color: ${BackgroundColors.TaintedWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-bottom: 0;
  }
`;

export const ProposalAuthorStyle = styled(ParagraphStyle)`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid ${BackgroundColors.ExtraLightGrey};
`;

export const ResultsPositionStyle = styled(ParagraphStyle)`
  margin: 15px 0 0;
`;

const ResultsItemStyle = styled.span`
  font-family: ${MakeFonts.CircularStandardBold};
`;

export const ResultsLikeItStyle = styled(ResultsItemStyle)`
  color: ${VoteColors.Agree};
`;

export const ResultsNoWayStyle = styled(ResultsItemStyle)`
  color: ${VoteColors.Disagree};
`;

export const ResultsProposalIconStyle = styled(SvgLightning)`
  width: 7px,
  height: 14px,
  margin: 0 5px 0,
`;
