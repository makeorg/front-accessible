import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { color } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ProfileHasVotedStyle } from 'Client/features/proposal/ProfileVoteCard/style';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ProposalStyle } from 'Client/ui/Elements/ProposalCardElements';
import { intToPx } from 'Shared/helpers/styled';
import styled from 'styled-components';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';

export const TopIdeasParagraphStyle = styled(ParagraphStyle)`
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 30px;
  }
`;

export const ThemeListItemStyle = styled.li`
  margin-bottom: 15px;
  padding: 20px;
  background-color: ${color.greyLighter};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const ThemeItemProposalStyle = styled(ProposalStyle)`
  margin: 0 0 10px;
`;

export const ThemeResultsWrapperStyle = styled(FlexElementStyle)`
  align-items: center;
`;

export const ThemeResultsButtonStyle = styled(ProfileHasVotedStyle)`
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    min-width: 38px;
    height: 38px;
    font-size: 12px;
    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

export const ThemeResultsDetailsStyle = styled(ParagraphStyle)`
  display: flex;
  flex-flow: column;
  margin-left: 5px;
`;

export const ThemeAgreeResultsStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${props => props.color};
`;

export const ThemeQualifiedStyle = styled.span`
  display: inline-flex;
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${color.black};
  margin: 0 15px 0 5px;
`;
