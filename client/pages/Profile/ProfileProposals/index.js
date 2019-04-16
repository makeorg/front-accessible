/* @flow */
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { i18n } from 'Shared/i18n';
import { ProposalsPlaceholder } from 'Client/features/profile/Placeholders/Proposals';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from '../Styled';

const ProfileProposals = props => {
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
      <ProposalsPlaceholder />
    </CenterColumnStyle>
  );
};

const mapStateToProps = state => {
  const { user } = selectAuthentification(state);
  return { user };
};

export const ProfileProposalsPage = connect(mapStateToProps)(ProfileProposals);

// default export needed for loadable component
export default ProfileProposalsPage; // eslint-disable-line import/no-default-export
