import styled from 'styled-components';
import { VoteColors, BackgroundColors } from 'Client/app/assets/vars/Colors';
import { SvgLightning, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { LinkAsRedButton } from 'Client/ui/Elements/LinkElements';
import { SpaceBetweenColumnToRowStyle } from 'Client/ui/Elements/FlexElements';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';

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

export const ResultsDownloadItemStyle = styled(SpaceBetweenColumnToRowStyle)`
  width: 100%;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${BackgroundColors.ExtraLightGrey};
  &:last-child {
    padding-bottom: 0;
    margin-bottom: 0;
    border-bottom: none;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    align-content: center;
    font-size: 16px;
    line-height: 24px;
  }
`;

export const ResultsDownloadButtonStyle = styled(LinkAsRedButton)`
  margin-top: 10px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 0;
    margin-left: 15px;
  }
`;
