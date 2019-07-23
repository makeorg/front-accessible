// @flow
import React, { useState, useRef } from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { useIsFieldValid } from 'Client/hooks/useFieldValidation';
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
  /** Object containing field errors */
  errors?: TypeErrorObject,
  /** Is input required or optional */
  required?: boolean,
};

export const PasswordInput = ({
  name,
  icon,
  value,
  label,
  handleChange,
  errors = { field: '', message: '' },
  required = true,
}: Props) => {
  const [isPasswordDisplayed, displayPassword] = useState<boolean>(false);
  const inputRef = useRef(null);
  const isFieldValid = useIsFieldValid(inputRef, errors);

  return (
    <MiddleFakeFieldStyle hasError={!isFieldValid}>
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
