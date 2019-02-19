import styled from 'styled-components';
import { pxToRem } from 'Shared/helpers/styled';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { BasicColors, SocialNetworksColors } from 'Client/app/assets/vars/Colors';

export const SharingStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: ${pxToRem('150px')};
`;

export const SharingButtonStyle = styled(UnstyledButtonStyle)`
  width: ${pxToRem('40px')};
  height: ${pxToRem('40px')};
  font-size: ${pxToRem('18px')};
  color: ${BasicColors.PureWhite};
  border-radius: 50%;
  align-items: center;
  &:hover,&:focus {
    color: ${BasicColors.PureWhite};
  }
`;

export const FacebookButtonStyle = styled(SharingButtonStyle)`
  background-color: ${SocialNetworksColors.Facebook};
`;

export const TwitterButtonStyle = styled(SharingButtonStyle)`
  background-color: ${SocialNetworksColors.Twitter};
`;

export const LinkedInButtonStyle = styled(SharingButtonStyle)`
  background-color: ${SocialNetworksColors.LinkedIn};
`;
