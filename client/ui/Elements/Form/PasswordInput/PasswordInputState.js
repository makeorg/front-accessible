import * as React from 'react';
import { type TypeErrorObject } from 'Shared/types/api';
import { PasswordInputComponent } from './PasswordInputComponent';

type Props = {
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
  errors?: TypeErrorObject[],
  /** Is input required or optional */
  required?: boolean,
};

type State = {
  /** Boolean toggled when password is shown / hidden */
  isPasswordDisplayed: boolean,
};

export class PasswordInputState extends React.Component<Props, State> {
  static defaultProps = {
    errors: undefined,
    required: true,
  };

  state = {
    isPasswordDisplayed: false,
  };

  toggleIsPasswordDisplayed = () => {
    const { isPasswordDisplayed } = this.state;
    this.setState({ isPasswordDisplayed: !isPasswordDisplayed });
  };

  render() {
    return (
      <PasswordInputComponent
        {...this.props}
        {...this.state}
        toggleIsPasswordDisplayed={this.toggleIsPasswordDisplayed}
      />
    );
  }
}
