import styled from 'styled-components';
import { SpaceBetweenColumn } from './FlexElements';
import { Backgrounds } from '../../assets/vars/Colors';

export const AppWrapper = styled(SpaceBetweenColumn)`
  min-height: 100vh;
  background: ${Backgrounds.LightGrey};
  background-color: ${Backgrounds.LightGrey};
`;

export const MainContent = styled.main`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
