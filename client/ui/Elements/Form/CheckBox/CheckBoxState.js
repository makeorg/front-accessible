import * as React from 'react';
import { CheckBoxComponent } from './CheckBoxComponent';

type Props = {
  /** Name of the checkbox */
  id: string,
  /** Name of the checkbox */
  name: string,
  /** Label of the checkbox */
  label: string,
  /** Input is checked */
  isChecked: boolean,
  /** function to handle check */
  handleCheck: () => void,
  /** Value of the checkbox */
  value?: string,
  /** Is input required or optional */
  required?: boolean,
};

export class CheckBoxState extends React.Component<Props, State> {
  static defaultProps = {
    value: undefined,
    required: false,
    isChecked: false,
  };

  handleCheck = () => {
    const { isChecked, handleCheck } = this.props;
    handleCheck(!isChecked);
  };

  handleEnterKey = event => {
    if (event.key === 'Enter') {
      this.handleCheck();
    }
  };

  render() {
    const { id, name, label, isChecked, value, required } = this.props;

    return (
      <CheckBoxComponent
        id={id}
        name={name}
        label={label}
        isChecked={isChecked}
        handleCheck={this.handleCheck}
        value={value}
        required={required}
        handleEnterKey={this.handleEnterKey}
      />
    );
  }
}
