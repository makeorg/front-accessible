import React from 'react';
import { type TopIdeaCommentsType } from 'Shared/types/topIdea';
import { type QuestionType } from 'Shared/types/question';
import { ProposalCardStyle } from 'Client/ui/Elements/ProposalCardElements';
import { Link } from 'react-router-dom';
import { opinionsVoteStaticParams } from 'Shared/constants/opinions';
import { i18n } from 'Shared/i18n';
import { scrollToTop } from 'Shared/helpers/styled';
import { SvgThumbsUp, SvgCheckedSymbol } from 'Client/ui/Svg/elements';
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
import {
  CommitmentPreviewOpinionsParagraphStyle,
  CommitmentPreviewSeparatorStyle,
  CommitmentPreviewOpinionsIconWrapperStyle,
  CommitmentPreviewBoxStyle,
  CommitmentPreviewOpinionsWrapperStyle,
} from '../Commitment/Preview/style';
import { OpinionCommentAuthorStyle } from '../style';

type Props = {
  question: QuestionType,
  comment: TopIdeaCommentsType,
};

const handleClickProfile = () => {
  scrollToTop();
  trackClickPublicProfile(TYPE_PERSONALITY);
};

export const OpinionComment = ({ question, comment }: Props) => {
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
          to={getPersonalityProfileLink(
            question.country,
            question.language,
            personalityId
          )}
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
                to={getPersonalityProfileLink(
                  question.country,
                  question.language,
                  personalityId
                )}
                onClick={handleClickProfile}
              >
                {displayName}
              </CandidateLinkStyle>
              <SvgCheckedSymbol style={CertifiedIconStyle} />
            </OpinionCommentAuthorStyle>
            <PoliticalPartyStyle>{politicalParty}</PoliticalPartyStyle>
          </ColumnElementStyle>
        ) : (
          <MiddleRowStyle>
            <CandidateLinkStyle
              to={getPersonalityProfileLink(
                question.country,
                question.language,
                personalityId
              )}
              onClick={handleClickProfile}
            >
              {displayName}
            </CandidateLinkStyle>
            <SvgCheckedSymbol style={CertifiedIconStyle} />
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
          <SvgThumbsUp aria-hidden />
        </CommitmentPreviewOpinionsIconWrapperStyle>
        <CommitmentPreviewOpinionsParagraphStyle
          color={opinionsVoteStaticParams[comment.vote].color}
          dangerouslySetInnerHTML={{
            __html: comment.qualification
              ? i18n.t(
                  `personality.opinions.preview.${comment.vote}_${
                    comment.qualification
                  }`
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
