import * as React from 'react';
import i18next from 'i18next';
import {
  Button,
  UnqualifyButton,
  QualifyButton,
  QualificationCounter
} from '../Styled/Button';

type Props = {
  qualificationKey: string,
  color: string,
  isQualified: boolean,
  qualificationCounter: number,
  tabIndex: number,
  handleQualification: Function
};

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
