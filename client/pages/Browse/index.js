// @flow
import React, { useEffect, useState } from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { QuestionService } from 'Shared/services/Question';
import { Pagination } from 'Client/ui/Elements/Pagination';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { useLocation, useParams } from 'react-router';
import { BrowseConsultationsList } from 'Client/features/consultation/Browse/List';
import { isBrowseConsultationsPage } from 'Shared/routes';
import { BrowseConsultationsHeader } from 'Client/features/consultation/Browse/Header';
import { BrowseConsultationsTitles } from 'Client/features/consultation/Browse/Titles';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import {
  trackDisplayBrowseConsultations,
  trackDisplayBrowseResults,
} from 'Shared/services/Tracking';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import { BROWSE_SECTION } from 'Shared/constants/ids';

const BrowseConsultationsPage = () => {
  const location = useLocation();
  const params = useParams();
  const { country, pageId } = params;
  const consultationsPage = isBrowseConsultationsPage(location.pathname);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<?(HomeQuestionType[])>(null);
  const [questionsTotal, setTotal] = useState<number>(0);
  const currentPageId = parseInt(pageId, 10);

  const CONSULTATIONS_STATUS = consultationsPage ? 'open' : 'finished';
  const SORT_ALGORITHM = consultationsPage ? 'featured' : 'chronological';
  const CONSULTATIONS_LIMIT = 8;
  const CONSULTATIONS_SKIP = CONSULTATIONS_LIMIT * (currentPageId - 1);

  const initConsultationsList = async () => {
    setIsLoading(true);
    const response = await QuestionService.getQuestions(
      country,
      CONSULTATIONS_STATUS,
      SORT_ALGORITHM,
      CONSULTATIONS_LIMIT,
      CONSULTATIONS_SKIP
    );

    if (response) {
      setQuestions(response.results);
      setTotal(response.total);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initConsultationsList();
    if (consultationsPage) {
      trackDisplayBrowseConsultations();
    } else {
      trackDisplayBrowseResults();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CONSULTATIONS_STATUS, SORT_ALGORITHM, params]);

  return (
    <>
      {consultationsPage ? (
        <MetaTags
          title={i18n.t('meta.browse.consultations.title')}
          description={i18n.t('meta.browse.consultations.description')}
        />
      ) : (
        <MetaTags
          title={i18n.t('meta.browse.results.title')}
          description={i18n.t('meta.browse.results.description')}
        />
      )}
      <BrowseConsultationsHeader />
      <SpaceBetweenColumnStyle
        as="section"
        aria-labelledby="browse_title"
        id={BROWSE_SECTION}
      >
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <BrowseConsultationsTitles total={questionsTotal} />
            {questions && (
              <BrowseConsultationsList
                questions={questions}
                resultsContext={!consultationsPage}
                total={questionsTotal}
              />
            )}
            {questionsTotal > CONSULTATIONS_LIMIT && (
              <Pagination
                itemsPerPage={CONSULTATIONS_LIMIT}
                itemsTotal={questionsTotal}
                scrollToId={BROWSE_SECTION}
              />
            )}
          </>
        )}
      </SpaceBetweenColumnStyle>
    </>
  );
};

// default export needed for loadable component
export default BrowseConsultationsPage; // eslint-disable-line import/no-default-export
