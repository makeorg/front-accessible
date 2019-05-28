// @flow
import React from 'react';
import { type Sharing as TypeSharing } from 'Shared/types/sequence';
import { MobileSharingComponent } from './MobileSharingComponent';

type Props = {
  sharingParams: TypeSharing,
};
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
    const { sharingParams } = this.props;
    return (
      <MobileSharingComponent
        isExpanded={isExpanded}
        sharingParams={sharingParams}
        toggleExpand={this.toggleExpand}
      />
    );
  }
}
