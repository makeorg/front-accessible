import styled from 'styled-components';
import {
  BorderColors,
  BasicColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';
import { Image } from 'Client/ui/Image';

export const AvatarStyle = styled.span`
  position: ${props => (props.isSequence ? 'absolute' : 'static')};
  top: ${props => (props.isSequence ? '-6px' : '')};
  left: ${props => (props.isSequence ? '50%' : '')};
  border: ${props =>
    props.isSequence ? `3px solid ${BasicColors.PureWhite}` : ''};
  border-radius: ${props => (props.isSequence ? '50%' : '')};
  margin-right: ${props => (props.isSequence ? '' : '10px')};
  transform: ${props => (props.isSequence ? 'translateX(-50%)' : '')};
  display: inline-flex;
`;

export const AvatarImageStyle = styled(Image)`
  box-sizing: content-box;
  min-width: ${props => intToPx(props.avatarSize)};
  width: ${props => intToPx(props.avatarSize)};
  height: ${props => intToPx(props.avatarSize)};
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${BorderColors.MediumGrey};
  background-color: ${BasicColors.PureWhite};
`;

export const PartnerAvatarStyle = styled.span`
  margin: 0;
  display: block;
  svg,
  img {
    border-radius: ${intToPx(Elements.BorderRadius)};
    overflow: hidden;
    border: 1px solid ${BackgroundColors.MediumGrey};
    background-color: ${BasicColors.PureWhite};
  }
`;

export const AvatarWithDotsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${props => intToPx(props.avatarSize)};
  width: ${props => intToPx(props.avatarSize)};
  height: ${props => intToPx(props.avatarSize)};
  border-radius: 50%;
  border: 2px solid ${BasicColors.PureWhite};
  overflow: hidden;
  background-color: rgb(127, 127, 127);
  box-sizing: content-box;
`;

export const DotsStyle = styled.span`
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background-color: ${BasicColors.PureWhite};
  margin-left: 2px;
  &:nth-child(1) {
    margin-left: 0;
  }
`;
