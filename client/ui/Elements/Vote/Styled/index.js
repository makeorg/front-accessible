import styled from 'styled-components';
import { BasicColors, ShadowColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

export const ButtonStyle = styled.button`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-width: 2px;
  font-size: 22px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  overflow: hidden;
  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transform: translate(50%, 50%);
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 58px;
    height: 58px;
    font-size: 26px;
  }
`;

export const IsVotedButtonStyle = styled(ButtonStyle)`
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;

export const VoteButtonStyle = styled(ButtonStyle)`
  color: ${props => props.color};
  background-color: ${BasicColors.PureWhite};
  svg {
    fill: ${props => props.color};
  }
  &:focus,
  &:active {
    color: ${BasicColors.PureWhite};
    background-color: ${props => props.color};
    svg {
      fill: ${BasicColors.PureWhite};
    }
  }
`;
