import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FakeInputGrey,
  IconLabel,
  BasicInput
} from '..';
import PasswordButton from '../PasswordButton';

class PasswordInput extends React.Component {
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
      passwordIsDisplayed,
      togglePasswordIsDisplayed,
      tabIndex
    } = this.props;

    return (
      <FakeInputGrey hasError={errors}>
        <IconLabel htmlFor={name} aria-label={label}>
          <FontAwesomeIcon aria-hidden icon={icon} />
        </IconLabel>
        <BasicInput
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
      </FakeInputGrey>
    );
  }
}

export default PasswordInput;
