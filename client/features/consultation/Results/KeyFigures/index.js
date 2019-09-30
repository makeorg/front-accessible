import React from 'react';
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
  return (
    <KeyFiguresListStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.participants}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.participants')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.proposals}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.proposals')}
      </KeyFiguresListItemStyle>
      <KeyFiguresListItemStyle>
        <KeyFiguresCountStyle fontColor={themeColor}>
          {results.votes}
        </KeyFiguresCountStyle>
        {i18n.t('consultation.results.key_figures.votes')}
      </KeyFiguresListItemStyle>
    </KeyFiguresListStyle>
  );
};
