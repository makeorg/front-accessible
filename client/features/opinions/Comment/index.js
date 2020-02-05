import React from 'react';
import { type TopIdeaCommentsType } from 'Shared/types/topIdea';
import { type Question as TypeQuestion } from 'Shared/types/question';
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
import {
  CommitmentPreviewOpinionsParagraphStyle,
  CommitmentPreviewSeparatorStyle,
  CommitmentPreviewOpinionsIconWrapperStyle,
  CommitmentPreviewBoxStyle,
} from '../Commitment/Preview/style';

type Props = {
  question: TypeQuestion,
  comment: TopIdeaCommentsType,
};

export const OpinionComment = ({ question, comment }: Props) => {
  const isMobile = useMobile();

  return (
    <ProposalCardStyle>
      <FlexElementStyle>
        <Link
          to={getPersonalityProfileLink(
            question.country,
            question.language,
            comment.personality.personalityId
          )}
          onClick={scrollToTop}
        >
          <Avatar
            avatarUrl={comment.personality.avatarUrl}
            avatarSize={isMobile ? 35 : 50}
            avatarAlt={i18n.t('consultation.partners.profile_link', {
              name: comment.personality.displayName,
            })}
          />
        </Link>
        {isMobile ? (
          <ColumnElementStyle>
            <MiddleRowStyle>
              <CandidateLinkStyle
                to={getPersonalityProfileLink(
                  question.country,
                  question.language,
                  comment.personality.personalityId
                )}
                onClick={scrollToTop}
              >
                {comment.personality.displayName}
              </CandidateLinkStyle>
              <SvgCheckedSymbol style={CertifiedIconStyle} />
            </MiddleRowStyle>
            <PoliticalPartyStyle>
              {comment.personality.politicalParty}
            </PoliticalPartyStyle>
          </ColumnElementStyle>
        ) : (
          <MiddleRowStyle>
            <CandidateLinkStyle
              to={getPersonalityProfileLink(
                question.country,
                question.language,
                comment.personality.personalityId
              )}
              onClick={scrollToTop}
            >
              {comment.personality.displayName}
            </CandidateLinkStyle>
            <SvgCheckedSymbol style={CertifiedIconStyle} />
            <PoliticalPartyStyle>
              &nbsp;&bull;&nbsp;
              {comment.personality.politicalParty}
            </PoliticalPartyStyle>
          </MiddleRowStyle>
        )}
      </FlexElementStyle>
      <CommitmentPreviewSeparatorStyle />
      <FlexElementStyle>
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
      </FlexElementStyle>
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
