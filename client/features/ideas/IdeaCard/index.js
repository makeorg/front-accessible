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
} from 'Client/ui/Svg/elements';
import { AvatarRows } from 'Client/ui/AvatarRows';
import { IdeaScore } from 'Client/features/ideas/IdeaScore';
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
};

export const IdeaCard = ({ position = 0 }: Props) => {
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
          <AvatarRows />
          {i18n.t('idea_card.associated_proposals', { count: 150 })}
        </ProposalsAssociatedStyle>
        <IdeaCardContentStyle>
          <ProposalStyle id={`idea_content_${position}`}>toto</ProposalStyle>
        </IdeaCardContentStyle>
        <PositionStyle>
          <SvgAngleArrowRight />
          <PositionContentStyle
            dangerouslySetInnerHTML={{
              __html: i18n.t('idea_card.position', {
                link: `<a href="">${i18n.t('idea_card.position')}</a>`,
                position_link: `<a href="">${i18n.t(
                  'idea_card.count_position',
                  {
                    count: 4,
                  }
                )}</a>`,
              }),
            }}
          />
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
                percentage={11}
                text={i18n.t('idea_card.vote_proposals')}
              />
              <IdeaScore
                icon={<SvgThumbsUpStyle aria-hidden />}
                percentage={83}
                text={i18n.t('idea_card.vote_positives')}
              />
              <IdeaScore
                icon={<SvgLikeStyle aria-hidden />}
                percentage={25}
                text={i18n.t('idea_card.vote_heart')}
              />
            </ScoringContainerStyle>
          </CollapseContentStyle>
        </CollapseStyle>
      </ProposalInnerStyle>
    </PopularProposalWrapperStyle>
  );
};
