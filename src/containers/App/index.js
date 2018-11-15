import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from '../../assets/vars/theme';
import AppComponent from '../../components/App';

class AppContainer extends React.Component {
  render() {
    const {
      isSequenceCollapsed
    } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppComponent isSequenceCollapsed={isSequenceCollapsed} />
      </ThemeProvider>
    );
  }
}


const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;

  return {
    isSequenceCollapsed
  };
};


export default connect(mapStateToProps)(AppContainer);
