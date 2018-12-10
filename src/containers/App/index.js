import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from 'Assets/vars/theme';
import AppComponent from 'Components/App';
import Tracking from 'Services/Tracking';
import ErrorBoundary from './Error';

class AppContainer extends React.Component {
  componentDidMount = () => {
    Tracking.trackDisplaySequence();
  }

  render() {
    const { isSequenceCollapsed, country } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <ErrorBoundary>
          <AppComponent isSequenceCollapsed={isSequenceCollapsed} country={country} />
        </ErrorBoundary>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  const { isSequenceCollapsed } = state.sequence;
  const { country } = state.appConfig;

  return {
    isSequenceCollapsed,
    country
  };
};


export default connect(mapStateToProps)(AppContainer);
