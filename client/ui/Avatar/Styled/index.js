import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';

export const AvatarStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 5px;
  overflow: hidden;
  width: ${props => intToPx(props.avatarSize)};
  height: ${props => intToPx(props.avatarSize)};
  svg {
    width: ${props => intToPx(props.avatarSize)};
    height: ${props => intToPx(props.avatarSize)};
  }
`;
