import styled from 'styled-components';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/Buttons/style';
import {
  BasicColors,
  SocialNetworksColors,
} from 'Client/app/assets/vars/Colors';

export const SharingStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: 150px;
`;

export const SharingButtonStyle = styled(UnstyledButtonStyle)`
  width: 40px;
  height: 40px;
  font-size: 18px;
  color: ${BasicColors.PureWhite};
  border-radius: 50%;
  align-items: center;
  &:hover,
  &:focus {
    color: ${BasicColors.PureWhite};
  }
  svg {
    fill: ${BasicColors.PureWhite};
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
