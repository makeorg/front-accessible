import * as React from 'react';
import { Svg } from 'Client/ui/Svg';
import { MiddleFakeInputStyle, BasicInputStyle } from '../Styled/Input';
import { CenterInputIconStyle } from '../Styled/Icons';

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
  tabIndex?: number,
};

export class UntypedInput extends React.Component<Props> {
  static defaultProps = {
    required: false,
    errors: undefined,
    tabIndex: 0,
  };

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
      tabIndex,
    } = this.props;

    return (
      <MiddleFakeInputStyle hasError={errors}>
        <CenterInputIconStyle htmlFor={name} aria-label={label}>
          <Svg aria-hidden type={icon} />
        </CenterInputIconStyle>
        <BasicInputStyle
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
      </MiddleFakeInputStyle>
    );
  }
}
