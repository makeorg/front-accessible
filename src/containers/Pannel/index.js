import React from 'react';
import PannelComponent from '../../components/Pannel';

class PannelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPannelOpen: true
    };
    this.openPannel = this.openPannel.bind(this);
    this.closePannel = this.closePannel.bind(this);
  }

  openPannel() {
    this.setState({ isPannelOpen: true });
  }

  closePannel() {
    this.setState({ isPannelOpen: false });
  }

  render() {
    const { isPannelOpen } = this.state;
    return (
      <PannelComponent
        isPannelOpen={isPannelOpen}
        closePannel={this.closePannel}
        openPannel={this.openPannel}
      />
    );
  }
}

export default PannelContainer;
