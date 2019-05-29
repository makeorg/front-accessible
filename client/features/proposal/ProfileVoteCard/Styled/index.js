import styled from 'styled-components';
import {
  BasicColors,
  ShadowColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { DefaultPadding } from 'Client/app/assets/vars/Breakpoints';
import { intToPx } from 'Shared/helpers/styled';

export const ProfileVoteCardStyle = styled.aside`
  width: 100%;
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  background-color: ${BackgroundColors.ExtraLightGrey};
  padding: ${intToPx(DefaultPadding.Mobile)};
`;

export const ProfileVoteWrapperStyle = styled.li`
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

export const ProfileVoteDescriptionStyle = styled.div``;
export const ProfileHasVotedStyle = styled.div`
  display: inline-flex;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin-right: 5px;
  border-radius: 50%;
  border-width: 2px;
  font-size: 12px;
  border-style: solid;
  border-radius: 50%;
  border-color: ${props => props.color};
  overflow: hidden;
  color: ${BasicColors.PureWhite};
  background-color: ${props => props.color};
  box-shadow: 0 1px 1px 0 ${ShadowColors.BlackZeroFiveOpacity};
  svg {
    fill: ${BasicColors.PureWhite};
  }
`;
