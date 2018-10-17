import styled from 'styled-components';
import { rem } from 'polished';
import { IconColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { IconInButton } from '../../Elements/ButtonElements';

const Link = styled.button`
  font-size: ${rem('16px')};
  border: none;
  padding: 0;
  background: none;
  text-transform: uppercase;
  border-bottom-width: ${rem('1px')};
  border-bottom-style: solid;
`;

export const FacebookLink = styled(Link)`
  color: ${IconColors.Facebook};
  border-bottom-color: ${IconColors.Facebook};
`;

export const GoogleLink = styled(Link)`
  color: ${IconColors.Google};
  border-bottom-color: ${IconColors.Google};
`;

export const SocialIcon = styled(IconInButton)`
  margin-right: ${rem('5px')};
  @media (min-width: ${rem(Breakpoints.mobile)}){
    margin-right: ${rem('5px')};
  }
`;
