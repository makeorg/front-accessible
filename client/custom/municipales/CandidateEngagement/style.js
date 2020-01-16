import styled from 'styled-components';
import { ColumnElementStyle } from 'Client/ui/Elements/FlexElements';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const CandidateWrapperStyle = styled.div`
  background-color: ${BasicColors.PureWhite};
  padding: 15px 0;
`;

export const CandidateHeadingStyle = styled.div`
  padding: 15px;
`;

export const CandidateSeparatorStyle = styled(SeparatorStyle)`
  margin-top: 7.5px;
`;

export const CandidateTitleStyle = styled(FourthLevelTitleStyle)`
  width: 175px;
`;

export const CandidateListItemStyle = styled.li`
  display: flex;
  align-items: center;
  padding: 0 15px;
`;

export const CandidateInformationsStyle = styled(ColumnElementStyle)`
  align-items: center;
  justify-content: center;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    align-items: flex-start;
  }
`;

export const CandidateLinkStyle = styled(RedLinkRouterStyle)`
  white-space: nowrap;
`;

export const PoliticalPartyStyle = styled(ParagraphStyle)`
  white-space: nowrap;
`;
