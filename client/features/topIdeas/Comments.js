// @flow
import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { type TopIdeaCommentsType } from 'Shared/types/topIdea';
import { i18n } from 'Shared/i18n';
import { OpinionComment } from 'Client/features/opinions/Comment';
import {
  TopIdeaDetailsPageTitleStyle,
  TopIdeaDetailsIconStyle,
} from 'Client/pages/Consultation/style';

type Props = {
  comments?: TopIdeaCommentsType[],
  question: QuestionType,
};

export const TopIdeaDetailsComments = ({ comments, question }: Props) => {
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
            <OpinionComment
              key={comment.id}
              question={question}
              comment={comment}
            />
          ))}
      </section>
    </div>
  );
};
