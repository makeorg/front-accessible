import React from 'react';
import { type TypeThemeItem } from 'Shared/types/question';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { i18n } from 'Shared/i18n';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ThemeTitleStyle, ThemeListItemStyle } from './Styled';

type Props = {
  topIdeas: {
    first_theme: TypeThemeItem,
    second_theme: TypeThemeItem,
  },
};

export const TopIdeas = ({ topIdeas }: Props) => {
  return (
    <React.Fragment>
      <ParagraphStyle>
        {i18n.t('consultation.results.top_ideas.introduction')}
      </ParagraphStyle>
      {topIdeas.map((topIdea, index) => (
        <React.Fragment key={topIdea.name}>
          <ThemeTitleStyle>
            {i18n.t('consultation.results.top_ideas.theme_title', {
              count: index + 1,
            })}
            {topIdea.name}
          </ThemeTitleStyle>
          <UnstyledListStyle>
            {topIdea.ideas.map(idea => (
              <ThemeListItemStyle key={idea}>{idea}</ThemeListItemStyle>
            ))}
          </UnstyledListStyle>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};
