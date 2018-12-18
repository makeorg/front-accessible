/* @flow */
import * as React from 'react';
import i18next from 'i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CenterColumn } from 'Components/Elements/FlexElements';
import SignUpCardAuthentification from 'Containers/ProposalCard/SignUpCard/Authentification';
import SignUpTitle from './Title';
import SkipSignUpButton from './Button';
import ProgressBarComponent from '../ProgressBar';
import ProposalCard from '../Styled';

type Props = {
  signUpParams: Object,
  index: number,
  tabIndex: number,
  currentIndex: number,
  cardsCount: number,
  goToPreviousCard: Function,
  skipSignUpCard: Function,
  position: number,
  scale: number,
  zindex: number
}

const SignUpCardComponent = (props: Props) => {
  const {
    signUpParams,
    index,
    tabIndex,
    currentIndex,
    cardsCount,
    goToPreviousCard,
    skipSignUpCard,
    position,
    scale,
    zindex
  } = props;

  return (
    <ProposalCard
      position={position}
      scale={scale}
      zindex={zindex}
      className={index < currentIndex ? 'collapsed-card' : ''}
    >
      <ProposalCard.BackButtonWrapper>
        <ProposalCard.BackButton
          tabIndex={tabIndex}
          onClick={goToPreviousCard}
        >
          <ProposalCard.BackIcon>
            <FontAwesomeIcon aria-hidden icon={faArrowLeft} />
          </ProposalCard.BackIcon>
          {i18next.t('proposal_card.previous')}
        </ProposalCard.BackButton>
        <ProgressBarComponent index={index} cardsCount={cardsCount} />
      </ProposalCard.BackButtonWrapper>
      <ProposalCard.InnerContent>
        <CenterColumn as="section">
          <header>
            <SignUpTitle titleParams={signUpParams && signUpParams.title} />
          </header>
          <ProposalCard.SecondaryTitle>
            {i18next.t('sign_up_card.authentification-text')}
          </ProposalCard.SecondaryTitle>
          <SignUpCardAuthentification
            tabIndex={tabIndex}
          />
          <SkipSignUpButton
            tabIndex={tabIndex}
            skipSignUpCard={skipSignUpCard}
            wording={signUpParams && signUpParams.nextCTA}
          />
        </CenterColumn>
      </ProposalCard.InnerContent>
    </ProposalCard>
  );
};

export default SignUpCardComponent;
