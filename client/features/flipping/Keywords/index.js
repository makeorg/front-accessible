import React, { useEffect, useState } from 'react';
import { QuestionService } from 'Shared/services/Question';
import { useParams } from 'react-router';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { getSequenceKeywordLink } from 'Shared/helpers/url';
import { trackOpenSequence } from 'Shared/services/Tracking';
import { COMPONENT_PARAM_SEQUENCE_KEYWORD } from 'Shared/constants/tracking';
import { KeywordItemStyle } from './style';

type Props = {
  question: QuestionType,
};

export const Keywords = ({ question }: Props) => {
  const { country } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const KEYWORD_THRESHOLD = 5;

  const getQuestionKeywords = async () => {
    setIsLoading(true);
    const response = await QuestionService.getQuestionKeywords(
      question.questionId,
      KEYWORD_THRESHOLD
    );

    if (response) {
      setKeywords(response.results);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getQuestionKeywords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <ul>
      {keywords.map(keyword => (
        <li>
          <KeywordItemStyle
            to={getSequenceKeywordLink(
              country,
              question.slug,
              encodeURI(keyword.label)
            )}
            onClick={() => trackOpenSequence(COMPONENT_PARAM_SEQUENCE_KEYWORD)}
          >
            {keyword.label}
          </KeywordItemStyle>
        </li>
      ))}
    </ul>
  );
};
