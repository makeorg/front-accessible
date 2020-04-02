import styled from 'styled-components';
import { SeparatorStyle } from 'Client/ui/Elements/Separators';
import { BackgroundColors, BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { FlexElementStyle } from 'Client/ui/Elements/FlexElements';
import {
  UnstyledButtonStyle,
  BasicButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';

export const CommitmentPreviewSeparatorStyle = styled(SeparatorStyle)`
  margin: 10px 0 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 20px 0 30px;
  }
`;

export const CommitmentPreviewOpinionsWrapperStyle = styled(FlexElementStyle)`
  align-items: center;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-bottom: 25px;
  }
`;

export const CommitmentPreviewOpinionsIconWrapperStyle = styled.div`
  margin-right: 7.5px;
  svg {
    transform: ${props => props.transform};
  }
  svg .tofill {
    fill: ${props => props.color};
  }
`;

export const CommitmentPreviewOpinionsParagraphStyle = styled(ParagraphStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  color: ${BasicColors.PureBlack};
  span {
    color: ${props => props.color};
  }
`;

export const CommitmentPreviewBoxStyle = styled(ParagraphStyle)`
  width: 100%;
  background-color: ${BackgroundColors.TaintedWhite};
  color: ${BasicColors.PureBlack};
  padding: 20px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CommitmentPreviewDislaimerStyle = styled.div`
  width: 100%;
  background-color: ${BackgroundColors.Notifications};
  color: ${BasicColors.PureWhite};
  padding: 20px;
  border-radius: ${intToPx(Elements.BorderRadius)};
  margin-top: 15px;
`;

export const CommitmentPreviewParagraphStyle = styled(ParagraphStyle)`
  color: ${BasicColors.PureWhite};
`;

export const CommitmentPreviewButtonsWrapperStyle = styled(FlexElementStyle)`
  margin-top: 20px;
  justify-content: flex-end;
`;

export const CommitmentPreviewCancelStyle = styled(UnstyledButtonStyle)`
  font-size: 12px;
  line-height: 18px;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: underline;
  margin-right: 30px;
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    font-size: 14px;
    line-height: 21px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const CommitmentPreviewConfirmStyle = styled(BasicButtonStyle)`
  background-color: ${BasicColors.PureWhite};
  color: ${BasicColors.PureBlack};
`;
