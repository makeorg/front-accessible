// @flow
import React, { useRef } from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { useIsFieldValid } from 'Client/hooks/useFieldValidation';
import { emptyError } from 'Shared/errors/Messages';
import { BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';
import {
  MiddleFakeFieldStyle,
  FloatingLabelStyle,
  FieldWrapperStyle,
} from '../Styled/Content';

type Props = {
  /** Type of the input */
  type: string,
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
  error?: TypeErrorObject,
  /** Is input required or optional */
  required?: boolean,
};

export const UntypedInput = ({
  type,
  name,
  icon,
  value,
  label,
  handleChange,
  error = emptyError,
  required = false,
}: Props) => {
  const inputRef = useRef(null);
  const isFieldValid = useIsFieldValid(inputRef, error);
  return (
    <MiddleFakeFieldStyle hasError={!isFieldValid}>
      <CenterInputIconStyle aria-hidden>{icon}</CenterInputIconStyle>
      <FieldWrapperStyle>
        <BasicInputStyle
          ref={inputRef}
          type={type}
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={handleChange}
        />
        <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
      </FieldWrapperStyle>
    </MiddleFakeFieldStyle>
  );
};
