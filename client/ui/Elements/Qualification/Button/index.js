// @flow
import * as React from 'react';
import {
  ButtonStyle,
  UnqualifyButtonStyle,
  QualifyButtonStyle,
  CounterStyle
} from 'Client/ui/Elements/Qualification/Styled';

type Props = {
  /** Color used by Styled Component */
  color: string,
  /** Label of the button */
  label: string,
  /** Tabindex for interactive items */
  isQualified: boolean,
  /** Method called when qualification button is clicked */
  handleQualification: (event: SyntheticEvent<HTMLButtonElement>, qualification: Object, votedKey: string) => {},
  /** Number of qualifications */
  qualificationCounter?: number,
  /** Tabindex for interactive items */
  tabIndex?: number
};

/**
 * Renders Qualification button element
 */
export const QualificationButtonElement = (props: Props) => {
  const {
    color,
    label,
    isQualified,
    qualificationCounter,
    handleQualification,
    tabIndex
  } = props;
  return (
    <ButtonStyle
      tabIndex={tabIndex}
      as={isQualified ? UnqualifyButtonStyle : QualifyButtonStyle}
      color={color}
      onClick={handleQualification}
    >
      {label}
      <CounterStyle aria-hidden>{isQualified ? qualificationCounter : '+1'}</CounterStyle>
    </ButtonStyle>
  );
};

QualificationButtonElement.defaultProps = {
  qualificationCounter: 0,
  tabIndex: 0
};
