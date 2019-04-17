// @flow
import React from 'react';
import { SvgLike, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';
import { UnvoteButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import * as VoteStyle from 'Client/features/vote/Styled';
import * as VoteResultStyle from 'Client/features/vote/Result/Styled';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  QualifyButtonStyle,
  UnqualifyButtonStyle,
  CounterStyle,
} from 'Client/ui/Elements/Qualification/Styled';
import { Tooltip } from 'Client/ui/Tooltip';
import { ResultTooltip } from 'Client/features/vote/Result/Tooltip';
import {
  SvgLikeStyle,
  PlaceholderParagraphStyle,
  FavouritesCardStyle,
  FavouritesProposalStyle,
} from '../Styled/Placeholders';

export const FavouritesPlaceholder = () => {
  return (
    <React.Fragment>
      <SvgLike aria-hidden style={SvgLikeStyle} />
      <PlaceholderParagraphStyle>
        {i18n.t('profile.favourites.description.introduction')}
      </PlaceholderParagraphStyle>
      <PlaceholderParagraphStyle>
        {i18n.t('profile.favourites.description.explanation')}
      </PlaceholderParagraphStyle>
      <FavouritesCardStyle aria-hidden>
        <FavouritesProposalStyle as="p">
          {i18n.t('profile.favourites.card_title')}
        </FavouritesProposalStyle>
        <VoteStyle.ContainerStyle>
          <VoteResultStyle.ContainerStyle>
            <UnvoteButtonStyle color={VoteColors.Agree} disabled>
              <SvgThumbsUp />
            </UnvoteButtonStyle>
            <aside>
              <VoteResultStyle.GraphStyle>
                <VoteResultStyle.ItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={100} voteKey="agree" />
                    }
                    direction="bottom"
                  >
                    <VoteResultStyle.BarStyle
                      color={VoteColors.Agree}
                      percent={75}
                    />
                  </Tooltip>
                </VoteResultStyle.ItemStyle>
                <VoteResultStyle.ItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={0} voteKey="disagree" />
                    }
                    direction="bottom"
                  >
                    <VoteResultStyle.BarStyle
                      color={VoteColors.Disagree}
                      percent={15}
                    />
                  </Tooltip>
                </VoteResultStyle.ItemStyle>
                <VoteResultStyle.ItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={0} voteKey="neutral" />
                    }
                    direction="bottom"
                  >
                    <VoteResultStyle.BarStyle
                      color={VoteColors.Neutral}
                      percent={10}
                    />
                  </Tooltip>
                </VoteResultStyle.ItemStyle>
              </VoteResultStyle.GraphStyle>
              <VoteResultStyle.TotalLabelStyle>
                {i18n.t('vote.label', { count: 4242 })}
              </VoteResultStyle.TotalLabelStyle>
            </aside>
          </VoteResultStyle.ContainerStyle>
          <SpaceBetweenColumnStyle>
            <UnqualifyButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.likeIt')}</span>
              <CounterStyle>+1</CounterStyle>
            </UnqualifyButtonStyle>
            <QualifyButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.doable')}</span>
              <CounterStyle>+1</CounterStyle>
            </QualifyButtonStyle>
            <QualifyButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.platitudeAgree')}</span>
              <CounterStyle>+1</CounterStyle>
            </QualifyButtonStyle>
          </SpaceBetweenColumnStyle>
        </VoteStyle.ContainerStyle>
      </FavouritesCardStyle>
    </React.Fragment>
  );
};
