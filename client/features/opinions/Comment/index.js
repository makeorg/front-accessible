import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type TopIdeaCommentsType } from 'Shared/types/topIdea';
import { ProposalCardStyle } from 'Client/ui/Elements/ProposalCardElements';
import { Link } from 'react-router-dom';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';
import { i18n } from 'Shared/i18n';
import { scrollToTop } from 'Shared/helpers/styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import {
  MiddleRowStyle,
  FlexElementStyle,
  ColumnElementStyle,
} from 'Client/ui/Elements/FlexElements';
import { getPersonalityProfileLink } from 'Shared/helpers/url';
import { Avatar } from 'Client/ui/Avatar';
import {
  CandidateLinkStyle,
  PoliticalPartyStyle,
} from 'Client/custom/municipales/CandidateEngagement/style';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { useMobile } from 'Client/hooks/useMedia';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import { TYPE_PERSONALITY } from 'Shared/constants/user';
import { useSelector } from 'react-redux';
import {
  CommitmentPreviewOpinionsParagraphStyle,
  CommitmentPreviewSeparatorStyle,
  CommitmentPreviewOpinionsIconWrapperStyle,
  CommitmentPreviewBoxStyle,
  CommitmentPreviewOpinionsWrapperStyle,
} from '../Commitment/Preview/style';
import { OpinionCommentAuthorStyle } from '../style';

type Props = {
  comment: TopIdeaCommentsType,
};

const handleClickProfile = () => {
  scrollToTop();
  trackClickPublicProfile(TYPE_PERSONALITY);
};

export const OpinionComment = ({ comment }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const isMobile = useMobile();
  const {
    politicalParty,
    displayName,
    personalityId,
    avatarUrl,
  } = comment.personality;

  return (
    <ProposalCardStyle>
      <FlexElementStyle>
        <Link
          to={getPersonalityProfileLink(country, personalityId)}
          onClick={handleClickProfile}
        >
          <Avatar
            avatarUrl={avatarUrl}
            avatarSize={isMobile ? 35 : 50}
            avatarAlt={i18n.t('consultation.partners.profile_link', {
              name: displayName,
            })}
          />
        </Link>
        {isMobile ? (
          <ColumnElementStyle>
            <OpinionCommentAuthorStyle>
              <CandidateLinkStyle
                to={getPersonalityProfileLink(country, personalityId)}
                onClick={handleClickProfile}
              >
                {displayName}
              </CandidateLinkStyle>
              <CertifiedIconStyle aria-hidden focusable="false" />
            </OpinionCommentAuthorStyle>
            <PoliticalPartyStyle>{politicalParty}</PoliticalPartyStyle>
          </ColumnElementStyle>
        ) : (
          <MiddleRowStyle>
            <CandidateLinkStyle
              to={getPersonalityProfileLink(country, personalityId)}
              onClick={handleClickProfile}
            >
              {displayName}
            </CandidateLinkStyle>
            <CertifiedIconStyle aria-hidden focusable="false" />
            {politicalParty && (
              <PoliticalPartyStyle>
                &nbsp;&bull;&nbsp;
                {politicalParty}
              </PoliticalPartyStyle>
            )}
          </MiddleRowStyle>
        )}
      </FlexElementStyle>
      <CommitmentPreviewSeparatorStyle />
      <CommitmentPreviewOpinionsWrapperStyle>
        <CommitmentPreviewOpinionsIconWrapperStyle
          transform={opinionsVoteStaticParams[comment.vote].transform}
          color={opinionsVoteStaticParams[comment.vote].color}
        >
          <SvgThumbsUp aria-hidden focusable="false" />
        </CommitmentPreviewOpinionsIconWrapperStyle>
        <CommitmentPreviewOpinionsParagraphStyle
          color={opinionsVoteStaticParams[comment.vote].color}
          dangerouslySetInnerHTML={{
            __html: comment.qualification
              ? i18n.t(
                  `personality.opinions.preview.${comment.vote}_${comment.qualification}`
                )
              : i18n.t(`personality.opinions.preview.${comment.vote}`),
          }}
        />
      </CommitmentPreviewOpinionsWrapperStyle>
      {comment.comment1 && (
        <CommitmentPreviewBoxStyle>
          {comment.comment1}
        </CommitmentPreviewBoxStyle>
      )}
      {comment.comment2 && (
        <CommitmentPreviewBoxStyle>
          {comment.comment2}
        </CommitmentPreviewBoxStyle>
      )}
      {comment.comment3 && (
        <CommitmentPreviewBoxStyle>
          {comment.comment3}
        </CommitmentPreviewBoxStyle>
      )}
    </ProposalCardStyle>
  );
};
