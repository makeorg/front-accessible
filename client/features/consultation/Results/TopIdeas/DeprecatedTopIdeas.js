// @flow
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import React from 'react';
import { voteStaticParams, VOTE_AGREE_KEY } from 'Shared/constants/vote';
import { i18n } from 'Shared/i18n';
import { ThemeItemType } from 'Shared/types/question';
import { DeprecatedCollapse } from 'Client/ui/Elements/Collapse/DeprecatedCollapse';
import { ColumnToRowElementStyle } from 'Client/ui/Elements/FlexElements';
import { VoteIconStyle } from 'Client/ui/Elements/Buttons/style';
import {
  DeprecatedTopIdeasParagraphStyle,
  ThemeAgreeResultsStyle,
  DeprecatedThemeItemProposalStyle,
  DeprecatedThemeListItemStyle,
  ThemeQualifiedStyle,
  ThemeResultsButtonStyle,
  ThemeResultsDetailsStyle,
  ThemeResultsWrapperStyle,
} from './style';

type Props = {
  topIdeas: {
    first_theme: ThemeItemType,
    second_theme: ThemeItemType,
  },
  question: QuestionType,
};

export const DeprecatedTopIdeas = ({ topIdeas, question }: Props) => {
  const voteAttributes = voteStaticParams[VOTE_AGREE_KEY];

  return (
    <>
      <DeprecatedTopIdeasParagraphStyle>
        {i18n.t('consultation.results.top_ideas.deprecated_introduction')}
      </DeprecatedTopIdeasParagraphStyle>
      {topIdeas.map((topIdea, index) => (
        <DeprecatedCollapse
          key={topIdea.name}
          title={i18n.t(
            'consultation.results.top_ideas.deprecated_theme_title',
            {
              count: index + 1,
              name: topIdea.name,
            }
          )}
          open={index === 0}
          noMargin
          language={question.language}
        >
          <UnstyledListStyle>
            {topIdea.ideas.map(idea => (
              <DeprecatedThemeListItemStyle key={idea.idea}>
                <DeprecatedThemeItemProposalStyle
                  as="p"
                  lang={question.language}
                >
                  {idea.idea}
                </DeprecatedThemeItemProposalStyle>
                <ThemeResultsWrapperStyle>
                  <ThemeResultsButtonStyle className="agree voted">
                    <VoteIconStyle
                      className="agree"
                      aria-hidden
                      focusable="false"
                    />
                  </ThemeResultsButtonStyle>
                  <ThemeResultsDetailsStyle>
                    <ThemeAgreeResultsStyle
                      as="span"
                      color={voteAttributes.color}
                    >
                      {`${idea.agreement}% ${i18n.t('vote.agree')}`}
                    </ThemeAgreeResultsStyle>
                    <ColumnToRowElementStyle as="span">
                      <span>
                        {i18n.t('qualification.likeIt')}
                        <ThemeQualifiedStyle>
                          {` ${idea.adhesion}% `}
                        </ThemeQualifiedStyle>
                      </span>
                      <span>
                        {i18n.t('qualification.doable')}
                        <ThemeQualifiedStyle>
                          {` ${idea.realistic}% `}
                        </ThemeQualifiedStyle>
                      </span>
                    </ColumnToRowElementStyle>
                  </ThemeResultsDetailsStyle>
                </ThemeResultsWrapperStyle>
              </DeprecatedThemeListItemStyle>
            ))}
          </UnstyledListStyle>
        </DeprecatedCollapse>
      ))}
    </>
  );
};
