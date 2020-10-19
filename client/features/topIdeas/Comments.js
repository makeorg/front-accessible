// @flow
import React from 'react';
import { type TopIdeaCommentsType } from 'Shared/types/topIdea';
import { i18n } from 'Shared/i18n';
import { OpinionComment } from 'Client/features/opinions/Comment';
import {
  TopIdeaDetailsPageTitleStyle,
  TopIdeaDetailsIconStyle,
} from 'Client/pages/Consultation/style';

type Props = {
  comments?: TopIdeaCommentsType[],
};

export const TopIdeaDetailsComments = ({ comments }: Props) => {
  const hasComments = comments && comments.length > 0;

  if (!hasComments) {
    return null;
  }

  return (
    <div id="comments_list">
      <TopIdeaDetailsPageTitleStyle>
        <TopIdeaDetailsIconStyle aria-hidden />
        {i18n.t('idea_details.comments')}
      </TopIdeaDetailsPageTitleStyle>
      <section>
        {comments &&
          comments.map(comment => (
            <OpinionComment key={comment.id} comment={comment} />
          ))}
      </section>
    </div>
  );
};
