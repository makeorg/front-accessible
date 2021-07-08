// @flow
import React, { type Node } from 'react';
import { ActiveButtonStyle } from 'Client/ui/Elements/Buttons/style';

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
  'data-cy-button': dataCyButton,
}: Props) => (
  <ActiveButtonStyle
    type="submit"
    form={formName}
    id={id}
    disabled={disabled}
    data-cy-button={dataCyButton}
  >
    {icon}
    {label}
  </ActiveButtonStyle>
);

SubmitButton.defaultProps = {
  id: undefined,
  disabled: false,
};
