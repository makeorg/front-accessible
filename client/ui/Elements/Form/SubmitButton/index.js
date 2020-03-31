// @flow
import React, { type Node } from 'react';
import {
  IconWrapperStyle,
  ActiveButtonStyle,
} from 'Client/ui/Elements/Buttons/style';

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
  icon?: Node,
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
