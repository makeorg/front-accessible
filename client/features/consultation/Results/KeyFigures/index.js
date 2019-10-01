import React from 'react';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import {
  KeyFiguresListStyle,
  KeyFiguresListItemStyle,
  KeyFiguresCountStyle,
} from './Styled';

type Props = {
  results: {
    participants: number,
    proposals: number,
    votes: number,
  },
  themeColor: string,
};

export const KeyFigures = ({ results, themeColor }: Props) => {
  const language = useSelector(state => state.appConfig.language);
  const country = useSelector(state => state.appConfig.country);

  return (
    <KeyFiguresListStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.participants.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.participants')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.proposals.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.proposals')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.votes.toLocaleString(`${language}-${country}`)}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.votes')}
      </KeyFiguresListItemStyle>
    </KeyFiguresListStyle>
  );
};
