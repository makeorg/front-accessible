import styled from 'styled-components';
import { BorderColors, BasicColors } from 'Client/app/assets/vars/Colors';

export const AvatarStyle = styled.span`
  margin-right: 10px;
  display: inline-flex;
  svg,
  img {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${BorderColors.MediumGrey};
    background-color: ${BasicColors.PureWhite};
  }
`;

export const PartnerAvatarStyle = styled.span`
  margin: 0;
  display: inline-flex;
  svg,
  img {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${BorderColors.MediumGrey};
    background-color: ${BasicColors.PureWhite};
  }
`;
