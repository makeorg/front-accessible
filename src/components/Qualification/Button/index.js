// @flow
import * as React from 'react';
import i18next from 'i18next';
import {
  Button,
  UnqualifyButton,
  QualifyButton,
  QualificationCounter
} from '../Styled/Button';

type Props = {
  /** Qualification key */
  qualificationKey: string,
  /** Color used by Styled Component */
  color: string,
  /** Tabindex for interactive items */
  isQualified: boolean,
  /** Number of qualifications */
  qualificationCounter: number,
  /** Tabindex for interactive items */
  tabIndex: number,
  /** Method called when qualification button is clicked */
  handleQualification: Function
};

/**
 * Renders Qualification button element
 */
const QualificationButtonComponent = (props: Props) => {
  const {
    qualificationKey,
    color,
    isQualified,
    qualificationCounter,
    handleQualification,
    tabIndex
  } = props;
  return (
    <Button
      tabIndex={tabIndex}
      as={isQualified ? UnqualifyButton : QualifyButton}
      color={color}
      onClick={handleQualification}
    >
      {i18next.t(`qualification.${qualificationKey}`)}
      <QualificationCounter aria-hidden>{isQualified ? qualificationCounter : '+1'}</QualificationCounter>
    </Button>
  );
};

export default QualificationButtonComponent;
