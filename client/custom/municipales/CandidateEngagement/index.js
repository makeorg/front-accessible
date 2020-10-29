// @flow
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useSlider } from 'Client/hooks/useSlider';
import { type StateRoot } from 'Shared/store/types';
import { type SliderParamsType } from 'Shared/types/views';
import { type PersonalityType } from 'Shared/types/user';
import { useDispatch, useSelector } from 'react-redux';
import { fechQuestionPersonalities } from 'Shared/store/reducers/questions/actions';
import { FourthLevelTitleStyle } from 'Client/ui/Elements/TitleElements';
import { useMobile } from 'Client/hooks/useMedia';
import { GliderStylesheet } from 'Client/app/assets/css-in-js/GliderStyle';
import { UnstyledListStyle } from 'Client/ui/Elements/ListElements';
import {
  MiddleColumnStyle,
  CenterRowStyle,
  MiddleRowStyle,
} from 'Client/ui/Elements/FlexElements';
import { Avatar } from 'Client/ui/Avatar';
import { Link } from 'react-router-dom';
import { getPersonalityProfileLink } from 'Shared/helpers/url';

import { i18n } from 'Shared/i18n';
import { CertifiedIconStyle } from 'Client/ui/Proposal/AuthorElement/Styled';
import { intToPx, scrollToTop } from 'Shared/helpers/styled';
import { Breakpoints } from 'Client/app/assets/vars/Breakpoints';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { trackClickPublicProfile } from 'Shared/services/Tracking';
import { TYPE_PERSONALITY } from 'Shared/constants/user';
import {
  CandidateInformationsStyle,
  CandidateWrapperStyle,
  CandidateHeadingStyle,
  CandidateSeparatorStyle,
  CandidateTitleStyle,
  CandidateLinkStyle,
  CandidateListItemStyle,
  PoliticalPartyStyle,
} from './style';

type Props = {
  question: QuestionType,
};

export const CandidateEngagement = ({ question }: Props) => {
  const [personalities, setPersonalities] = useState(null);
  const dispatch = useDispatch();
  const personalitiesState: PersonalityType[] = useSelector(
    (state: StateRoot) => state.questions[question.slug].personalities
  );
  const isMobile = useMobile();

  useEffect(() => {
    setPersonalities(personalitiesState);
  }, [personalitiesState]);

  useEffect(() => {
    dispatch(fechQuestionPersonalities(question.questionId, question.slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [question]);

  if (!personalities) {
    return null;
  }

  return (
    <CandidateWrapperStyle>
      <GliderStylesheet />
      {isMobile ? (
        <>
          <CandidateHeadingStyle>
            <FourthLevelTitleStyle>
              {i18n.t('consultation.municipal.position.title')}
            </FourthLevelTitleStyle>
            <CandidateSeparatorStyle />
          </CandidateHeadingStyle>
          <CandidateMobileSlider personalities={personalities} />
        </>
      ) : (
        <CandidateDesktopSlider personalities={personalities} />
      )}
    </CandidateWrapperStyle>
  );
};

type SliderProps = {
  personalities: PersonalityType[],
};

export const CandidateMobileSlider = ({ personalities }: SliderProps) => {
  const sliderName = 'candidate_mobile';
  const sliderRef = useRef();
  const sliderParams: SliderParamsType = {
    slidesToShow: 'auto',
  };
  useSlider(sliderRef, sliderParams, personalities.length > 0);

  return (
    <div className={`${sliderName} glider-contain`}>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <div className={`${sliderName} glider`} ref={sliderRef}>
        <UnstyledListStyle className={`${sliderName} glider-track`}>
          {personalities.map(personality => (
            <CandidateListItemStyle
              key={personality.userId}
              className={sliderName}
            >
              <CandidateItem personality={personality} />
            </CandidateListItemStyle>
          ))}
        </UnstyledListStyle>
      </div>
    </div>
  );
};

export const CandidateDesktopSlider = ({ personalities }: SliderProps) => {
  const [slideOffset, setSlideOffset] = useState(0);
  const sliderName = 'candidate_desktop';
  const sliderRef = useRef();
  let sliderParams: SliderParamsType = {
    responsive: [
      {
        breakpoint: Breakpoints.Tablet,
        settings: {
          slidesToShow: 'auto',
          draggable: true,
        },
      },
    ],
  };

  // Dirty Hack for IE11 compatibility :'(
  const isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  if (isIE11) {
    sliderParams = {
      responsive: [
        {
          breakpoint: Breakpoints.Tablet,
          settings: {
            slidesToShow: 6.5,
            draggable: true,
          },
        },
      ],
    };
  }

  useSlider(sliderRef, sliderParams, personalities.length > 0);

  const updateSlideOffset = () => {
    const mainContainer = document.getElementById('main');
    const containerLeftOffset = mainContainer
      ? mainContainer.getBoundingClientRect().left
      : 0;

    setSlideOffset(containerLeftOffset);
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      requestAnimationFrame(updateSlideOffset);
    });
    updateSlideOffset();
    return () =>
      window.removeEventListener('resize', () => {
        requestAnimationFrame(updateSlideOffset);
      });
  }, [personalities]);

  return (
    <div className={`${sliderName} glider-contain`}>
      <ScreenReaderItemStyle>
        {i18n.t('common.slider.introduction')}
      </ScreenReaderItemStyle>
      <div className={`${sliderName} glider`} ref={sliderRef}>
        <UnstyledListStyle className={`${sliderName} glider-track`}>
          <CandidateListItemStyle
            className={sliderName}
            paddingLeft={intToPx(slideOffset)}
          >
            <CandidateTitleStyle as="h2" id="candidate_position_title">
              {i18n.t('consultation.municipal.position.title')}
            </CandidateTitleStyle>
          </CandidateListItemStyle>
          {personalities.map(personality => (
            <CandidateListItemStyle
              key={personality.userId}
              className={sliderName}
            >
              <CandidateItem personality={personality} />
            </CandidateListItemStyle>
          ))}
        </UnstyledListStyle>
      </div>
    </div>
  );
};

type CandidateProps = {
  personality: PersonalityType,
};

const handleClickProfile = () => {
  scrollToTop();
  trackClickPublicProfile(TYPE_PERSONALITY);
};

export const CandidateItem = ({ personality }: CandidateProps) => {
  const isMobile = useMobile();
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const personalityFullName = `${personality.firstName} ${personality.lastName}`;
  return (
    <CenterRowStyle as={isMobile && MiddleColumnStyle}>
      <Link
        to={getPersonalityProfileLink(country, personality.userId)}
        onClick={handleClickProfile}
      >
        <Avatar
          avatarUrl={personality.avatarUrl}
          avatarSize={isMobile ? 35 : 50}
          avatarAlt={i18n.t('consultation.partners.profile_link', {
            name: personalityFullName,
          })}
        />
      </Link>
      <CandidateInformationsStyle>
        <MiddleRowStyle>
          <CandidateLinkStyle
            to={getPersonalityProfileLink(country, personality.userId)}
            onClick={handleClickProfile}
          >
            {personalityFullName}
          </CandidateLinkStyle>
          <CertifiedIconStyle aria-hidden focusable="false" />
        </MiddleRowStyle>
        <PoliticalPartyStyle>{personality.politicalParty}</PoliticalPartyStyle>
      </CandidateInformationsStyle>
    </CenterRowStyle>
  );
};
