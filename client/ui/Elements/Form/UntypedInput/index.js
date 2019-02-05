import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FakeInputGrey,
  IconLabel,
  BasicInput
} from '../Styled';

type Props = {
  /** Type of the input */
  type: string,
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
  /** Array containing form errors */
  errors?: Array<ErrorObject>,
  /** Is input required or optional */
  required?: boolean,
  /** Tabindex for interactive items */
  tabIndex?: number
}

export class UntypedInput extends React.Component<Props> {
  static defaultProps = {
    required: false,
    errors: undefined,
    tabIndex: 0
  }

  render() {
    const {
      type,
      name,
      icon,
      errors,
      value,
      label,
      required,
      handleChange,
      tabIndex
    } = this.props;

    return (
      <FakeInputGrey hasError={errors}>
        <IconLabel htmlFor={name} aria-label={label}>
          <FontAwesomeIcon aria-hidden icon={icon} />
        </IconLabel>
        <BasicInput
          type={type}
          name={name}
          id={name}
          placeholder={label}
          value={value}
          aria-required={required}
          required={required}
          onChange={handleChange}
          tabIndex={tabIndex}
        />
      </FakeInputGrey>
    );
  }
}
