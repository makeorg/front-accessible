import styled from 'styled-components';
import { pxToRem } from 'Src/helpers/styled';
import { BasicColors, BackgroundColors } from 'Src/assets/vars/Colors';

export const Tooltip = styled.div`
  display: none;
  position: absolute;
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
  z-index: 1;
  background: ${BackgroundColors.LightBlack};
  background-color: ${BackgroundColors.LightBlack};
  color: ${BasicColors.PureWhite};
  font-size: ${pxToRem('12px')};
  > :after {
    content: '';
    position: absolute;
  }
`;

export const VerticalTooptip = styled(Tooltip)`
  transform: translate(-50%,0);
  left: 50%;
  > :after {
    right: 50%;
    border-left: ${pxToRem('5px')} solid transparent;
    border-right: ${pxToRem('5px')} solid transparent;
    transform: translate(50%,0);
  }
`;

export const HorizontalTooltip = styled(Tooltip)`
  transform: translate(0,-50%);
  top: 50%;
  > :after {
    bottom: 50%;
    border-bottom: ${pxToRem('5px')} solid transparent;
    border-top: ${pxToRem('5px')} solid transparent;
    transform: translate(0,50%);
  }
`;

export const TopTooltip = styled(VerticalTooptip)`
  bottom: calc(100% + ${pxToRem('10px')});
  > :after {
    top: 100%;
    border-top: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const BottomTooltip = styled(VerticalTooptip)`
  top: calc(100% + ${pxToRem('10px')});
  > :after {
    bottom: 100%;
    border-bottom: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const LeftTooltip = styled(HorizontalTooltip)`
  right: calc(100% + ${pxToRem('10px')});
  > :after {
    left: 100%;
    border-left: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const RightTooltip = styled(HorizontalTooltip)`
  left: calc(100% + ${pxToRem('10px')});
  > :after {
    right: 100%;
    border-right: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const DisplayedTooltip = styled(Tooltip)`
  display: block;
`;
