import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { IconColors } from 'Client/app/assets/vars/Colors';
import { SpaceBetweenColumnToRowStyle } from 'Client/ui/Elements/FlexElements';

export const AuthentificationStyle = styled(SpaceBetweenColumnToRowStyle)`
  width: 100%;
  margin-top: ${pxToRem('10px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin-top: ${pxToRem('15px')};
  }
`;

export const AuthentificationLinkStyle = styled.button`
  font-size: ${pxToRem('16px')};
  border: none;
  padding: 0;
  margin: 0 ${pxToRem('5px')};
  background: none;
  text-transform: uppercase;
  border-bottom-width: ${pxToRem('1px')};
  border-bottom-style: solid;
`;

export const FacebookLinkStyle = styled(AuthentificationLinkStyle)`
  color: ${IconColors.Facebook};
  border-bottom-color: ${IconColors.Facebook};
  svg {
    fill: ${IconColors.Facebook};
  }
`;

export const GoogleLinkStyle = styled(AuthentificationLinkStyle)`
  color: ${IconColors.Google};
  border-bottom-color: ${IconColors.Google};
  svg {
    fill: ${IconColors.Google};
  }
`;

export const SocialIconStyle = styled(IconWrapperStyle)`
  margin-right: ${pxToRem('5px')};
  @media (min-width: ${pxToRem(Breakpoints.Tablet)}) {
    margin-right: ${pxToRem('5px')};
  }
`;
