import styled from 'styled-components';
import { BasicColors } from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';

export const AvatarRowsStyle = styled.div`
  display: flex;
  align-items: flex-start;
  height: ${props => intToPx(props.avatarSize)};
  max-height: ${props => intToPx(props.avatarSize)};
`;

export const AvatarStyle = styled.div`
  margin-left: -20px;
  img {
    border: 2px solid ${BasicColors.PureWhite};
  }
  &:nth-child(1) {
    margin-left: 0;
  }
`;
