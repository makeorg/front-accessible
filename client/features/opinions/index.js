import React from 'react';
import { type TypePersonality } from 'Shared/types/user';
import {
  ThumbsUpWrapperStyle,
  ThumbsUpStyle,
  PlaceholderParagraphStyle,
} from 'Client/ui/Elements/PlaceholdersElements';
import { CenterColumnStyle } from 'Client/ui/Elements/FlexElements';
import { SecondLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import {
  ProfileContentHeaderStyle,
  ProfileTitleSeparatorStyle,
} from 'Client/ui/Elements/ProfileElements';
import { SvgThumbsUp, SvgInfos } from 'Client/ui/Svg/elements';
import { i18n } from 'Shared/i18n';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { DisclaimerSubtitleStyle } from './style';

type Props = {
  personality: TypePersonality,
  privateProfile?: boolean,
};

const withOpinions = true;

export const Opinions = ({ personality, privateProfile = false }: Props) => {
  if (!withOpinions) {
    return (
      <>
        <ProfileContentHeaderStyle>
          <SecondLevelTitleStyle>
            {i18n.t('personality.opinions.title', {
              firstname: personality.firstName,
              lastname: personality.lastName,
            })}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
        <CenterColumnStyle>
          <ThumbsUpWrapperStyle>
            <SvgThumbsUp aria-hidden style={ThumbsUpStyle} />
          </ThumbsUpWrapperStyle>
          <PlaceholderParagraphStyle>
            {i18n.t('personality.opinions.placeholder_text', {
              firstname: personality.firstName,
              lastname: personality.lastName,
            })}
          </PlaceholderParagraphStyle>
        </CenterColumnStyle>
      </>
    );
  }

  return (
    <>
      {!privateProfile ? (
        <ProfileContentHeaderStyle>
          <SecondLevelTitleStyle>
            {i18n.t('personality.opinions.title', {
              firstname: personality.firstName,
              lastname: personality.lastName,
            })}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
      ) : (
        <>
          <ScreenReaderItemStyle>
            <SecondLevelTitleStyle>
              {i18n.t('personality.opinions.title', {
                firstname: personality.firstName,
                lastname: personality.lastName,
              })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ScreenReaderItemStyle>
          <TileWithTitle
            title={i18n.t('personality.disclaimer.title')}
            icon={<SvgInfos aria-hidden style={{ marginRight: '10px' }} />}
          >
            <DisclaimerSubtitleStyle>
              {i18n.t('personality.disclaimer.subtitle_first')}
            </DisclaimerSubtitleStyle>
            <ParagraphStyle>
              {i18n.t('personality.disclaimer.description_first')}
            </ParagraphStyle>
            <DisclaimerSubtitleStyle className="margin-top">
              {i18n.t('personality.disclaimer.subtitle_second')}
            </DisclaimerSubtitleStyle>
            <ParagraphStyle>
              {i18n.t('personality.disclaimer.description_second')}
            </ParagraphStyle>
          </TileWithTitle>
        </>
      )}
    </>
  );
};
