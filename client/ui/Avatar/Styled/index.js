import styled from 'styled-components';
import {
  BorderColors,
  BasicColors,
  BackgroundColors,
} from 'Client/app/assets/vars/Colors';
import { intToPx } from 'Shared/helpers/styled';
import { Elements } from 'Client/app/assets/vars/Elements';

export const AvatarStyle = styled.span`
  margin-right: 10px;
  display: inline-flex;
  svg,
  img {
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid ${BorderColors.MediumGrey};
    background-color: ${BasicColors.PureWhite};
    min-width: 30px;
  }
`;

export const PartnerAvatarStyle = styled.span`
  margin: 0;
  display: inline-flex;
  svg,
  img {
    border-radius: ${intToPx(Elements.BorderRadius)};
    overflow: hidden;
    border: 1px solid ${BackgroundColors.MediumGrey};
    background-color: ${BasicColors.PureWhite};
  }
`;
