import styled, { keyframes } from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

const PendingAnimation = keyframes`
0%, 50% {
  transform: initial;
}
20% {
  transform: translateY(-5px);
}
`;

export const LoadingWrapperStyle = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-self: center;
  max-width: 100px;
  margin: 0 auto;
`;

export const DotStyle = styled.span`
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  animation-name: ${PendingAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  padding: 0 2px;
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 22px;
  }
`;
