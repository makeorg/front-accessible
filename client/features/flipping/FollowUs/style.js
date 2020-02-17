import styled from 'styled-components';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import { UnstyledButtonStyle } from 'Client/ui/Elements/ButtonElements';
import {
  BasicColors,
  SocialNetworksColors,
} from 'Client/app/assets/vars/Colors';

export const FollowUsStyle = styled(SpaceBetweenRowStyle)`
  width: 100%;
  max-width: 200px;
  margin: 15px 0;
`;

export const FollowUsListItemStyle = styled.li`
  margin: 0 5px;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`;

export const FollowUsButtonStyle = styled(UnstyledButtonStyle)`
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

export const FollowUsIconsStyle = {
  width: '20px',
  height: '22px',
  marginRight: '13px',
};

export const FacebookButtonStyle = styled(FollowUsButtonStyle)`
  background-color: ${SocialNetworksColors.Facebook};
`;

export const TwitterButtonStyle = styled(FollowUsButtonStyle)`
  background-color: ${SocialNetworksColors.Twitter};
`;

export const InstagramButtonStyle = styled(FollowUsButtonStyle)`
  background-color: ${SocialNetworksColors.Instagram};
`;

export const LinkedInButtonStyle = styled(FollowUsButtonStyle)`
  background-color: ${SocialNetworksColors.LinkedIn};
`;
