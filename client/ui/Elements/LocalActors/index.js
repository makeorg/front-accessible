// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'Client/ui/Avatar';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { TileWithTitle } from 'Client/ui/Elements/TileWithTitle';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import { selectQuestionPartners } from 'Shared/store/selectors/questions.selector';
import { getLocalActors } from 'Shared/store/reducers/partners/actions';
import { ParagraphStyle } from 'Client/ui/Elements/ParagraphElements';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import { AvatarStyle, LocalActorItemStyle, ButtonWrapperStyle } from './style';

type Props = {
  /** ID of the question */
  questionId: string,
  /** Slug of the question */
  slug: string,
};

export const LocalActors = ({ questionId, slug }: Props) => {
  const dispatch = useDispatch();
  const country = useSelector((state: StateRoot) => state.appConfig.country);
  const language = useSelector((state: StateRoot) => state.appConfig.language);
  const actors = useSelector((state: StateRoot) =>
    selectQuestionPartners(state, slug)
  );

  useEffect(() => {
    dispatch(getLocalActors(questionId, slug));
  }, [dispatch, questionId, slug]);

  return (
    <TileWithTitle title={i18n.t('consultation.local_actors.title')}>
      <UnstyledListStyle>
        {actors &&
          actors.results &&
          actors.results.slice(0, 4).map(actor => (
            <LocalActorItemStyle key={actor.organisationId}>
              <AvatarStyle>
                <Avatar
                  avatarUrl={actor.avatarUrl}
                  avatarAlt={actor.organisationName}
                />
              </AvatarStyle>
              <div>
                <div>
                  <RedLinkStyle
                    to={getOrganisationProfileLink(
                      country,
                      language,
                      actor.organisationName
                    )}
                    href={getOrganisationProfileLink(
                      country,
                      language,
                      actor.organisationName
                    )}
                    onClick={trackClickPublicProfile}
                  >
                    {actor.organisationName}
                  </RedLinkStyle>
                  <SvgCheckedSymbol
                    style={{
                      fontSize: '14px',
                      fill: TextColors.Blue,
                      marginLeft: '5px',
                    }}
                  />
                </div>
                <div>
                  {i18n.t('consultation.local_actors.proposals', {
                    count: actor.proposalsCount,
                  })}
                  {' . '}
                  {i18n.t('consultation.local_actors.votes', {
                    count: actor.votesCount,
                  })}
                </div>
              </div>
            </LocalActorItemStyle>
          ))}
        <ButtonWrapperStyle>
          {i18n.t('consultation.local_actors.more')}
        </ButtonWrapperStyle>
        <ParagraphStyle
          dangerouslySetInnerHTML={{
            __html: i18n.t('consultation.local_actors.participate', {
              contact_us:
                '<a href="mailto:contact@make.org">$t(consultation.local_actors.contact_us)</a>',
            }),
          }}
        />
      </UnstyledListStyle>
    </TileWithTitle>
  );
};
