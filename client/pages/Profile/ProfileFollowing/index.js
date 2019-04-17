/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { FollowingPlaceholder } from 'Client/features/profile/Placeholders/Following';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from '../Styled';

const ProfileFollowing = props => {
  const { user, match } = props;

  if (!user) {
    return <Redirect to={`/${match.params.countryLanguage}`} />;
  }

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('profile.proposals.title')}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      <FollowingPlaceholder />
    </CenterColumnStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileFollowingPage = connect(mapStateToProps)(ProfileFollowing);

// default export needed for loadable component
export default ProfileFollowingPage; // eslint-disable-line import/no-default-export
