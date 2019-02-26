import * as React from 'react';
import { CheckBoxComponent } from './CheckBoxComponent';

type Props = {
  /** Name of the checkbox */
  id: string,
  /** Name of the checkbox */
  name: string,
  /** Label of the checkbox */
  label: string,
  /** Value of the checkbox */
  value?: string,
  /** Is input required or optional */
  required?: boolean,
  /** Tabindex for interactive items */
  tabIndex?: number,
};

type State = {
  /** Name of the checkbox */
  isChecked: boolean,
};

export class CheckBoxState extends React.Component<Props, State> {
  static defaultProps = {
    value: undefined,
    required: false,
    tabIndex: 0,
  };

  state = {
    isChecked: false,
  };

  handleLabelClick = () => {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });
  };

  handleEnterKey = event => {
    if (event.key === 'Enter') {
      this.handleLabelClick();
    }
  };

  render() {
    return (
      <CheckBoxComponent
        {...this.props}
        {...this.state}
        handleLabelClick={this.handleLabelClick}
        handleEnterKey={this.handleEnterKey}
      />
    );
  }
}
