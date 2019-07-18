import * as React from 'react';
import { SvgCheck } from 'Client/ui/Svg/elements';
import {
  CheckboxWrapper,
  FakeCheckboxInputStyle,
  CheckboxLabelStyle,
} from '../Styled/CheckBox';

type Props = {
  /** Name of the checkbox */
  id: string,
  /** Name of the checkbox */
  name: string,
  /** Label of the checkbox */
  label: string,
  /** handleLabelClick of the checkbox */
  handleCheck: (event: SyntheticEvent<HTMLLabelElement>) => void,
  /** Value of the checkbox */
  value?: string,
  /** Default value of the checkbox */
  isChecked?: boolean,
  /** Is input required or optional */
  required?: boolean,
};

export const CheckBox = ({
  name,
  id,
  value,
  label,
  required,
  isChecked,
  handleCheck,
}: Props) => {
  const handleEnterKey = event => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <CheckboxWrapper>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        required={required}
        checked={isChecked}
        aria-checked={isChecked}
        onChange={() => {}}
        hidden
      />
      <CheckboxLabelStyle
        htmlFor={id}
        onClick={() => handleCheck(!isChecked)}
        onKeyPress={() => handleEnterKey()}
        tabIndex={0}
      >
        <FakeCheckboxInputStyle aria-hidden>
          {isChecked ? <SvgCheck /> : null}
        </FakeCheckboxInputStyle>
        <span>{label}</span>
      </CheckboxLabelStyle>
    </CheckboxWrapper>
  );
};

CheckBox.defaultProps = {
  value: undefined,
  required: false,
  isChecked: false,
};
