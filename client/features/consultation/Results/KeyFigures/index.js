import React from 'react';
import { useSelector } from 'react-redux';
import { getLanguageFromCountryCode } from 'Shared/helpers/countries';
import { formatCountWithLanguage } from 'Shared/helpers/numberFormatter';
import { i18n } from 'Shared/i18n';
import {
  KeyFiguresListStyle,
  KeyFiguresListItemStyle,
  KeyFiguresCountStyle,
} from './style';

type Props = {
  results: {
    participants: number,
    proposals: number,
    votes: number,
  },
};

export const KeyFigures = ({ results }: Props) => {
  const country = useSelector(state => state.appConfig.country);
  const language = getLanguageFromCountryCode(country);

  return (
    <KeyFiguresListStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {formatCountWithLanguage(results.participants, language)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.participants')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {formatCountWithLanguage(results.proposals, language)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.proposals')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {formatCountWithLanguage(results.votes, language)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.votes')}
      </KeyFiguresListItemStyle>
    </KeyFiguresListStyle>
  );
};
