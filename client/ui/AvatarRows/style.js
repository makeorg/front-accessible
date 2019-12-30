import styled from 'styled-components';
import { BasicColors } from 'Client/app/assets/vars/Colors';

export const AvatarRowsStyle = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const AvatarStyle = styled.div`
  margin-left: -17px;

  svg {
    border: 2px solid ${BasicColors.PureWhite};
  }

  &:nth-child(1) {
    margin-left: 0;
  }
`;
