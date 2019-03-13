import styled, { keyframes } from 'styled-components';

const PendingAnimation = keyframes`
0%, 50% {
  transform: initial;
}
20% {
  transform: translateY(-5px);
}
`;

export const PendingStyle = styled.span`
  animation-delay: ${props => props.delay}s;
  animation-duration: ${props => props.duration}s;
  animation-name: ${PendingAnimation};
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  padding: 0 2px;
`;
