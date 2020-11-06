// @flow
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import {
  type QuestionType,
  type QuestionResultsType,
} from 'Shared/types/question';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { ResultsContent } from 'Client/features/consultation/Results';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { ConsultationHeader } from 'Client/features/consultation/Header/index';
import { useMobile } from 'Client/hooks/useMedia';
import { selectCurrentQuestion } from 'Shared/store/selectors/questions.selector';
import { ThemeProvider } from 'styled-components';
import { ExpressService } from 'Shared/services/Express';
import { ConsultationPageWrapperStyle } from './style';
import { NotFoundPage } from '../NotFound';

const ResultPage = () => {
  const question: QuestionType = useSelector((state: StateRoot) =>
    selectCurrentQuestion(state)
  );
  const metas = (
    <MetaTags
      title={i18n.t('meta.results.title', {
        question: question.wording.question,
      })}
      description={i18n.t('meta.results.description')}
      picture={question.wording.metas.picture}
    />
  );
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const [alternativeContent, setAlternativeContent] = useState(
    <>
      {metas}
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    </>
  );
  const [questionResults, setResults] = useState<?QuestionResultsType>(null);

  const initResults = async () => {
    const response = await ExpressService.getResults(question.slug, () =>
      setAlternativeContent(<NotFoundPage />)
    );

    if (response) {
      setResults(response);
    }
  };

  useEffect(() => {
    initResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!questionResults) {
    return alternativeContent;
  }

  return (
    <ThemeProvider theme={question.theme}>
      {metas}
      <ResultsSkipLinks questionResults={questionResults} />
      <ConsultationHeader question={question} />
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ResultsContent question={question} questionResults={questionResults} />
      </ConsultationPageWrapperStyle>
      {isMobile && <FollowUs question={question} />}
    </ThemeProvider>
  );
};

// default export needed for loadable coomponent
// eslint-disable-next-line import/no-default-export
export default ResultPage;
