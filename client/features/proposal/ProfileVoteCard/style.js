import styled from 'styled-components';
import {
  BasicColors,
  ShadowColors,
  BackgroundColors,
  VoteColors,
} from 'Client/app/assets/vars/Colors';
import {
  DefaultPadding,
  Breakpoints,
} from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const ProfileVoteCardStyle = styled.aside`
  width: 100%;
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BackgroundColors.ExtraLightGrey};
  padding: ${intToPx(DefaultPadding.Mobile)};
`;

export const ProfileVoteWrapperStyle = styled.article`
  margin-bottom: 15px;
  &:last-child: {
    margin-bottom: 0;
  }
`;

export const ProfileVoteTitleStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: ${BasicColors.PureWhite};
  padding: ${intToPx(DefaultPadding.Mobile)};
  width: 100%;
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
`;

export const ProfileHasVotedStyle = styled.div`
  display: inline-flex;
  position: relative;
  min-width: 38px;
  height: 38px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  font-size: 18px;
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;
  overflow: hidden;
  color: ${BasicColors.PureWhite};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  &.agree {
    background-color: ${VoteColors.Agree};
    border-color: ${VoteColors.Agree};
  }
  &.disagree {
    background-color: ${VoteColors.Disagree};
    border-color: ${VoteColors.Disagree};
  }
  &.neutral {
    background-color: ${VoteColors.Neutral};
    border-color: ${VoteColors.Neutral};
  }
  .tofill {
    fill: ${BasicColors.PureWhite};
  }
  @media (min-width: ${intToPx(Breakpoints.LargeMobile)}) {
    min-width: 43px;
    height: 43px;
  }
  @media (min-width: ${intToPx(Breakpoints.LargeDesktop)}) {
    min-width: 48px;
    height: 48px;
  }
`;
