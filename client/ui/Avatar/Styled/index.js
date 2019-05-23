import styled from 'styled-components';
import { intToPx } from 'Shared/helpers/styled';
import { BorderColors, BasicColors } from 'Client/app/assets/vars/Colors';

export const AvatarStyle = styled.span`
  display: inline-flex;
  svg,
  img {
    border-radius: 50%;
    overflow: hidden;
    width: ${props => intToPx(props.avatarSize)};
    height: ${props => intToPx(props.avatarSize)};
    background-color: ${BasicColors.PureWhite};
  }
  img {
    border: 1px solid ${BorderColors.MediumGrey};
  }
`;
