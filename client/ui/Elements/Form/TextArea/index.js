import * as React from 'react';
import { FakeInputStyle } from '../Styled/Input';
import { BasicTextAreaStyle } from '../Styled/TextArea';
import { TextAreaIconStyle } from '../Styled/Icons';

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
  errors?: Array<ErrorObject>,
  /** Is input required or optional */
  required?: boolean,
  /** Tabindex for interactive items */
  tabIndex?: number,
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
};

export class TextArea extends React.Component<Props> {
  static defaultProps = {
    required: false,
    errors: undefined,
    tabIndex: 0,
    rows: 5,
    minLength: undefined,
    maxLength: undefined,
    spellCheck: true,
    autoComplete: 'off',
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
      tabIndex,
      rows,
      minLength,
      maxLength,
      spellCheck,
      autoComplete,
    } = this.props;

    return (
      <FakeInputStyle hasError={errors}>
        <TextAreaIconStyle htmlFor={name} aria-label={label}>
          <span aria-hidden>{icon}</span>
        </TextAreaIconStyle>
        <BasicTextAreaStyle
          name={name}
          id={name}
          placeholder={label}
          value={value}
          aria-required={required}
          required={required}
          onChange={handleChange}
          tabIndex={tabIndex}
          rows={rows}
          minLength={minLength}
          maxLength={maxLength}
          spellCheck={spellCheck}
          autoComplete={autoComplete}
        />
      </FakeInputStyle>
    );
  }
}
