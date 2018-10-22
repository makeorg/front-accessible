import styled from 'styled-components';
import { pxToRem } from '../../../helpers/styled';
import { IconColors } from '../../../assets/vars/Colors';
import Breakpoints from '../../../assets/vars/Breakpoints';
import { IconInButton } from '../../Elements/ButtonElements';

const Link = styled.button`
  font-size: ${pxToRem('16px')};
  border: none;
  padding: 0;
  background: none;
  text-transform: uppercase;
  border-bottom-width: ${pxToRem('1px')};
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
  margin-right: ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.mobile)}){
    margin-right: ${pxToRem('5px')};
  }
`;
