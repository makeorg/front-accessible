// @flow
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { getConsultationLink, getSequenceLink } from 'Shared/helpers/url';
import {
  ContentWrapperStyle,
  InnerContentStyle,
} from 'Client/features/sequence/Card/Styled/Content';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { useMobile } from 'Client/hooks/useMedia';
import {
  MoreQuestionWrapperStyle,
  MoreQuestionTitleStyle,
  MoreQuestionButtonStyle,
} from './Styled';

type Props = {
  question: TypeQuestion,
  configuration: TypeQuestionConfiguration,
};

export const CustomFinalCard = ({ question, configuration }: Props) => {
  const isMobile = useMobile();
  const [nextQuestionTitle, setNextQuestionTitle] = useState(undefined);
  const nextQuestionSlug = configuration.customFinalCard.nextQuestion;

  useEffect(() => {
    const nextQuestionIndex: number = question.operation.questions.findIndex(
      questionItem => {
        return questionItem.questionSlug === nextQuestionSlug;
      }
    );
    const questionTitle: string =
      question.operation.questions[nextQuestionIndex].operationTitle;

    setNextQuestionTitle(questionTitle);
  }, [question]);

  return (
    <ContentWrapperStyle>
      <InnerContentStyle>
        <SecondLevelTitleStyle>
          {i18n.t('final_card.extra_question.title')}
        </SecondLevelTitleStyle>
        <RedLinkStyle
          as={Link}
          to={getConsultationLink(
            question.country,
            question.language,
            question.slug
          )}
        >
          {i18n.t('final_card.extra_question.discover')}
        </RedLinkStyle>
        <MoreQuestionWrapperStyle>
          {!isMobile && (
            <img src={configuration.customFinalCard.imageUrl} alt="" />
          )}
          <ParagraphStyle>
            {i18n.t('final_card.extra_question.more')}
          </ParagraphStyle>
          {nextQuestionTitle && (
            <MoreQuestionTitleStyle>{nextQuestionTitle}</MoreQuestionTitleStyle>
          )}
          <MoreQuestionButtonStyle
            as={Link}
            to={getSequenceLink(
              question.country,
              question.language,
              configuration.customFinalCard.nextQuestion
            )}
          >
            <IconWrapperStyle aria-hidden>
              <SvgPlayButton />
            </IconWrapperStyle>
            {i18n.t('intro_card.button')}
          </MoreQuestionButtonStyle>
        </MoreQuestionWrapperStyle>
      </InnerContentStyle>
    </ContentWrapperStyle>
  );
};
