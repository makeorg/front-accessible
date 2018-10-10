import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ModernNormalize from './assets/css-in-js/ModernNormalize';
import FontFaces from './assets/css-in-js/FontFaces';
import DefaultStyle from './assets/css-in-js/DefaultStyle';
import { AppWrapper, MainContent } from './components/Styled/MainElements';
import MainHeaderContainer from './containers/MainHeaderContainer';
import MainFooterContainer from './containers/MainFooterContainer';
import theme from './assets/vars/theme';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModernNormalize />
          <FontFaces />
          <DefaultStyle />
          <MainHeaderContainer />
          <MainContent role="main" />
          <MainFooterContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
