import styled, { keyframes } from 'styled-components';
import {
  Breakpoints,
  Layouts,
  DefaultPadding,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';
import {
  UnstyledButtonStyle,
  SmallRedButtonStyle,
  SmallGreyButtonStyle,
} from 'Client/ui/Elements/Buttons/style';
import {
  BackgroundColors,
  TextColors,
  BasicColors,
  ShadowColors,
} from 'Client/app/assets/vars/Colors';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import {
  MiddleColumnStyle,
  MiddleColumnToRowStyle,
  CenterColumnStyle,
  MiddleRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { SmallSeparatorStyle } from 'Client/ui/Elements/Separators';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { SvgArrowLeft } from 'Client/ui/Svg/elements';

export const SequenceStyle = styled.section`
  display: flex;
  flex-flow: column;
  flex: 1 1 auto;
  z-index: 0;
  position: relative;
  width: 100%;
  margin-top: 10px;
  padding: 0 20px;
  max-width: ${intToPx(Layouts.SpecialContainerWidth)};
  transition: transform 0.5s ease-in;
  overflow: hidden;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-height: 550px;
    margin-top: 25px;
  }
`;

export const SequenceCollapseArrowStyle = styled(UnstyledButtonStyle)`
  max-width: 85px;
  margin-top: 10px;
  background-color: ${BackgroundColors.ExtraLightGrey};
  border-radius: 50%;
  align-self: center;
  justify-content: center;
  align-items: center;
  color: ${BasicColors.PureWhite};
  padding: 20px;
  z-index: 0;
  font-size: 35px;
  svg {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 110px;
    font-size: 50px;
    padding: ${intToPx(DefaultPadding.Desktop)};
  }
`;

export const SequenceCollapseButtonStyle = styled(SmallRedButtonStyle)`
  margin: 0 auto;
`;

export const SequenceWrapperStyle = styled.div`
  display: flex;
  flex: 1 1 auto;
`;

export const SequenceListStyle = styled.dl`
  display: flex;
  flex: 1 1 auto;
  position: relative;
  width: 100%;
  margin-top: 35px;
  min-height: 400px;
  transition: transform 0.25s ease-in;
  ${props =>
    props.isSequenceCollapsed
      ? 'transform: scale(0.95)'
      : 'transform: scale(1)'};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 25px;
  }
`;

export const CardHeaderStyle = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

export const CardHeaderSpaceBetweenStyle = styled(CardHeaderStyle)`
  justify-content: space-between;
`;

export const CardHeaderFlexEndStyle = styled(CardHeaderStyle)`
  justify-content: flex-end;
`;

export const CardHeaderPreviousButtonStyle = styled(UnstyledButtonStyle)`
  align-items: center;
  font-family: ${MakeFonts.CircularStandardBold};
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const CardHeaderPreviousIconStyle = styled(SvgArrowLeft)`
  display: inline-flex;
  justify-content: flex-start;
  align-content: center;
  margin-right: 5px;
  width: 15px;
  .tofill {
    fill: ${BackgroundColors.ExtraLightGrey};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 30px;
  }
`;

export const SequenceMainTitleStyle = styled(SecondLevelTitleStyle)`
  font-family: ${MakeFonts.CircularStandardBold};
  text-transform: none;
  text-align: center;
`;

export const ExtraLogoStyle = styled.img`
  max-width: 75px;
  margin: 0 auto 15px;
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    max-width: 100%;
  }
`;

export const SequenceTitleWrapperStyle = styled.header`
  width: 100%;
`;

export const SequenceAltMainTitleStyle = styled(SequenceMainTitleStyle)`
  font-size: 18px;
  line-height: 28px;
  margin-bottom: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 28px;
    line-height: 38px;
    margin-bottom: 30px;
  }
`;

export const SequenceSignUpTitleStyle = styled(SequenceMainTitleStyle)`
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 22px;
    line-height: 30px;
    margin-bottom: 20px;
  }
`;

export const SequenceSecondaryTitleStyle = styled.h3`
  font-size: 16px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 22px;
  }
`;

export const SequenceIntroButtonStyle = styled(SmallRedButtonStyle)`
  margin-top: 15px;
  min-width: 125px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    min-width: 150px;
    margin-top: 30px;
  }
`;

export const SequencePushProposalButtonStyle = styled(SmallRedButtonStyle)`
  width: 100%;
  margin: 0 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 10px;
  }
`;

export const SequencePushProposalNextButtonStyle = styled(SmallGreyButtonStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 10px;
  }
`;

export const SequenceNextButtonStyle = styled(SmallRedButtonStyle)`
  width: 100%;
  max-width: 285px;
`;

export const SequenceAltNextButtonStyle = styled(SmallGreyButtonStyle)`
  margin-top: 20px;
`;

export const SequenceFinalLinkStyle = styled(SequenceIntroButtonStyle)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
`;

export const SequencePlaceholderWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
`;

