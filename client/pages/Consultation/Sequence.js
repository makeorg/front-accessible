// @flow
import React, { useEffect, useState } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { sequenceStart } from 'Shared/store/actions/sequence';
import { trackDisplaySequence } from 'Shared/services/Tracking';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { ProgressBar } from 'Client/features/sequence/ProgressSection/ProgressBar';
import { ProposalSubmit } from 'Client/features/proposal/Submit';
import { SpaceBetweenRowStyle } from 'Client/ui/Elements/FlexElements';
import {
  PreviousButtonWrapperStyle,
  PreviousButton,
} from 'Client/features/sequence/ProgressSection/style';
import { Sequence } from 'Client/features/sequence/index';
import { SequencePageContentStyle } from './style';

const SequencePage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const dispatch = useDispatch();
  const { currentIndex } = useSelector(state => state.sequence);
  const isPushProposal = currentIndex === 7;
  const [isClosed, closeSequence] = useState(false);

  const handleOpenSequence = () => {
    closeSequence(false);
  };

  useEffect(() => {
    trackDisplaySequence();
    dispatch(sequenceStart(question.slug));
  }, [dispatch, question.slug]);

  if (!question) {
    return (
      <MiddlePageWrapperStyle aria-busy>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
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
      {question.question}
      <SequencePageContentStyle>
        <Sequence
          question={question}
          isClosed={isClosed}
          handleOpenSequence={handleOpenSequence}
        />
        <SpaceBetweenRowStyle>
          <>
            <PreviousButtonWrapperStyle>
              <PreviousButton />
            </PreviousButtonWrapperStyle>
            {/* @todo: add dynamic progress display for number gauge */}
            1/15
            <ProgressBar />
          </>
        </SpaceBetweenRowStyle>
      </SequencePageContentStyle>
      {!isPushProposal && <ProposalSubmit />}
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default SequencePage;
