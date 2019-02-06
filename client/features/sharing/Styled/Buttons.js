import styled from 'styled-components';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { BasicColors, SocialNetworksColors } from 'Client/app/assets/vars/Colors';
import { pxToRem } from 'Shared/helpers/styled';

export const SharingButton = styled(UnstyledButtonStyle)`
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

export const Facebook = styled(SharingButton)`
  background: ${SocialNetworksColors.Facebook};
  background-color: ${SocialNetworksColors.Facebook};
`;

export const Twitter = styled(SharingButton)`
  background: ${SocialNetworksColors.Twitter};
  background-color: ${SocialNetworksColors.Twitter};
`;

export const LinkedIn = styled(SharingButton)`
  background: ${SocialNetworksColors.LinkedIn};
  background-color: ${SocialNetworksColors.LinkedIn};
`;
