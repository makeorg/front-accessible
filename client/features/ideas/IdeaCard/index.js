// @flow
import React, { useState } from 'react';
import { i18n } from 'Shared/i18n';
import { PopularProposalWrapperStyle } from 'Client/features/proposal/PopularProposalCard/style';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import {
  SvgAngleArrowRight,
  SvgAngleArrowBottom,
  SvgAngleArrowTop,
  SvgChat,
} from 'Client/ui/Svg/elements';
import { AvatarRows } from 'Client/ui/AvatarRows';
import { IdeaScore } from 'Client/features/ideas/IdeaScore';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { type TopIdea as TypeTopIdea } from 'Shared/types/topIdea';
import {
  IdeaCardHeaderStyle,
  LinkStyle,
  ProposalsAssociatedStyle,
  PositionStyle,
  PositionContentStyle,
  IdeaCardContentStyle,
  CollapseStyle,
  CollapseTextStyle,
  CollapseContentStyle,
  ScoringContainerStyle,
  SvgLikeStyle,
  SvgThumbsUpStyle,
  SvgIdeaStyle,
} from './style';

type Props = {
  position: number,
  topIdea: TypeTopIdea,
};

export const IdeaCard = ({ position, topIdea }: Props) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleClickScore = () => {
    setIsOpened(!isOpened);
  };
  return (
    <PopularProposalWrapperStyle>
      <IdeaCardHeaderStyle aria-hidden>
        <span>{i18n.t('idea_card.number', { count: position })}</span>
        <LinkStyle>
          {i18n.t('idea_card.link')}
          <SvgAngleArrowRight aria-hidden />
        </LinkStyle>
      </IdeaCardHeaderStyle>
      <ProposalInnerStyle>
        <ScreenReaderItemStyle>
          {i18n.t('idea_card.content')}
        </ScreenReaderItemStyle>
        <ProposalsAssociatedStyle>
          <AvatarRows avatars={topIdea.avatars} />
          {i18n.t('idea_card.associated_proposals', {
            count: topIdea.proposalsCount,
          })}
        </ProposalsAssociatedStyle>
        <IdeaCardContentStyle>
          <ProposalStyle id={`idea_content_${position}`}>
            {topIdea.name}
          </ProposalStyle>
        </IdeaCardContentStyle>
        <PositionStyle>
          <SvgChat aria-hidden />
          <PositionContentStyle>
            <RedLinkStyle>
              {i18n.t('idea_card.position', {
                count: 4,
              })}
            </RedLinkStyle>
            {i18n.t('idea_card.candidate', {
              count: 4,
            })}
          </PositionContentStyle>
        </PositionStyle>
        <CollapseStyle onClick={handleClickScore}>
          <CollapseTextStyle
            onClick={handleClickScore}
            aria-expanded={isOpened}
          >
            {isOpened ? (
              <>
                {i18n.t('idea_card.close')}
                <ScreenReaderItemStyle>
                  {i18n.t('idea_card.collapse')}
                </ScreenReaderItemStyle>
                <SvgAngleArrowTop aria-hidden />
              </>
            ) : (
              <>
                {i18n.t('idea_card.open')}
                <ScreenReaderItemStyle>
                  {i18n.t('idea_card.expand')}
                </ScreenReaderItemStyle>
                <SvgAngleArrowBottom aria-hidden />
              </>
            )}
          </CollapseTextStyle>
          <CollapseContentStyle
            className={isOpened && 'open'}
            aria-hidden={!isOpened}
          >
            <ScoringContainerStyle>
              <IdeaScore
                icon={<SvgIdeaStyle aria-hidden />}
                percentage={topIdea.scores.totalProposalsRatio}
                text={i18n.t('idea_card.vote_proposals')}
              />
              <IdeaScore
                icon={<SvgThumbsUpStyle aria-hidden />}
                percentage={topIdea.scores.agreementRatio}
                text={i18n.t('idea_card.vote_positives')}
              />
              <IdeaScore
                icon={<SvgLikeStyle aria-hidden />}
                percentage={topIdea.scores.likeItRatio}
                text={i18n.t('idea_card.vote_heart')}
              />
            </ScoringContainerStyle>
          </CollapseContentStyle>
        </CollapseStyle>
      </ProposalInnerStyle>
    </PopularProposalWrapperStyle>
  );
};
