import React from 'react';
import { MobileSharingComponent } from './MobileSharingComponent';

type State = {
  isExpanded: boolean,
};

export class MobileSharingContainer extends React.Component<Props, State> {
  state = {
    isExpanded: false,
  };

  toggleExpand = () => {
    this.setState(prevState => ({
      ...prevState,
      isExpanded: !prevState.isExpanded,
    }));
  };

  render() {
    const { isExpanded } = this.state;
    return (
      <MobileSharingComponent
        isExpanded={isExpanded}
        toggleExpand={this.toggleExpand}
      />
    );
  }
}
