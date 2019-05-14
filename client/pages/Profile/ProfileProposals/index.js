/* @flow */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { selectAuthentification } from 'Shared/store/selectors/user.selector';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProposalsPlaceholder } from 'Client/features/profile/Placeholders/Proposals';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard/ProfileProposalCard';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { FRONT_LEGACY_ROOT } from 'Shared/constants/url';

type Props = {
  user: TypeUser,
};

const ProfileProposals = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = props;
  const proposalsLength = proposals.length;
  const renderProposals = proposalsLength && !isLoading;
  const renderPlaceholder = !proposalsLength && !isLoading;

  const fetchProposals = async () => {
    const loadedProposals: TypeProposal[] = await UserService.myProposals(
      user.userId
    );

    setProposals(loadedProposals);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!user) {
      window.location = FRONT_LEGACY_ROOT;
    }

    fetchProposals();
  }, []);

  if (!user) {
    return (
      <CenterColumnStyle>
        <Spinner />
      </CenterColumnStyle>
    );
  }

  return (
    <CenterColumnStyle>
      <ProfileContentHeaderStyle>
        <SecondLevelTitleStyle>
          {i18n.t('profile.proposals.title')}
        </SecondLevelTitleStyle>
        <ProfileTitleSeparatorStyle />
      </ProfileContentHeaderStyle>
      {isLoading && <Spinner />}
      {renderProposals &&
        proposals.map((proposal, index) => (
          <ProfileProposalCard
            key={proposal.id}
            proposal={proposal}
            size={proposalsLength}
            position={index}
            withStatus
          />
        ))}
      {renderPlaceholder && <ProposalsPlaceholder />}
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
