import styled from 'styled-components';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';

export const AuthenticationWrapperStyle = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 470px;
`;

export const AuthenticationTitleStyle = styled(SecondLevelTitleStyle)`
  padding: 0 25px;
`;
