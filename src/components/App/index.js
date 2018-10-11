import React from 'react';
import { ThemeProvider } from 'styled-components';
import ModernNormalize from '../../assets/css-in-js/ModernNormalize';
import FontFaces from '../../assets/css-in-js/FontFaces';
import DefaultStyle from '../../assets/css-in-js/DefaultStyle';
import { AppWrapper, MainContent } from '../Styled/MainElements';
import MainHeaderContainer from '../../containers/MainHeader';
import MainFooterContainer from '../../containers/MainFooter';
import ProposalSubmitContainer from '../../containers/ProposalSubmit';
import theme from '../../assets/vars/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModernNormalize />
          <FontFaces />
          <DefaultStyle />
          <MainHeaderContainer />
          <MainContent role="main">
            <ProposalSubmitContainer />
          </MainContent>
          <MainFooterContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
