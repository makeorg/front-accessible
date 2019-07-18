// @flow
import React from 'react';
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
  /** Has errors */
  errors?: any,
  /** Is input required or optional */
  required?: boolean,
};

export const UntypedInput = ({
  type,
  name,
  icon,
  errors,
  value,
  label,
  required,
  handleChange,
}: Props) => {
  return (
    <MiddleFakeFieldStyle hasError={errors} className={errors ? 'error' : ''}>
      <CenterInputIconStyle aria-hidden>{icon}</CenterInputIconStyle>
      <FieldWrapperStyle>
        <BasicInputStyle
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

UntypedInput.defaultProps = {
  required: false,
  errors: false,
};
