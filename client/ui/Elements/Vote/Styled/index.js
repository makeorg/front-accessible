import styled from 'styled-components';
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
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  overflow: hidden;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    width: 43px;
    height: 43px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    width: 48px;
    height: 48px;
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
  path.tofill {
    fill: ${BasicColors.PureWhite};
  }
`;

export const VoteButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  path.tofill {
    fill: ${props => props.color};
  }
  &:focus,
  &:active {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
    path.tofill {
      fill: ${BasicColors.PureWhite};
    }
  }
`;
