// @flow
import * as React from 'react';
import {
  ButtonStyle,
  IsQualifiedButtonStyle,
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
  /** isQualified for interactive items */
  isQualified: boolean,
  /** Number of qualifications */
  qualificationCounter?: number,
  /** When waiting qualification response from API */
  pendingQualification?: boolean,
  /** Qualification key */
  qualificationKey: string,
  /** Method called when qualification button is clicked */
  handleClick?: () => void,
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
    handleClick,
    pendingQualification,
    qualificationKey,
  } = props;

  const onClick = event => {
    event.preventDefault();
    if (handleClick) handleClick();
  };

  return (
    <ButtonStyle
      as={isQualified ? IsQualifiedButtonStyle : QualifyButtonStyle}
      color={color}
      onClick={onClick}
      aria-label={pendingQualification ? i18n.t('common.loading') : label}
      aria-busy={pendingQualification}
      data-cy-button="qualification"
      data-cy-qualification-key={qualificationKey}
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
  pendingQualification: false,
  handleClick: () => {},
};
