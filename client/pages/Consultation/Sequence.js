// @flow
import React, { useEffect } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { Sequence } from 'Client/features/sequence/index';
import { SequencePlaceholder } from 'Client/features/sequence/Placeholder';
import { displayNotificationBanner } from 'Shared/store/actions/notifications';
import {
  NOTIFICATION_LEVEL_INFORMATION,
  VOTE_ONLY_MESSAGE,
} from 'Shared/constants/notifications';

export type Props = {
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
};

const SequencePage = ({ zone }: Props) => {
  const dispatch = useDispatch();
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const { encodedKeyword } = useParams();
  const keyword = encodedKeyword && decodeURI(encodedKeyword);
  console.log(keyword);
  useEffect(() => {
    trackDisplaySequence();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!question.canPropose) {
      dispatch(
        displayNotificationBanner(
          VOTE_ONLY_MESSAGE,
          NOTIFICATION_LEVEL_INFORMATION,
          { questionId: question.questionId },
          true
        )
      );
    }
  }, [question, dispatch]);

  if (!question) {
    return <SequencePlaceholder />;
  }

  return (
    <>
      <MetaTags
        title={i18n.t('meta.sequence.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <Sequence question={question} zone={zone} keyword={keyword} />
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default SequencePage;
