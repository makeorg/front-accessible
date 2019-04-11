import * as React from 'react';
import { BasicTextAreaStyle, TextAreaCounterStyle } from '../Styled/TextArea';
import { TextAreaIconStyle } from '../Styled/Icons';
import {
  FloatingLabelStyle,
  FakeFieldStyle,
  FieldWrapperStyle,
} from '../Styled/Content';

type Props = {
  /** Name of the TextArea */
  name: string,
  /** Icon of the TextArea */
  icon: IconDefinition,
  /** Value of the TextArea */
  value: string,
  /** Label of the TextArea */
  label: string,
  /** Mehtod called on change event */
  handleChange: (event: SyntheticInputEvent<HTMLInputElement>) => void,
  /** Array containing form errors */
  errors?: ErrorObject[],
  /** Is input required or optional */
  required?: boolean,
  /** Setting rows attribute for Textarea */
  rows?: number,
  /** Setting minLength for Textarea */
  minLength?: number,
  /** Setting maxLength for Textarea */
  maxLength?: number,
  /** Enable /Disable spellCheck for Textarea */
  spellCheck?: boolean,
  /** Autocomplete spellCheck for Textarea */
  autoComplete?: string,
  /** Show or not the counter */
  withCounter?: boolean,
};

export class TextArea extends React.Component<Props> {
  static defaultProps = {
    required: false,
    errors: undefined,
    rows: 1,
    minLength: undefined,
    maxLength: undefined,
    spellCheck: true,
    autoComplete: 'off',
    withCounter: false,
  };

  render() {
    const {
      name,
      icon,
      errors,
      value,
      label,
      required,
      handleChange,
      rows,
      minLength,
      maxLength,
      spellCheck,
      autoComplete,
      withCounter,
    } = this.props;

    return (
      <FakeFieldStyle hasError={errors}>
        <TextAreaIconStyle aria-hidden>{icon}</TextAreaIconStyle>
        <FieldWrapperStyle>
          <BasicTextAreaStyle
            name={name}
            id={name}
            value={value}
            aria-required={required}
            required={required}
            onChange={handleChange}
            rows={rows}
            maxRows={25}
            minLength={minLength}
            maxLength={maxLength}
            spellCheck={spellCheck}
            autoComplete={autoComplete}
            async
          />
          <FloatingLabelStyle htmlFor={name}>{label}</FloatingLabelStyle>
          {maxLength && value && withCounter && (
            <TextAreaCounterStyle>
              {`${value.length}/${maxLength}`}
            </TextAreaCounterStyle>
          )}
        </FieldWrapperStyle>
      </FakeFieldStyle>
    );
  }
}
