// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { ResultsContent } from 'Client/features/consultation/Results';
import { fetchQuestionResults } from 'Shared/store/actions/sequence';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { ConsultationHeader } from 'Client/features/consultation/Header/index';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './style';

type Props = {
  question: QuestionType,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const dispatch = useDispatch();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const questionResults: QuestionResultsType = useSelector(
    state => state.questions[question.slug].questionResults
  );

  useEffect(() => {
    dispatch(fetchQuestionResults(question.slug));
  }, [!questionResults]);

  if (!questionResults) {
    return (
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }

  return (
    <>
      <MetaTags
        title={i18n.t('meta.results.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ResultsSkipLinks questionResults={questionResults} />
      <ConsultationHeader question={question} />
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ResultsContent question={question} questionResults={questionResults} />
      </ConsultationPageWrapperStyle>
      <FollowUs question={question} />
    </>
  );
};

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable coomponent
// eslint-disable-next-line import/no-default-export
export default ConsultationPage;
