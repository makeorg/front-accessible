import styled from 'styled-components';
import { PopularProposalHeader } from 'Client/features/proposal/PopularProposalCard/style';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { MakeThemeColors, TextColors } from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

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
