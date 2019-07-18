// @flow
import React, { useState, useRef } from 'react';
import { useFieldValidation } from 'Client/hooks/useFieldValidation';
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
  icon: HTMLElement,
  /** Value of the input */
  value: string,
  /** Label of the input */
  label: string,
  /** Mehtod called on change event */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Has errors */
  errors?: any,
  /** Is input required or optional */
  required?: boolean,
};

export const PasswordInput = ({
  name,
  icon,
  errors,
  value,
  label,
  required,
  handleChange,
}: Props) => {
  const [isPasswordDisplayed, displayPassword] = useState<boolean>(false);
  const inputRef = useRef(null);
  const isNotValid = useFieldValidation(inputRef, errors) || errors.length;

  return (
    <MiddleFakeFieldStyle hasError={isNotValid}>
      <CenterInputIconStyle>{icon}</CenterInputIconStyle>
      <FieldWrapperStyle>
        <BasicInputStyle
          ref={inputRef}
          type={isPasswordDisplayed ? 'text' : 'password'}
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={handleChange}
          minLength={8}
        />
        <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
      </FieldWrapperStyle>
      <PasswordButton
        toggleIsPasswordDisplayed={() => displayPassword(!isPasswordDisplayed)}
        isPasswordDisplayed={isPasswordDisplayed}
      />
    </MiddleFakeFieldStyle>
  );
};

PasswordInput.defaultProps = {
  errors: undefined,
  required: true,
};
