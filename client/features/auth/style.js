import styled from 'styled-components';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const AuthentificationWrapperStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 470px;
`;

export const AuthentificationTitleStyle = styled(SecondLevelTitleStyle)`
  padding: 0 25px;
`;
