import * as React from 'react';
import {
  IconWrapperStyle,
  ActiveButtonStyle,
} from 'Client/ui/Elements/ButtonElements';

type Props = {
  /** Name of the input */
  formName: string,
  /** Label of the input */
  label: string,
  /** Is input required or optional */
  id?: string,
  /** disabled interaction */
  disabled?: boolean,
  /** Icon of the input */
  icon?: IconDefinition,
};

export class SubmitButton extends React.Component<Props> {
  static defaultProps = {
    id: undefined,
    disabled: false,
  };

  render() {
    const { formName, icon, id, label, disabled } = this.props;
    return (
      <ActiveButtonStyle
        type="submit"
        form={formName}
        id={id}
        disabled={disabled}
        aria-disabled={disabled}
      >
        {icon && <IconWrapperStyle aria-hidden>{icon}</IconWrapperStyle>}
        {label}
      </ActiveButtonStyle>
    );
  }
}
