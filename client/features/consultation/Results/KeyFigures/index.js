import React from 'react';
import { useSelector } from 'react-redux';
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
  const language = useSelector(state => state.appConfig.language);
  const country = useSelector(state => state.appConfig.country);

  return (
    <KeyFiguresListStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {results.participants.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.participants')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {results.proposals.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.proposals')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle>
          {results.votes.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.votes')}
      </KeyFiguresListItemStyle>
    </KeyFiguresListStyle>
  );
};
