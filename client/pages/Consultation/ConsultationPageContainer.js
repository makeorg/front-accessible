// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import { type Location } from 'react-router';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { getActionLink, getConsultationLink } from 'Shared/helpers/url';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { ConsultationPageComponent } from './ConsultationPageComponent';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  questionResults: TypeQuestionResults,
  location: Location,
};

const ConsultationPage = ({
  question,
  questionConfiguration,
  location,
  questionResults,
}: Props) => {
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );
  const actionLink = getActionLink(
    question.country,
    question.language,
    question.slug
  );

  return (
    <ConsultationPageComponent
      question={question}
      questionConfiguration={questionConfiguration}
      questionResults={questionResults}
      consultationLink={consultationLink}
      actionLink={actionLink}
      location={location}
    />
  );
};

export const ConsultationPageContainer = withRouter(
  withDepartmentCheck(ConsultationPage)
);
