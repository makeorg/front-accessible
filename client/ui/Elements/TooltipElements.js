import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { BasicColors, BackgroundColors } from 'Client/app/assets/vars/Colors';

export const TooltipStyle = styled.div`
  display: block;
  position: absolute;
  padding: ${pxToRem('5px')} ${pxToRem('10px')};
  z-index: ${props => props.zIndex};
  background-color: ${BackgroundColors.LightBlack};
  color: ${BasicColors.PureWhite};
  font-size: ${pxToRem('12px')};
  text-align: center;
  > :after {
    content: '';
    position: absolute;
  }
`;

export const VerticalTooptipStyle = styled(TooltipStyle)`
  transform: translate(-50%, 0);
  left: 50%;
  > :after {
    right: 50%;
    border-left: ${pxToRem('5px')} solid transparent;
    border-right: ${pxToRem('5px')} solid transparent;
    transform: translate(50%, 0);
  }
`;

export const HorizontalTooltipStyle = styled(TooltipStyle)`
  transform: translate(0, -50%);
  top: 50%;
  > :after {
    bottom: 50%;
    border-bottom: ${pxToRem('5px')} solid transparent;
    border-top: ${pxToRem('5px')} solid transparent;
    transform: translate(0, 50%);
  }
`;

export const TopTooltipStyle = styled(VerticalTooptipStyle)`
  bottom: calc(100% + ${pxToRem('10px')});
  > :after {
    top: 100%;
    border-top: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const BottomTooltipStyle = styled(VerticalTooptipStyle)`
  top: calc(100% + ${pxToRem('10px')});
  > :after {
    bottom: 100%;
    border-bottom: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const LeftTooltipStyle = styled(HorizontalTooltipStyle)`
  right: calc(100% + ${pxToRem('10px')});
  > :after {
    left: 100%;
    border-left: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;

export const RightTooltipStyle = styled(HorizontalTooltipStyle)`
  left: calc(100% + ${pxToRem('10px')});
  > :after {
    right: 100%;
    border-right: ${pxToRem('5px')} solid ${BackgroundColors.LightBlack};
  }
`;
