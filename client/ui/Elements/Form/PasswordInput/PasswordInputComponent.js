import * as React from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';
import { PasswordButton } from './Button';
import {
  MiddleFakeFieldStyle,
  FloatingLabelStyle,
  FieldWrapperStyle,
} from '../Styled/Content';

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
  errors: TypeErrorObject[],
  /** Is input required or optional */
  required: boolean,
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
    isPasswordDisplayed,
    toggleIsPasswordDisplayed,
  } = props;

  return (
    <MiddleFakeFieldStyle hasError={errors}>
      <CenterInputIconStyle>{icon}</CenterInputIconStyle>
      <FieldWrapperStyle>
        <BasicInputStyle
          type={isPasswordDisplayed ? 'text' : 'password'}
          name={name}
          id={name}
          value={value}
          aria-required={required}
          required={required}
          onChange={handleChange}
        />
        <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
      </FieldWrapperStyle>
      <PasswordButton
        toggleIsPasswordDisplayed={toggleIsPasswordDisplayed}
        isPasswordDisplayed={isPasswordDisplayed}
      />
    </MiddleFakeFieldStyle>
  );
};
