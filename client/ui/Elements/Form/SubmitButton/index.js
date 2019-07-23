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

export const SubmitButton = ({
  formName,
  icon,
  id,
  label,
  disabled,
}: Props) => {
  return (
    <ActiveButtonStyle
      type="submit"
      form={formName}
      id={id}
      disabled={disabled}
    >
      {icon && <IconWrapperStyle aria-hidden>{icon}</IconWrapperStyle>}
      {label}
    </ActiveButtonStyle>
  );
};

SubmitButton.defaultProps = {
  id: undefined,
  disabled: false,
};
