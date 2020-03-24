// @flow
import React, { useEffect, useState } from 'react';
import { i18n } from 'Shared/i18n';
import { type QuestionType } from 'Shared/types/question';
import { getConsultationLink, getSequenceLink } from 'Shared/helpers/url';
import {
  SequenceContentWrapperStyle,
  SequenceInnerContentStyle,
} from 'Client/features/sequence/style';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { useMobile } from 'Client/hooks/useMedia';
import { trackClickStartSequence } from 'Shared/services/Tracking';
// @todo : temp remove after cdc
import cdcData from './config.json';
import {
  MoreQuestionWrapperStyle,
  MoreQuestionImageStyle,
  MoreQuestionTitleStyle,
  MoreQuestionButtonStyle,
  MoreQuestionParagraphStyle,
  FinalQuestionTitleStyle,
  MoreQuestionSeparatorStyle,
} from './Styled';

type Props = {
  question: QuestionType,
};

export const CustomFinalCard = ({ question }: Props) => {
  const isMobile = useMobile();
  const [nextQuestionTitle, setNextQuestionTitle] = useState(undefined);
  const customFinalCard =
    cdcData[question.slug] && cdcData[question.slug].customFinalCard;
  const nextQuestionSlug = customFinalCard && customFinalCard.nextQuestion;

  useEffect(() => {
    const nextQuestionIndex: number = question.operation.questions.findIndex(
      questionItem => {
        return questionItem.questionSlug === nextQuestionSlug;
      }
    );
    const questionTitle: string =
      question.operation.questions[nextQuestionIndex].question;

    setNextQuestionTitle(questionTitle);
  }, []);

  return (
    <SequenceContentWrapperStyle>
      <SequenceInnerContentStyle>
        <FinalQuestionTitleStyle>
          {i18n.t('final_card.extra_question.title')}
        </FinalQuestionTitleStyle>
        <RedLinkRouterStyle
          to={getConsultationLink(
            question.country,
            question.language,
            question.slug
          )}
        >
          {i18n.t('final_card.extra_question.discover')}
        </RedLinkRouterStyle>
        <MoreQuestionSeparatorStyle />
        <MoreQuestionWrapperStyle>
          {!isMobile && (
            <MoreQuestionImageStyle src={customFinalCard.imageUrl} alt="" />
          )}
          <MoreQuestionParagraphStyle>
            {i18n.t('final_card.extra_question.more')}
          </MoreQuestionParagraphStyle>
          {nextQuestionTitle && (
            <MoreQuestionTitleStyle>{nextQuestionTitle}</MoreQuestionTitleStyle>
          )}
          <MoreQuestionButtonStyle
            as="a"
            href={getSequenceLink(
              question.country,
              question.language,
              customFinalCard.nextQuestion,
              { introCard: false }
            )}
            onClick={trackClickStartSequence}
          >
            <IconWrapperStyle aria-hidden>
              <SvgPlayButton />
            </IconWrapperStyle>
            {i18n.t('intro_card.button')}
          </MoreQuestionButtonStyle>
        </MoreQuestionWrapperStyle>
      </SequenceInnerContentStyle>
    </SequenceContentWrapperStyle>
  );
};
