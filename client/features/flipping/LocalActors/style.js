import styled from 'styled-components';
import { TextColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { RedButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';

export const LocalActorItemStyle = styled.li`
  display: flex;
  align-items: center;
  color: ${TextColors.DarkGrey};
  font-size: 12px;
  padding: 20px 0;
  border-bottom: 1px solid ${BackgroundColors.ExtraLightGrey};

  &:nth-child(1) {
    padding-top: 4px;
  }
`;

export const AvatarStyle = styled.div`
  display: flex;
  margin-right: 5px;
`;

export const ButtonWrapperStyle = styled(RedButtonStyle)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export const FooterStyle = styled(ParagraphStyle)`
  margin-top: 20px;
`;

export const LocalActorCountStyle = styled.div`
  margin-top: 5px;
`;
