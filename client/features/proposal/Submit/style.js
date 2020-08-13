import styled from 'styled-components';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { SvgPencil, SvgExternalLinkPlain } from 'Client/ui/Svg/elements';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import TextareaAutosize from 'react-autosize-textarea/lib';
import { BackgroundColors, TextColors } from 'Client/app/assets/vars/Colors';
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

/** Form */

export const ProposalFormWrapperStyle = styled(SpaceBetweenColumnStyle)`
  ${ContainerWithPadding};
  height: 100%;
  padding-top: 20px;
  padding-bottom: 25px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    padding-top: 35px;
    padding-bottom: 50px;
  }
`;

export const ProposalFormTitleStyle = styled.h2`
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 17px;
  line-height: 25px;
  text-transform: none;
  margin-bottom: 25px;
  @media (min-width: ${intToPx(Breakpoints.Desktop)}) {
    font-size: 26px;
    line-height: 36px;
    margin-bottom: 35px;
  }
`;

export const ProposalFieldWrapperStyle = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 20px;
`;

export const ProposalTextareaStyle = styled(TextareaAutosize)`
  width: 100%;
  font-size: 16px;
  line-height: 22px;
  padding: 20px 17px 30px;
  border: none;
  resize: none;
  max-height: 141px;
  background-color: ${BackgroundColors.TaintedWhite};
`;

export const ProposalCharCountStyle = styled.span`
  position: absolute;
  bottom: 10px;
  right: 20px;
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.BlackWithOpacity};
`;

export const ProposalExternalLinkStyle = styled.a`
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  font-size: 14px;
  line-height: 21px;
`;

export const ProposalExternalLinkIconStyle = styled(SvgExternalLinkPlain)`
  width: 10px;
  height: 10px;
  margin-left: 5px;
`;
