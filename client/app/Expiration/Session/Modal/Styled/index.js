import styled from 'styled-components';
import { ActiveButtonStyle } from 'Client/ui/Elements/Buttons/style';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { Image } from 'Client/ui/Image';

export const ExpirationSessionModalContentStyle = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  max-width: 350px;
  padding: 10px 0px;
`;

export const ReloadButtonStyle = styled(ActiveButtonStyle)`
  margin-top: 20px;
`;

export const SessionExpiredPictureStyle = styled(Image)`
  margin-bottom: 20px;
`;

export const SessionExpiredParagraphStyle = styled(ParagraphStyle)`
  text-align: center;
  margin-top: 10px;
`;
