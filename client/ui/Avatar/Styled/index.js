import styled from 'styled-components';
import { IntToPx } from 'Shared/helpers/styled';

export const AvatarStyle = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: ${props => IntToPx(props.avatarSize)};
  height: ${props => IntToPx(props.avatarSize)};
  img,
  svg {
    width: ${props => IntToPx(props.avatarSize)};
    height: ${props => IntToPx(props.avatarSize)};
  }
`;
