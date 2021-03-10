import React from 'react';
import { i18n } from 'Shared/i18n';
import { useSelector } from 'react-redux';
import { LinkAsRedButtonStyle } from 'Client/ui/Elements/Buttons/V2/style';
import { Sharing } from 'Client/features/sharing';
import { matchDesktopDevice } from 'Shared/helpers/styled';
import { getParticipateLink } from 'Shared/helpers/url';
import { capitalizeFirstLetter } from 'Shared/helpers/stringFormatter';
import { getNoProposalCardTitle } from 'Shared/helpers/sequence';
import {
  SequenceMainTitleStyle,
  SequenceParagraphStyle,
  FinalCardSeparatorStyle,
} from './style';

export type Props = {
  /** Object with Dynamic properties used to configure the Sequence (questionId, country, ...) */
  question: QuestionType,
  /** optional zone parameter for popular and controversy sequences */
  zone?: string,
  /** optional keyword parameter for thematic sequences */
  keyword?: string,
};

export const NoProposal = ({ question, zone, keyword }) => {
  const { device, country } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const isDesktop = matchDesktopDevice(device);
  const hasKeyword = keyword && keyword !== undefined;
  const keywordWithUppercase = hasKeyword && capitalizeFirstLetter(keyword);

  return (
    <>
      <SequenceMainTitleStyle>
        {hasKeyword
          ? i18n.t('no_proposal_card.title.keyword', {
              keyword: keywordWithUppercase,
            })
          : getNoProposalCardTitle(zone)}
      </SequenceMainTitleStyle>
      <SequenceParagraphStyle>
        {zone || hasKeyword
          ? i18n.t('no_proposal_card.description.special')
          : i18n.t('no_proposal_card.description.regular')}
      </SequenceParagraphStyle>
      <LinkAsRedButtonStyle to={getParticipateLink(country, question.slug)}>
        {i18n.t('no_proposal_card.link_text')}
      </LinkAsRedButtonStyle>
      {isDesktop && (
        <>
          <FinalCardSeparatorStyle />
          <SequenceParagraphStyle>
            {i18n.t('no_proposal_card.sharing')}
          </SequenceParagraphStyle>
          <Sharing />
        </>
      )}
    </>
  );
};
