import styled from 'styled-components';
import { rem } from 'polished';
import { IconColors } from '../../../assets/vars/Colors';

const Link = styled.button`
  font-size: ${rem('16px')};
  border: none;
  padding: 0;
  background: none;
  text-decoration: underline;
`;

export const FacebookLink = styled(Link)`
  color: ${IconColors.Facebook};
`;

export const GoogleLink = styled(Link)`
  color: ${IconColors.Google};
`;
