// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { PopularProposalWrapperStyle } from 'Client/features/proposal/PopularProposalCard/style';
import {
  ProposalStyle,
  ProposalInnerStyle,
} from 'Client/ui/Elements/ProposalCardElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { SvgAngleArrowRight } from 'Client/ui/Svg/elements';
import { AvatarRows } from 'Client/ui/AvatarRows';
import {
  IdeaCardHeaderStyle,
  LinkStyle,
  ProposalsAssociatedStyle,
  PositionStyle,
  PositionContentStyle,
  IdeaCardContentStyle,
} from './style';

type Props = {
  position: number,
};

export const IdeaCard = ({ position = 0 }: Props) => {
  return (
    <PopularProposalWrapperStyle>
      <IdeaCardHeaderStyle aria-hidden>
        <span>{i18n.t('idea_card.number', { count: position })}</span>
        <LinkStyle>
          {i18n.t('idea_card.link')}
          <SvgAngleArrowRight aria-label="toto" />
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
          <SvgAngleArrowRight aria-label="toto" />
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
      </ProposalInnerStyle>
    </PopularProposalWrapperStyle>
  );
};
