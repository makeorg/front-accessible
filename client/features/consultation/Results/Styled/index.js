import styled from 'styled-components';
import {
  BackgroundColors,
  ShadowColors,
  BasicColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import { Elements } from 'Client/app/assets/vars/Elements';
import { intToPx } from 'Shared/helpers/styled';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { SvgLightning, SvgThumbsUp } from 'Client/ui/Svg/elements';

export const ResultsSliderStyle = styled.div`
  background-color: ${BackgroundColors.TaintedWhite};
  border-radius: ${intToPx(Elements.BorderRadius)};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const ResultsSliderArrowsStyle = styled(UnstyledButtonStyle)`
  position: absolute;
  top: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-size: 15px;
  transform: translateY(-50%);
  z-index: 2;
  background-color: ${BasicColors.PureBlack};
  svg {
    fill: ${BasicColors.PureWhite};
  }
  &.cartography__arrow--left,
  &.participation__arrow--left {
    left: 0;
    transform: translateX(-50%);
  }
  &.cartography__arrow--right,
  &.participation__arrow--right {
    right: 0;
    transform: translateX(50%);
  }
`;

export const ResultsIconsStyle = {
  width: '16px',
  height: '16px',
  marginRight: '5px',
};

export const ResultsLightningIconStyle = styled(SvgLightning)`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  fill: #ffe360;
`;

export const ResultsThumbIconStyle = styled(SvgThumbsUp)`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  transform: rotate(180deg) scaleX(-1);
  .tofill {
    fill: ${VoteColors.Disagree};
  }
`;

export const ResultsCounterStyle = styled(ParagraphStyle)`
  text-align: center;
  margin-top: 20px;
  font-family: ${MakeFonts.CircularStandardBold};
`;
