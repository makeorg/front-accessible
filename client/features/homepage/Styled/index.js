import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Layouts } from 'Client/app/assets/vars/Breakpoints';

export const HomeWrapperStyle = styled.section`
  display: flex;
  flex-flow: column;
  width: 100%;
  max-width: ${intToPx(Layouts.ContainerWidth)};
  margin-bottom: 41px;
`;
