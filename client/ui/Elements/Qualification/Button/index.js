// @flow
import * as React from 'react';
import {
  ButtonStyle,
  UnqualifyButtonStyle,
  QualifyButtonStyle,
  CounterStyle,
} from 'Client/ui/Elements/Qualification/Styled';
import { LoadingDots } from 'Client/ui/Elements/Loading/Dots';
import { i18n } from 'Shared/i18n';

type Props = {
  /** Color used by Styled Component */
  color: string,
  /** Label of the button */
  label: string,
  /** Tabindex for interactive items */
  isQualified: boolean,
  /** Number of qualifications */
  qualificationCounter?: number,
  /** Tabindex for interactive items */
  tabIndex?: number,
  /** When waiting qualification response from API */
  pendingQualification: boolean,
  /** Method called when qualification button is clicked */
  handleQualification: () => void,
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
    tabIndex,
    pendingQualification,
  } = props;
  const handleClick = event => {
    event.preventDefault();
    handleQualification();
  };
  return (
    <ButtonStyle
      tabIndex={tabIndex}
      as={isQualified ? UnqualifyButtonStyle : QualifyButtonStyle}
      color={color}
      onClick={handleClick}
      aria-label={pendingQualification ? i18n.t('common.loading') : label}
    >
      {pendingQualification ? (
        <LoadingDots />
      ) : (
        <React.Fragment>
          <span aria-hidden>{label}</span>
          <CounterStyle aria-hidden>
            {isQualified ? qualificationCounter : '+1'}
          </CounterStyle>
        </React.Fragment>
      )}
    </ButtonStyle>
  );
};

QualificationButtonElement.defaultProps = {
  qualificationCounter: 0,
  tabIndex: 0,
};
