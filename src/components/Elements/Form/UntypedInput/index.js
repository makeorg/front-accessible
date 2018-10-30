import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  FakeInputGrey,
  IconLabel,
  BasicInput
} from '..';

class UntypedInput extends React.Component {
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

export default UntypedInput;
