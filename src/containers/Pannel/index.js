import React from 'react';
import PannelComponent from '../../components/Pannel';

class PannelContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPannelOpen: true
    };
    this.closePannel = this.closePannel.bind(this);
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
      />
    );
  }
}

export default PannelContainer;
