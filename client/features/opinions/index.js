import React, { useEffect, useState } from 'react';
import { type PersonalityType } from 'Shared/types/user';
import { type PersonalityOpinionType } from 'Shared/types/personality';
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
import { PersonalityService } from 'Shared/services/Personality';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { formatUserName } from 'Shared/helpers/stringFormatter';
import { DisclaimerSubtitleStyle, OpinionCardListItemStyle } from './style';
import { OpinionCard } from './Card';

type Props = {
  personality: PersonalityType,
  privateProfile?: boolean,
};

type OpinionsProps = {
  opinions: PersonalityOpinionType,
  personality: PersonalityType,
};

const RenderOpinions = ({ opinions, personality }: OpinionsProps) => {
  const noOpinions = opinions.length < 1;

  if (noOpinions) {
    return (
      <CenterColumnStyle>
        <ThumbsUpWrapperStyle>
          <SvgThumbsUp style={ThumbsUpStyle} focusable="false" />
        </ThumbsUpWrapperStyle>
        <PlaceholderParagraphStyle>
          {i18n.t('personality.opinions.placeholder_text', {
            firstname: formatUserName(personality.firstName),
            lastname: formatUserName(personality.lastName),
          })}
        </PlaceholderParagraphStyle>
      </CenterColumnStyle>
    );
  }

  return (
    <UnstyledListStyle>
      {opinions.map(opinion => (
        <OpinionCardListItemStyle key={opinion.topIdea.id}>
          <OpinionCard userId={personality.userId} opinion={opinion} />
        </OpinionCardListItemStyle>
      ))}
    </UnstyledListStyle>
  );
};

const getCommentedOpinions = (opinions: PersonalityOpinionType[]) => {
  return opinions.filter(opinion => opinion.comment !== null);
};

export const Opinions = ({ personality, privateProfile = false }: Props) => {
  const [opinions, setOpinions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPersonnalityOpinions = async () => {
    const personalityOpinions = await PersonalityService.getPersonnalityOpinion(
      personality.userId
    );
    if (!personalityOpinions) {
      return;
    }

    if (privateProfile) {
      setOpinions(personalityOpinions);
    } else {
      setOpinions(getCommentedOpinions(personalityOpinions));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPersonnalityOpinions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personality]);

  return (
    <>
      {!privateProfile ? (
        <ProfileContentHeaderStyle>
          <SecondLevelTitleStyle>
            {i18n.t('personality.opinions.title', {
              firstname: formatUserName(personality.firstName),
              lastname: formatUserName(personality.lastName),
            })}
          </SecondLevelTitleStyle>
          <ProfileTitleSeparatorStyle />
        </ProfileContentHeaderStyle>
      ) : (
        <>
          <ScreenReaderItemStyle>
            <SecondLevelTitleStyle>
              {i18n.t('personality.opinions.title', {
                firstname: formatUserName(personality.firstName),
                lastname: formatUserName(personality.lastName),
              })}
            </SecondLevelTitleStyle>
            <ProfileTitleSeparatorStyle />
          </ScreenReaderItemStyle>
          <TileWithTitle
            title={i18n.t('personality.disclaimer.title')}
            icon={
              // eslint-disable-next-line react/jsx-wrap-multilines
              <SvgInfos
                aria-hidden
                style={{ marginRight: '10px' }}
                focusable="false"
              />
            }
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
            <ParagraphStyle
              dangerouslySetInnerHTML={{
                __html: i18n.t('personality.disclaimer.description_second', {
                  mailto:
                    '<a class="red-link" href="mailto:candidats-municipales@make.org">candidats-municipales@make.org</a>',
                }),
              }}
            />
          </TileWithTitle>
        </>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <RenderOpinions opinions={opinions} personality={personality} />
      )}
    </>
  );
};
