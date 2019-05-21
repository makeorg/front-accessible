import React from 'react';
import { SvgLike, SvgThumbsUp } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';
import { IsVotedButtonStyle } from 'Client/ui/Elements/Vote/Styled';
import { VoteContainerStyle } from 'Client/features/vote/Styled';
import {
  VoteResultContainerStyle,
  VoteResultGraphStyle,
  VoteResultItemStyle,
  VoteResultBarStyle,
  VoteResultTotalLabelStyle,
} from 'Client/features/vote/Result/Styled';
import { SpaceBetweenColumnStyle } from 'Client/ui/Elements/FlexElements';
import {
  QualifyButtonStyle,
  IsQualifiedButtonStyle,
  CounterStyle,
} from 'Client/ui/Elements/Qualification/Styled';
import { Tooltip } from 'Client/ui/Tooltip';
import { ResultTooltip } from 'Client/features/vote/Result/Tooltip';
import {
  SvgLikeStyle,
  PlaceholderParagraphStyle,
  FavouritesCardStyle,
  FavouritesProposalStyle,
} from 'Client/ui/Elements/PlaceholdersElements';

export const ProfileFavouritesPlaceholder = () => {
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
        <VoteContainerStyle>
          <VoteResultContainerStyle>
            <IsVotedButtonStyle color={VoteColors.Agree} disabled>
              <SvgThumbsUp />
            </IsVotedButtonStyle>
            <aside>
              <VoteResultGraphStyle>
                <VoteResultItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={100} voteKey="agree" />
                    }
                    direction="bottom"
                  >
                    <VoteResultBarStyle
                      color={VoteColors.Agree}
                      percent={100}
                    />
                  </Tooltip>
                </VoteResultItemStyle>
                <VoteResultItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={0} voteKey="disagree" />
                    }
                    direction="bottom"
                  >
                    <VoteResultBarStyle
                      color={VoteColors.Disagree}
                      percent={0}
                    />
                  </Tooltip>
                </VoteResultItemStyle>
                <VoteResultItemStyle>
                  <Tooltip
                    content={
                      <ResultTooltip votePercent={0} voteKey="neutral" />
                    }
                    direction="bottom"
                  >
                    <VoteResultBarStyle
                      color={VoteColors.Neutral}
                      percent={0}
                    />
                  </Tooltip>
                </VoteResultItemStyle>
              </VoteResultGraphStyle>
              <VoteResultTotalLabelStyle>
                {i18n.t('vote.label', { count: 4242 })}
              </VoteResultTotalLabelStyle>
            </aside>
          </VoteResultContainerStyle>
          <SpaceBetweenColumnStyle>
            <IsQualifiedButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.likeIt')}</span>
              <CounterStyle>+1</CounterStyle>
            </IsQualifiedButtonStyle>
            <QualifyButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.doable')}</span>
              <CounterStyle>+1</CounterStyle>
            </QualifyButtonStyle>
            <QualifyButtonStyle color={VoteColors.Agree} disabled>
              <span>{i18n.t('qualification.platitudeAgree')}</span>
              <CounterStyle>+1</CounterStyle>
            </QualifyButtonStyle>
          </SpaceBetweenColumnStyle>
        </VoteContainerStyle>
      </FavouritesCardStyle>
    </React.Fragment>
  );
};