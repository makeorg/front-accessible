// @flow
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { i18n } from 'Shared/i18n';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getConsultationLink, getSequenceLink } from 'Shared/helpers/url';
import {
  ContentWrapperStyle,
  InnerContentStyle,
} from 'Client/features/sequence/Card/Styled/Content';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { IconWrapperStyle } from 'Client/ui/Elements/ButtonElements';
import { SvgPlayButton } from 'Client/ui/Svg/elements';
import { useMobile } from 'Client/hooks/useMedia';
import { trackClickStartSequence } from 'Shared/services/Tracking';
// @todo : temp remove after cdc
import cdcData from 'Shared/constants/cdc.json';
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
  question: TypeQuestion,
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
      question.operation.questions[nextQuestionIndex].operationTitle;

    setNextQuestionTitle(questionTitle);
  }, []);

  return (
    <ContentWrapperStyle>
      <InnerContentStyle>
        <FinalQuestionTitleStyle>
          {i18n.t('final_card.extra_question.title')}
        </FinalQuestionTitleStyle>
        <RedLinkStyle
          to={getConsultationLink(
            question.country,
            question.language,
            question.slug
          )}
        >
          {i18n.t('final_card.extra_question.discover')}
        </RedLinkStyle>
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
            as={Link}
            to={getSequenceLink(
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
      </InnerContentStyle>
    </ContentWrapperStyle>
  );
};
