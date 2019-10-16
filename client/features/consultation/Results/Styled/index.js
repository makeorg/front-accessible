import styled from 'styled-components';
import { VoteColors } from 'Client/app/assets/vars/Colors';
import { SvgLightning, SvgThumbsUp } from 'Client/ui/Svg/elements';

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
