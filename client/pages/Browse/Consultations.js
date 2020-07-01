// @flow
import React, { useEffect, useState } from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type HomeQuestionType } from 'Shared/types/question';
import { useSelector } from 'react-redux';
import { QuestionService } from 'Shared/services/Question';
import { Pagination } from 'Client/ui/Elements/Pagination';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { useLocation } from 'react-router';
import { getBrowseConsultationsLink } from 'Shared/helpers/url';

const BrowseConsultationsPage = () => {
  const location = useLocation();
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isBrowseConsultationsPath =
    location.pathname === getBrowseConsultationsLink(country, language);
  const CONSULTATIONS_STATUS = isBrowseConsultationsPath ? 'open' : 'finished';
  const CONSULTATIONS_LIMIT = 8;

  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [page, setPage] = useState<number>(0);
  const [questions, setQuestions] = useState<?(HomeQuestionType[])>(null);
  const [questionsTotal, setTotal] = useState<number>(0);

  const initConsultationsList = async () => {
    setIsLoading(true);
    const response = await QuestionService.getQuestions(
      country,
      language,
      CONSULTATIONS_STATUS,
      undefined,
      CONSULTATIONS_LIMIT,
      // CONSULTATIONS_LIMIT * page
      CONSULTATIONS_LIMIT * 0
    );

    if (response) {
      setQuestions(response.results);
      setTotal(response.total);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initConsultationsList();
    /** todo Tracking */
  }, []);

  return (
    <>
      {/** todo Meta */}
      {isBrowseConsultationsPath ? (
        <h2>Consultations Component</h2>
      ) : (
        <h2>Results Component</h2>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ul>
            {questions &&
              questions.map(question => (
                <li key={question.questionId}>{question.question}</li>
              ))}
          </ul>
          {questionsTotal > 0 && <Pagination />}
        </>
      )}
    </>
  );
};

// default export needed for loadable component
export default BrowseConsultationsPage; // eslint-disable-line import/no-default-export
