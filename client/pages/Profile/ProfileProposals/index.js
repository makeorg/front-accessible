// @flow
import React, { useState, useEffect } from 'react';
import { i18n } from 'Shared/i18n';
import * as UserService from 'Shared/services/User';
import { type User as TypeUser } from 'Shared/types/user';
import { type Proposal as TypeProposal } from 'Shared/types/proposal';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { ProfileProposalsPlaceholder } from 'Client/pages/Profile/Placeholders/Proposals';
import { ProfileProposalCard } from 'Client/features/proposal/ProfileProposalCard/ProfileProposalCard';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { MetaTags } from 'Client/app/MetaTags';

type Props = {
  user: TypeUser,
};

const ProfileProposalsPage = (props: Props) => {
  const [proposals, setProposals] = useState<TypeProposal[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { user } = props;
  const proposalsLength = proposals.length;
  const renderProposals = !!proposalsLength && !isLoading;
  const renderPlaceholder = !proposalsLength && !isLoading;

  useEffect(() => {
    const fetchProposals = async () => {
      const loadedProposals: TypeProposal[] = await UserService.myProposals(
        user.userId
      );

      setProposals(loadedProposals);
      setIsLoading(false);
    };

    fetchProposals();
  }, [user]);

  return (
    <React.Fragment>
      <MetaTags title={i18n.t('meta.profile.proposals.title')} />
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
        {renderPlaceholder && <ProfileProposalsPlaceholder />}
      </CenterColumnStyle>
    </React.Fragment>
  );
};

// default export needed for loadable component
export default ProfileProposalsPage; // eslint-disable-line import/no-default-export
