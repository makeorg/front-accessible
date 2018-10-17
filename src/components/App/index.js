import React from 'react';
import { ThemeProvider } from 'styled-components';
import ModernNormalizeStylesheet from '../../assets/css-in-js/ModernNormalize';
import FontFacesStylesheet from '../../assets/css-in-js/FontFaces';
import DefaultStylesheet from '../../assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from '../../assets/css-in-js/Animations';
import { AppWrapper, MainContent } from '../Elements/MainElements';
import MainHeaderContainer from '../../containers/MainHeader';
import MainFooterContainer from '../../containers/MainFooter';
import ProposalSubmitContainer from '../../containers/ProposalSubmit';
import PannelContainer from '../../containers/Pannel';
import SequenceContainer from '../../containers/Sequence';
import theme from '../../assets/vars/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <ModernNormalizeStylesheet />
          <FontFacesStylesheet />
          <DefaultStylesheet />
          <AnimationsStylesheet />
          <MainHeaderContainer />
          <MainContent role="main">
            <ProposalSubmitContainer />
            <PannelContainer />
            <SequenceContainer />
          </MainContent>
          <MainFooterContainer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
