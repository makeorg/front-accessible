import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BorderColors } from 'Client/app/assets/vars/Colors';

export const AvatarStyle = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg,
  img {
    border-radius: 50%;
    margin-right: 5px;
    overflow: hidden;
    width: ${props => intToPx(props.avatarSize)};
    height: ${props => intToPx(props.avatarSize)};
  }
  img {
    border: 1px solid ${BorderColors.MediumGrey};
  }
`;
