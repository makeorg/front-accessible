import * as React from 'react';
import { connect } from 'react-redux';
import SignUpCardComponent from '../../../components/ProposalCard/SignUpCard';
import { getPosition, getScale, getZIndex } from '../../../helpers/sequence';

type Props = {
  configuration: Object,
  index: number,
  currentIndex: number,
  cardsCount: number,
  goToPreviousCard: Function,
  skipSignUpCard: Function,
  isPannelOpen: boolean,
  isSequenceCollapsed: boolean
}

const SignUpCardContainer = (props: Props) => {
  const {
    configuration,
    index,
    currentIndex,
    isPannelOpen,
    isSequenceCollapsed
  } = props;
  const position = getPosition(index, currentIndex);
  const scale = getScale(index, currentIndex);
  const zindex = getZIndex(index, currentIndex);

  return (
    <SignUpCardComponent
      signUpParams={configuration}
      position={position}
      scale={scale}
      zindex={zindex}
      tabIndex={isPannelOpen || isSequenceCollapsed || index !== currentIndex ? -1 : 0}
      {...props}
    />
  );
};

const mapStateToProps = (state) => {
  const { isPannelOpen } = state.pannel;
  const { isSequenceCollapsed } = state.sequence;

  return {
    isPannelOpen,
    isSequenceCollapsed
  };
};

export default connect(mapStateToProps)(SignUpCardContainer);
