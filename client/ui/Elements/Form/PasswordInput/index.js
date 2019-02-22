import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FakeInputGreyStyle, IconLabelStyle, BasicInputStyle } from '../Styled';
import { PasswordButton } from '../PasswordButton';

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
  /** Mehtod called on PasswordButton click */
  togglePasswordIsDisplayed: (
    event: SyntheticInputEvent<HTMLInputElement>
  ) => void,
  /** Boolean toggled when password is shown / hidden */
  passwordIsDisplayed?: boolean,
  /** Array containing form errors */
  errors?: Array<ErrorObject>,
  /** Is input required or optional */
  required?: boolean,
  /** Tabindex for interactive items */
  tabIndex?: number,
};

export class PasswordInput extends React.Component<Props> {
  static defaultProps = {
    errors: undefined,
    required: false,
    passwordIsDisplayed: false,
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
      passwordIsDisplayed,
      togglePasswordIsDisplayed,
    } = this.props;

    return (
      <FakeInputGreyStyle hasError={errors}>
        <IconLabelStyle htmlFor={name} aria-label={label}>
          <FontAwesomeIcon aria-hidden icon={icon} />
        </IconLabelStyle>
        <BasicInputStyle
          type={passwordIsDisplayed ? 'text' : type}
          name={name}
          id={name}
          placeholder={label}
          value={value}
          aria-required={required}
          required={required}
          onChange={handleChange}
          tabIndex={tabIndex}
        />
        <PasswordButton
          togglePasswordIsDisplayed={togglePasswordIsDisplayed}
          passwordIsDisplayed={passwordIsDisplayed}
          tabIndex={tabIndex}
        />
      </FakeInputGreyStyle>
    );
  }
}
