import React from 'react';
import i18next from 'i18next';
import {
  Button,
  UnqualifyButton,
  QualifyButton,
  QualificationCounter
} from '../Styled/Button';

class QualificationButtonComponent extends React.Component {
  render() {
    const {
      qualificationKey,
      color,
      isQualified,
      qualificationCounter,
      handleQualification,
      tabIndex
    } = this.props;
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
  }
}

export default QualificationButtonComponent;
