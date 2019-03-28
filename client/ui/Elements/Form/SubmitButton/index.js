import * as React from 'react';
import {
  RedButtonStyle,
  IconWrapperStyle,
  GreyButtonStyle,
} from 'Client/ui/Elements/ButtonElements';

type Props = {
  /** Name of the input */
  formName: string,
  /** Icon of the input */
  icon: IconDefinition,
  /** Label of the input */
  label: string,
  /** Is input required or optional */
  id?: string,
  /** disabled interaction */
  disabled?: boolean,
};

export class SubmitButton extends React.Component<Props> {
  static defaultProps = {
    id: undefined,
    disabled: false,
  };

  render() {
    const { formName, icon, id, label, disabled } = this.props;
    const ButtonStyled = disabled ? GreyButtonStyle : RedButtonStyle;
    return (
      <ButtonStyled type="submit" form={formName} id={id} disabled={disabled}>
        <IconWrapperStyle aria-hidden>{icon}</IconWrapperStyle>
        {label}
      </ButtonStyled>
    );
  }
}
