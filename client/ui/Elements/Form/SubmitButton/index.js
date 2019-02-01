
import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SmallRedButton, IconInButton } from 'Client/ui/Elements/ButtonElements';

type Props = {
  /** Name of the input */
  formName: string,
  /** Icon of the input */
  icon: IconDefinition,
  /** Label of the input */
  label: string,
  /** Is input required or optional */
  id?: string,
  /** Tabindex for interactive items */
  tabIndex?: number
}

export class SubmitButton extends React.Component<Props> {
  static defaultProps = {
    id: undefined,
    tabIndex: 0
  }

  render() {
    const {
      formName,
      icon,
      id,
      label,
      tabIndex
    } = this.props;

    return (
      <SmallRedButton
        type="submit"
        form={formName}
        tabIndex={tabIndex}
        id={id}
      >
        <IconInButton>
          <FontAwesomeIcon icon={icon} />
        </IconInButton>
        {label}
      </SmallRedButton>
    );
  }
}
