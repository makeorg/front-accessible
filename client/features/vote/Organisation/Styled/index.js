import styled from 'styled-components';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const OrganisationsVoteWrapperStyle = styled(ParagraphStyle)`
  border-left: 2px solid ${BackgroundColors.ExtraLightGrey};
  color: ${TextColors.MediumGrey};
  padding: 0 8px;
`;
