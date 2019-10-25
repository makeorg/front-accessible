import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { ButtonIconWrapperStyle } from 'Client/ui/Elements/Vote/Styled';
import { SvgThumbsUp } from 'Client/ui/Svg/elements';
import React from 'react';
import { voteStaticParams, VOTE_AGREE_KEY } from 'Shared/constants/vote';
import { i18n } from 'Shared/i18n';
import { TypeThemeItem } from 'Shared/types/question';
import { Collapse } from 'Client/ui/Elements/Collapse';
import {
  TopIdeasParagraphStyle,
  ThemeAgreeResultsStyle,
  ThemeItemProposalStyle,
  ThemeListItemStyle,
  ThemeQualifiedStyle,
  ThemeResultsButtonStyle,
  ThemeResultsDetailsStyle,
  ThemeResultsWrapperStyle,
} from './Styled';

type Props = {
  topIdeas: {
    first_theme: TypeThemeItem,
    second_theme: TypeThemeItem,
  },
};

export const TopIdeas = ({ topIdeas }: Props) => {
  const voteAttributes = voteStaticParams[VOTE_AGREE_KEY];

  return (
    <React.Fragment>
      <TopIdeasParagraphStyle>
        {i18n.t('consultation.results.top_ideas.introduction')}
      </TopIdeasParagraphStyle>
      {topIdeas.map((topIdea, index) => (
        <Collapse
          key={topIdea.name}
          title={i18n.t('consultation.results.top_ideas.theme_title', {
            count: index + 1,
            name: topIdea.name,
          })}
          open={index === 0}
        >
          <UnstyledListStyle>
            {topIdea.ideas.map(idea => (
              <ThemeListItemStyle key={idea.idea}>
                <ThemeItemProposalStyle as="p">
                  {idea.idea}
                </ThemeItemProposalStyle>
                <ThemeResultsWrapperStyle>
                  <ThemeResultsButtonStyle
                    aria-hidden
                    color={voteAttributes.color}
                  >
                    <ButtonIconWrapperStyle
                      transform={voteAttributes.transform}
                    >
                      <SvgThumbsUp aria-hidden />
                    </ButtonIconWrapperStyle>
                  </ThemeResultsButtonStyle>
                  <ThemeResultsDetailsStyle>
                    <ThemeAgreeResultsStyle
                      as="span"
                      color={voteAttributes.color}
                    >
                      {`${idea.agreement}% ${i18n.t('vote.agree')}`}
                    </ThemeAgreeResultsStyle>
                    <p>
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
                    </p>
                  </ThemeResultsDetailsStyle>
                </ThemeResultsWrapperStyle>
              </ThemeListItemStyle>
            ))}
          </UnstyledListStyle>
        </Collapse>
      ))}
    </React.Fragment>
  );
};