const SequenceFadeInAnimation = keyframes`
  0% { opacity: 0.1; }
  75% { opacity: 0.4; }
  100% { opacity: 0.1; }
`;

export const SequencePlaceholderStyle = styled.div`
  display: block;
  width: 100%;
  background-color: ${BasicColors.PureBlack};
  border-radius: 20px;
  opacity: 0.1;
  animation: ${SequenceFadeInAnimation} 1s infinite;
`;

export const SequencePlaceholderTitleSTyle = styled(SequencePlaceholderStyle)`
  max-width: 800px;
  height: 15px;
  margin: 15px autout;
`;

export const SequencePlaceholderSeparatorStyle = styled(
  SequencePlaceholderStyle
)`
  max-width: 58px;
  height: 2px;
  margin: 20px auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 40px auto;
  }
`;

export const SequencePlaceholderDescriptionStyle = styled(
  SequencePlaceholderStyle
)`
  max-width: 330px;
  height: 8px;
  margin: 10px auto;
`;

export const SequencePlaceholderButtonStyle = styled(SequencePlaceholderStyle)`
  max-width: 150px;
  height: 40px;
  margin: 10px auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 30px auto;
  }
`;

const SequenceEnableVisibility = keyframes`
  0% { visibility: hidden; }
  100% { visibility: visible; }
`;

const SequenceDisableVisibility = keyframes`
  0% { visibility: visible; }
  100% { visibility: hidden; }
`;

export const SequenceProposalCardStyle = styled.dd`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 345px;
  padding: ${intToPx(DefaultPadding.Mobile)};
  z-index: ${props => props.zindex || 0};
  transform: scaleX(${props => props.scaling || 0})
    translateY(-${props => props.position || 0}px);
  background-color: ${BasicColors.PureWhite};
  transition: all 0.75s ease-in;
  box-shadow: 0 0 2px 0 ${ShadowColors.BlackZeroThreeOpacity};
  ${props => (props.isCardCollapsed ? 'transform: translateY(125%);' : '')};
  button,
  a,
  form {
    animation: ${props =>
        props.isCardVisible
          ? SequenceEnableVisibility
          : SequenceDisableVisibility}
      0.75s 1 both;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    padding: ${intToPx(DefaultPadding.Desktop)};
    min-height: 475px;
  }
`;

export const SequencePlaceholderCardStyle = styled(SequenceProposalCardStyle)`
  position: relative;
`;

export const SequenceProposalCardCenteredStyle = styled(
  SequenceProposalCardStyle
)`
  justify-content: center;
`;

export const SequenceProposalStyle = styled.blockquote`
  max-width: 100%;
  font-size: 12px;
  line-height: normal;
  font-family: ${MakeFonts.CircularStandardBold};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 22px;
  }
`;

export const SequenceContentWrapperStyle = styled(MiddleColumnStyle)`
  width: 100%;
  height: 100%;
`;

export const SequenceContentSpecialWrapperStyle = styled(
  SequenceContentWrapperStyle
)`
  height: auto;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    height: 100%;
  }
`;

export const SequenceFinalCardContentWrapperStyle = styled(
  MiddleColumnToRowStyle
)`
  width: 100%;
`;

export const SequenceInnerContentStyle = styled(CenterColumnStyle)`
  width: 100%;
`;

export const SequenceIntroParagraphStyle = styled.p`
  width: 100%;
  font-size: 12px;
  line-height: 18px;
  color: ${TextColors.MediumGrey};
  text-align: center;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    line-height: 28px;
  }
`;

export const SequenceCardSeparatorStyle = styled(SmallSeparatorStyle)`
  margin: 10px 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin: 15px 0 25px;
  }
`;

export const SequenceSharingInnerStyle = styled(CenterColumnStyle)`
  width: 100%;
  border-bottom: 2px solid ${BackgroundColors.ExtraLightGrey};
  padding: 0 0 10px 0;
  margin-bottom: 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    border-bottom: none;
    border-right: 2px solid ${BackgroundColors.ExtraLightGrey};
    padding: 50px 25px 50px 0;
    margin-bottom: 0;
  }
`;

export const SequenceSharingWrapperStyle = styled(MiddleRowStyle)`
  width: 100%;
  margin-top: 10px;
`;

export const SequenceMoreWrapperStyle = styled(CenterColumnStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: 50%;
    padding-left: 25px;
  }
`;

export const SequencePartnerFooterStyle = styled(MiddleColumnToRowStyle)`
  font-size: 12px;
  color: ${TextColors.MediumGrey};
  margin: 15px auto 0;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 14px;
  }
`;

export const SequencePartnerAvatarStyle = styled.img`
  margin: 7.5px;
`;

export const SequencePartnerListStyle = styled(UnstyledListStyle)`
  display: flex;
`;
