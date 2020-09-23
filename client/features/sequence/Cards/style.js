import styled, { keyframes } from 'styled-components';
import { RedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { intToPx } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { MakeFonts } from 'Client/app/assets/vars/Fonts';
import { color } from 'athena-design-tokens';
import { ShadowColors } from 'Client/app/assets/vars/Colors';
import { GreyButtonStyle } from 'Client/ui/Elements/Buttons/style';
import {
  CenterColumnStyle,
  SpaceBetweenRowStyle,
} from 'Client/ui/Elements/FlexElements';

export const SequenceCardStyle = styled.section`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 0 20px;
  background-color: ${color.white};
  border-radius: 8px;
  box-shadow: 0 2px 3px 0 ${ShadowColors.BlackZeroTwoOpacity};
  margin: 20px auto 40px;
  min-height: 315px;
  &.center {
    justify-content: center;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-height: 365px;
    padding: 0 30px;
    margin-top: 30px;
  }
`;

export const SequenceIntroButtonStyle = styled(RedButtonStyle)`
  margin-top: 15px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    margin-top: 30px;
  }
`;

const SequenceTitleStyle = styled.div`
  font-family: ${MakeFonts.CircularStandardBold};
  text-align: center;
`;

export const SequenceMainTitleStyle = styled(SequenceTitleStyle)`
  font-size: 18px;
  margin-bottom: 20px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;

export const SequenceAltTitleStyle = styled(SequenceTitleStyle)`
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.5;
  letter-spacing: 0.12px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

export const SequenceIntroParagraphStyle = styled.div`
  width: 100%;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  &.with-margin-bottom {
    margin-bottom: 15px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 20px;
    &.with-margin-bottom {
      margin-bottom: 30px;
    }
  }
`;

export const SequenceProposalStyle = styled.blockquote`
  font-size: 14px;
  font-family: ${MakeFonts.CircularStandardBook};
  text-align: center;
  line-height: 1.64;
  letter-spacing: 0.11px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.12px;
  }
`;

export const SequenceNextCardButtonStyle = styled(RedButtonStyle)`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);
  white-space: nowrap;
`;

export const SequencePushProposalButtonStyle = styled(RedButtonStyle)`
  width: 100%;
  margin: 0 0 10px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 10px;
  }
`;

export const SequencePushProposalNextButtonStyle = styled(GreyButtonStyle)`
  width: 100%;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    width: auto;
    margin: 0 10px;
  }
`;

export const SequenceSignUpNextButtonStyle = styled(GreyButtonStyle)`
  margin-top: 20px;
`;

export const SequenceFinalMoreWrapperStyle = styled(CenterColumnStyle)`
  flex: 1;
`;

export const SequenceParagraphStyle = styled(CenterColumnStyle)`
  width: 100%;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.12px;
  text-align: center;
  margin-bottom: 20px;
  color: ${color.greyDark};
`;

const SequenceFadeInAnimation = keyframes`
  0% { background-color: ${color.greyLighter}; }
  75% { background-color: ${color.grey}; }
  100% { background-color: ${color.greyLighter}; }
`;

export const SequencePlaceholderLineStyle = styled.div`
  display: flex;
  height: 20px;
  width: 100%;
  animation: ${SequenceFadeInAnimation} 1.5s infinite;
  &.large {
    max-width: 225px;
  }
  &.medium {
    max-width: 155px;
  }
  &.small {
    max-width: 75px;
  }
  &.name {
    margin: 60px auto 20px;
  }
  &.proposal {
    margin-bottom: 7px;
  }
  &.title {
    align-self: flex-start;
    margin-top: 30px;
  }
  &.button {
    max-width: 50px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    &.large,
    &.title {
      max-width: 790px;
    }
    &.medium {
      max-width: 375px;
    }
  }
`;

export const SequencePlaceholderRoundStyle = styled.div`
  display: flex;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  animation: ${SequenceFadeInAnimation} 1.5s infinite;
  &.avatar {
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    border: 3px solid ${color.white};
  }
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    height: 56px;
    width: 56px;
  }
`;

export const SequencePlaceholderVoteWrapperStyle = styled(SpaceBetweenRowStyle)`
  margin-top: 30px;
  width: 100%;
  max-width: 175px;
  @media (min-width: ${intToPx(Breakpoints.Tablet)}) {
    max-width: 190px;
  }
`;