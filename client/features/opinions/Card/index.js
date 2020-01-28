import React from 'react';
import { type PersonalityOpinionType } from 'Shared/types/personality';
import {
  TopIdeaCardStyle,
  TopIdeaCardHeaderStyle,
  ProposalsAssociatedStyle,
  TopIdeaCardContentStyle,
  TopIdeaContentStyle,
} from 'Client/features/topIdeas/Card/style';
import { AvatarRows } from 'Client/ui/AvatarRows';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { scrollToTop } from 'Shared/helpers/styled';
import { getTopIdeaDetailsLink, getTopIdeasLink } from 'Shared/helpers/url';
import { ProposalFooterWithQuestionElement } from 'Client/ui/Proposal/FooterElement/ProposalWithQuestion';
import { Commitment } from '../Commitment';

type Props = {
  userId: string,
  opinion: PersonalityOpinionType,
  position?: number,
};

export const OpinionCard = ({ userId, opinion, position = 0 }: Props) => {
  const { question, topIdea } = opinion;
  const hasAvatars = topIdea.avatars && topIdea.avatars.length > 0;

  return (
    <TopIdeaCardStyle>
      <TopIdeaCardHeaderStyle aria-hidden>
        <span>{topIdea.label}</span>
      </TopIdeaCardHeaderStyle>
      <ProposalsAssociatedStyle as="div">
        {hasAvatars && <AvatarRows avatars={topIdea.avatars} />}
        {i18n.t('idea_card.associated_proposals', {
          count: topIdea.proposalsCount,
        })}
      </ProposalsAssociatedStyle>
      <TopIdeaCardContentStyle>
        <ScreenReaderItemStyle>
          {i18n.t('idea_card.content')}
        </ScreenReaderItemStyle>
        <TopIdeaContentStyle
          id={`idea_content_${position}`}
          to={getTopIdeaDetailsLink(
            question.country,
            question.language,
            question.slug,
            topIdea.id
          )}
          onClick={scrollToTop}
        >
          {topIdea.name}
        </TopIdeaContentStyle>
        <Commitment
          userId={userId}
          topIdeaId={topIdea.id}
          comment={opinion.comment}
        />
      </TopIdeaCardContentStyle>
      <ProposalFooterWithQuestionElement
        question={question}
        consultationLink={getTopIdeasLink(
          question.country,
          question.language,
          question.slug
        )}
      />
    </TopIdeaCardStyle>
  );
};
