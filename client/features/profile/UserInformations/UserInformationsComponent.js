/* @flow */
import React from 'react';
import { Avatar } from 'Client/ui/Avatar';
import { SvgMarker } from 'Client/ui/Svg/elements';
import { GreyButtonStyle } from 'Client/ui/Elements/ButtonElements';
import { i18n } from 'Shared/i18n';
import { CenterRowStyle } from 'Client/ui/Elements/FlexElements';
import {
  UserAvatarStyle,
  UserWrapperStyle,
  UserContentWrapperStyle,
  UserTitleStyle,
  UserContentStyle,
  UserSeparatorStyle,
  UserAvatarLayoutStyle,
} from '../Styled/UserInformations';

export const UserInformationsComponent = () => (
  <UserWrapperStyle>
    <UserAvatarLayoutStyle>
      <UserAvatarStyle>
        <Avatar avatarSize={160} />
      </UserAvatarStyle>
      <UserContentWrapperStyle>
        <UserTitleStyle>User Name</UserTitleStyle>
        <UserContentStyle>
          <SvgMarker />
          Postal Code
        </UserContentStyle>
        <UserContentStyle>Age</UserContentStyle>
        <UserContentStyle>Profession</UserContentStyle>
      </UserContentWrapperStyle>
    </UserAvatarLayoutStyle>
    <UserSeparatorStyle aria-hidden />
    <UserContentStyle>
      User biography. Now that there is the Tec-9, a crappy spray gun from South
      Miami. This gun is advertised as the most popular gun in American crime.
      Do you believe that shit? It actually says that in the little book that
      comes with it: the most popular gun in American crime. Like they are
      actually proud of that shit.
    </UserContentStyle>
    <UserSeparatorStyle aria-hidden />
    <CenterRowStyle>
      <GreyButtonStyle>{i18n.t('common.disconnexion_label')}</GreyButtonStyle>
    </CenterRowStyle>
  </UserWrapperStyle>
);
