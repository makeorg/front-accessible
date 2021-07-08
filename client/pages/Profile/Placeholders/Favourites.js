import React from 'react';
import { color } from 'athena-design-tokens';
import { SvgLike, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { VoteContainerStyle } from 'Client/features/vote/style';
import {
  VoteResultContainerStyle,
  VoteResultGraphStyle,
  VoteResultItemStyle,
  VoteResultBarStyle,
  VoteResultTotalLabelStyle,
} from 'Client/features/vote/Result/style';
import {
  SpaceBetweenColumnStyle,
  CenterColumnStyle,
} from 'Client/ui/Elements/FlexElements';
import { Tooltip } from 'Client/ui/Tooltip';
import { ResultTooltip } from 'Client/features/vote/Result/Tooltip';
import {
  SvgLikeStyle,
  PlaceholderParagraphStyle,
  FavouritesCardStyle,
  FavouritesProposalStyle,
} from 'Client/ui/Elements/PlaceholdersElements';
import { CounterStyle } from 'Client/features/qualification/style';
import {
  QualifyButtonStyle,
  VoteButtonStyle,
} from 'Client/ui/Elements/Buttons/style';

export const ProfileFavouritesPlaceholder = () => (
  <CenterColumnStyle>
    <SvgLike style={SvgLikeStyle} focusable="false" />
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
      <VoteContainerStyle className="placeholder">
        <VoteResultContainerStyle>
          <VoteButtonStyle className="agree voted" color={color.agree} disabled>
            <SvgThumbsUp aria-hidden focusable="false" />
          </VoteButtonStyle>
          <VoteResultGraphStyle>
            <VoteResultItemStyle>
              <Tooltip
                content={<ResultTooltip votePercent={100} voteKey="agree" />}
                direction="bottom"
              >
                <VoteResultBarStyle
                  color={color.agree}
                  percent={100}
                  type="button"
                />
              </Tooltip>
            </VoteResultItemStyle>
            <VoteResultItemStyle>
              <Tooltip
                content={<ResultTooltip votePercent={0} voteKey="disagree" />}
                direction="bottom"
              >
                <VoteResultBarStyle
                  color={color.disagree}
                  percent={0}
                  type="button"
                />
              </Tooltip>
            </VoteResultItemStyle>
            <VoteResultItemStyle>
              <Tooltip
                content={<ResultTooltip votePercent={0} voteKey="neutral" />}
                direction="bottom"
              >
                <VoteResultBarStyle
                  color={color.neutral}
                  percent={0}
                  type="button"
                />
              </Tooltip>
            </VoteResultItemStyle>
          </VoteResultGraphStyle>
          <VoteResultTotalLabelStyle>
            {i18n.t('vote.label', { count: 4242 })}
          </VoteResultTotalLabelStyle>
        </VoteResultContainerStyle>
        <SpaceBetweenColumnStyle>
          <QualifyButtonStyle
            className="qualified"
            color={color.agree}
            disabled
          >
            <span>{i18n.t('qualification.likeIt')}</span>
            <CounterStyle>+1</CounterStyle>
          </QualifyButtonStyle>
          <QualifyButtonStyle color={color.agree} disabled>
            <span>{i18n.t('qualification.doable')}</span>
            <CounterStyle>+1</CounterStyle>
          </QualifyButtonStyle>
          <QualifyButtonStyle color={color.agree} disabled>
            <span>{i18n.t('qualification.platitudeAgree')}</span>
            <CounterStyle>+1</CounterStyle>
          </QualifyButtonStyle>
        </SpaceBetweenColumnStyle>
      </VoteContainerStyle>
    </FavouritesCardStyle>
  </CenterColumnStyle>
);
