import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MiddleFakeInputStyle, BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';
import { PasswordButton } from './Button';

type Props = {
  /** Name of the input */
  name: string,
  /** Icon of the input */
  icon: IconDefinition,
  /** Value of the input */
  value: string,
  /** Label of the input */
  label: string,
  /** Mehtod called on change event */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Mehtod called on PasswordButton click */
  toggleIsPasswordDisplayed: (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => void,
  /** Boolean toggled when password is shown / hidden */
  isPasswordDisplayed: boolean,
  /** Array containing form errors */
  errors: Array<ErrorObject>,
  /** Is input required or optional */
  required: boolean,
  /** Tabindex for interactive items */
  tabIndex: number,
};

export const PasswordInputComponent = (props: Props) => {
  const {
    name,
    icon,
    errors,
    value,
    label,
    required,
    handleChange,
    tabIndex,
    isPasswordDisplayed,
    toggleIsPasswordDisplayed,
  } = props;

  return (
    <MiddleFakeInputStyle hasError={errors}>
      <CenterInputIconStyle htmlFor={name} aria-label={label}>
        <FontAwesomeIcon aria-hidden icon={icon} />
      </CenterInputIconStyle>
      <BasicInputStyle
        type={isPasswordDisplayed ? 'text' : 'password'}
        name={name}
        id={name}
        placeholder={label}
        value={value}
        aria-required={required}
        required={required}
        onChange={handleChange}
        tabIndex={tabIndex}
      />
      <PasswordButton
        toggleIsPasswordDisplayed={toggleIsPasswordDisplayed}
        isPasswordDisplayed={isPasswordDisplayed}
        tabIndex={tabIndex}
      />
    </MiddleFakeInputStyle>
  );
};
