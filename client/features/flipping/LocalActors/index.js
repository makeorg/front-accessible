// @flow
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar } from 'Client/ui/Avatar';
import { RedLinkRouterStyle } from 'Client/ui/Elements/LinkElements';
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
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { TYPE_ORGANISATION } from 'Shared/constants/user';
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
    dispatch(getLocalActors(questionId, slug, undefined, undefined, limit));
  }, [dispatch, questionId, slug]);

  useEffect(() => {
    if (actors && actors.results && actors.results.length) {
      const { results, total } = actors;
      setHasMore(results.length < total);
    }
  }, [actors]);

  const displayAllActors = () => {
    dispatch(
      loadMoreLocalActors(
        questionId,
        slug,
        undefined,
        undefined,
        undefined,
        skip
      )
    );
  };

  return (
    <>
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
                  <RedLinkRouterStyle
                    to={getOrganisationProfileLink(
                      country,
                      language,
                      actor.slug
                    )}
                    onClick={() => trackClickPublicProfile(TYPE_ORGANISATION)}
                  >
                    {actor.organisationName}
                  </RedLinkRouterStyle>
                  <SvgCheckedSymbol style={CertifiedIconStyle} />
                </div>
                <div>
                  {i18n.t('consultation.local_actors.proposals', {
                    count:
                      (actor.countsByQuestion &&
                        actor.countsByQuestion[questionId] &&
                        actor.countsByQuestion[questionId].proposalsCount) ||
                      0,
                  })}
                  {' . '}
                  {i18n.t('consultation.local_actors.votes', {
                    count:
                      (actor.countsByQuestion &&
                        actor.countsByQuestion[questionId] &&
                        actor.countsByQuestion[questionId].votesCount) ||
                      0,
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
      </UnstyledListStyle>
      {/** @todo remove or refactor when Municipales is over */}
      <FooterStyle
        dangerouslySetInnerHTML={{
          __html: i18n.t('consultation.local_actors.participate', {
            contact_us:
              '<a href="mailto:associations-municipales@make.org">$t(consultation.local_actors.contact_us)</a>',
          }),
        }}
      />
    </>
  );
};
