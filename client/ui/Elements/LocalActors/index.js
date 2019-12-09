// @flow
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'Client/ui/Avatar';
import { TextColors } from 'Client/app/assets/vars/Colors';
import { RedLinkStyle } from 'Client/ui/Elements/LinkElements';
import { SvgCheckedSymbol } from 'Client/ui/Svg/elements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import { i18n } from 'Shared/i18n';
import { getOrganisationProfileLink } from 'Shared/helpers/url';
import { type StateRoot } from 'Shared/store/types';
import { selectQuestionPartners } from 'Shared/store/selectors/questions.selector';
import {
  getLocalActors,
  loadMoreLocalActors,
} from 'Shared/store/reducers/partners/actions';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  AvatarStyle,
  LocalActorItemStyle,
  ButtonWrapperStyle,
  FooterStyle,
} from './style';

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
  const isLoading = useSelector((state: StateRoot) => state.partners.isLoading);
  const [hasMore, setHasMore] = useState<boolean>(false);
  const limit = 4;
  const skip = 4;

  useEffect(() => {
    dispatch(getLocalActors(questionId, slug, limit, undefined));
  }, [dispatch, questionId, slug]);

  useEffect(() => {
    if (actors && actors.results && actors.results.length) {
      const { results, total } = actors;
      setHasMore(results.length < total);
    }
  }, [actors]);

  const displayAllActors = () => {
    dispatch(loadMoreLocalActors(questionId, slug, undefined, skip));
  };

  return (
    <UnstyledListStyle>
      {actors &&
        actors.results &&
        actors.results.slice(0, 4).map(actor => (
          <LocalActorItemStyle key={actor.organisationId}>
            <AvatarStyle>
              <Avatar
                avatarUrl={actor.avatarUrl}
                avatarAlt={actor.organisationName}
                avatarSize={50}
              />
            </AvatarStyle>
            <div>
              <div>
                <RedLinkStyle
                  to={getOrganisationProfileLink(country, language, actor.slug)}
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
      {isLoading && <Spinner />}
      {hasMore && (
        <ButtonWrapperStyle onClick={displayAllActors}>
          {i18n.t('consultation.local_actors.more')}
        </ButtonWrapperStyle>
      )}
      <FooterStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('consultation.local_actors.participate', {
            contact_us:
              '<a href="mailto:contact@make.org">$t(consultation.local_actors.contact_us)</a>',
          }),
        }}
      />
    </UnstyledListStyle>
  );
};
