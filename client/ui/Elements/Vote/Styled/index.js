import styled, { keyframes } from 'styled-components';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ButtonStyle = styled.button`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  min-width: 38px;
  min-height: 38px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  overflow: hidden;
  padding: 0;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    width: 43px;
    height: 43px;
    min-width: 43px;
    min-height: 43px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
  }
`;

export const ButtonIconWrapperStyle = styled.span`
  transform: ${props => props.transform};
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 0;
    transform: translate(-50%, -50%);
    width: 16px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    svg {
      width: 22px;
    }
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    svg {
      width: 25px;
    }
  }
`;

export const IsVotedButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  &.wait {
    cursor: wait;
  }
  .tofill {
    fill: ${BasicColors.PureWhite};
  }
`;

const RotateButton = keyframes`
  0% { transform: rotate(0deg); }
  45% { transform: rotate(-20deg); }
  65% { transform: rotate(20deg); }
  100% { transform: rotate(0deg); }
`;

const InverseRotateButton = keyframes`
  0% { transform: rotate(0deg); }
  45% { transform: rotate(20deg); }
  65% { transform: rotate(-20deg); }
  100% { transform: rotate(0deg); }
`;

export const VoteButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  .tofill {
    fill: ${props => props.color};
  }
  box-shadow: 0 0 0 0 ${props => props.color};
  transform: scale(1);
  transition: box-shadow 0.1s ease-in, transform 0.1s ease-in;
  &:hover,
  &:focus {
    box-shadow: 0 0 8px 0px ${props => props.color};
    transform: scale(1.1);
  }
  &.animated {
    box-shadow: 0 0 0 0 ${props => props.color};
    animation: ${RotateButton} 0.5s 1;
    transform: scale(0.9);
  }
  &.animated.disagree {
    animation: ${InverseRotateButton} 0.5s 1;
  }
  &.wait {
    cursor: wait;
  }
`;
