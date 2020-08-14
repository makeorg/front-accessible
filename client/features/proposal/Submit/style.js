import styled from 'styled-components';
import {
  RedButtonStyle,
  GreyNoBackgroundButtonStyle,
  RedNoBackgroundButtonStyle,
} from 'Client/ui/Elements/Buttons/V2/style';
import {
  SvgPencil,
  SvgExternalLinkPlain,
  SvgArrowLeft,
} from 'Client/ui/Svg/elements';
import {
  SpaceBetweenColumnStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import TextareaAutosize from 'react-autosize-textarea/lib';
import {
  BackgroundColors,
  TextColors,
  BorderColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ContainerWithPadding } from 'Client/app/Styled/MainElements';

export const PanelTriggerStyle = styled(RedButtonStyle)`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 20;
`;

export const PanelTriggerIconStyle = styled(SvgPencil)`
  width: 14px;
  height: 14px;
  margin-right: 7px;
`;

export const ProposalStepWrapperStyle = styled(SpaceBetweenColumnStyle)`
  ${ContainerWithPadding};
  height: 100%;
  padding-top: 20px;
  padding-bottom: 25px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding-top: 35px;
    padding-bottom: 50px;
  }
`;

export const ProposalStepTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 17px;
  line-height: 1.5;
  text-transform: none;
  &.center {
    text-align: center;
  }
  &.with-margin-bottom {
    margin-bottom: 25px;
  }
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 26px;
    &.with-margin-bottom {
      margin-bottom: 35px;
    }
  }
`;

/** Form */
export const ProposalFieldWrapperStyle = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 20px;
`;

export const ProposalTextareaStyle = styled(TextareaAutosize)`
  width: 100%;
  font-size: 16px;
  line-height: 1.5;
  padding: 20px 17px 30px;
  border: none;
  resize: none;
  max-height: 141px;
  background-color: ${BackgroundColors.TaintedWhite};
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 20px;
  }
`;

export const ProposalCharCountStyle = styled.span`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 12px;
  line-height: 1.5;
  color: ${TextColors.BlackWithOpacity};
`;

export const ProposalExternalLinkStyle = styled.a`
  display: inline-flex;
  align-items: baseline;
  align-self: flex-start;
  font-size: 14px;
  line-height: 1.5;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const ProposalExternalLinkIconStyle = styled(SvgExternalLinkPlain)`
  width: 10px;
  height: 10px;
  margin-left: 5px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    width: 12px;
    height: 12px;
  }
`;

/** Authentition */
export const ProposalBackButtonStyle = styled(GreyNoBackgroundButtonStyle)`
  text-decoration: none;
  align-self: center;
`;

export const ProposalBackIconWrapperStyle = styled.span`
  display: inline-flex;
  padding: 3px 15px;
  border-radius: 17.5px;
  background-color: ${BackgroundColors.TaintedWhite};
  margin-right: 15px;
`;

export const ProposalBackIconStyle = styled(SvgArrowLeft)`
  width: 12px;
  height: 13px;
`;

export const ProposalAuthWrapperStyle = styled(ColumnElementStyle)`
  margin-top: 60px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    margin-top: 75px;
  }
`;

export const ProposalAuthSubtitleStyle = styled.p`
  font-size: 15px;
  line-height: 1.5;
  color: ${TextColors.AltMediumgrey};
  text-align: center;
  margin-top: 20px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 20px;
  }
`;

export const ProposalAuthDisclaimerStyle = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: ${TextColors.BlackWithOpacity};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 16px;
  }
`;

export const ProposalAuthSeparatorStyle = styled.hr`
  width: 100%;
  max-width: 80px;
  border: 1px solid ${BorderColors.LightGrey};
  margin: 25px auto;
`;

export const ProposalAuthLogintyle = styled(RedNoBackgroundButtonStyle)`
  align-self: center;
`;

export const ProposalAuthCanceltyle = styled(GreyNoBackgroundButtonStyle)`
  align-self: center;
`;
