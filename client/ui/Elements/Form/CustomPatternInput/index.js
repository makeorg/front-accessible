// @flow
import React, { useRef } from 'react';
import { type ErrorObjectType } from 'Shared/types/api';
import { useIsFieldValid } from 'Client/hooks/useFieldValidation';
import { emptyError } from 'Shared/errors/Messages';
import { throttle } from 'Shared/helpers/throttle';
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
  /** Custom validation pattern */
  pattern: string,
  /** Mehtod called on change event */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Object containing field errors */
  error?: ErrorObjectType,
  /** Is input required or optional */
  required?: boolean,
  /** Minimum length required for the input */
  minLength?: number,
  /** Maximum length required for the input */
  maxLength?: number,
};

export const CustomPatternInput = ({
  type,
  name,
  icon,
  value,
  label,
  pattern,
  handleChange,
  error = emptyError,
  required = false,
  minLength = 0,
  maxLength = 100000,
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
          onChange={throttle(handleChange)}
          pattern={pattern}
          minLength={minLength}
          maxLength={maxLength}
          aria-invalid={!isFieldValid}
        />
        <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
      </FieldWrapperStyle>
    </MiddleFakeFieldStyle>
  );
};
