// @flow
import React, { useRef } from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
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
  /** min value */
  min?: number,
  /** max value */
  max?: number,
};

export const NumberInput = ({
  name,
  icon,
  value,
  label,
  handleChange,
  error = emptyError,
  required = false,
  min = 0,
  max = 100000,
}: Props) => {
  const inputRef = useRef(null);
  const isFieldValid = useIsFieldValid(inputRef, error);
  return (
    <MiddleFakeFieldStyle hasError={!isFieldValid}>
      <CenterInputIconStyle aria-hidden>{icon}</CenterInputIconStyle>
      <FieldWrapperStyle>
        <BasicInputStyle
          ref={inputRef}
          type="number"
          name={name}
          id={name}
          value={value}
          required={required}
          onChange={throttle(handleChange)}
          min={min}
          max={max}
        />
        <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
      </FieldWrapperStyle>
    </MiddleFakeFieldStyle>
  );
};
