import styled from 'styled-components';
import { UnstyledButton } from 'Components/Elements/ButtonElements';
import { BasicColors, SocialNetworksColors } from 'Assets/vars/Colors';
import { pxToRem } from 'Helpers/styled';

export const SharingButton = styled(UnstyledButton)`
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
