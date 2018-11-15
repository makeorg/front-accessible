import React from 'react';
import ModernNormalizeStylesheet from '../../assets/css-in-js/ModernNormalize';
import FontLoaderContainer from '../../containers/Elements/FontLoader';
import DefaultStylesheet from '../../assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from '../../assets/css-in-js/Animations';
import { AppWrapper, MainContent, InnerContent } from '../Elements/MainElements';
import MainHeaderContainer from '../../containers/MainHeader';
import MainFooterContainer from '../../containers/MainFooter';
import ProposalSubmitContainer from '../../containers/ProposalSubmit';
import PannelContainer from '../../containers/Pannel';
import SequenceContainer from '../../containers/Sequence';

class AppComponent extends React.Component {
  render() {
    const { isSequenceCollapsed } = this.props;
    return (
      <AppWrapper>
        <ModernNormalizeStylesheet />
        <FontLoaderContainer />
        <DefaultStylesheet />
        <AnimationsStylesheet />
        <MainHeaderContainer />
        <MainContent role="main">
          <InnerContent className={isSequenceCollapsed ? 'locked-content' : ''}>
            <ProposalSubmitContainer />
            <SequenceContainer />
          </InnerContent>
        </MainContent>
        <PannelContainer />
        <MainFooterContainer />
      </AppWrapper>
    );
  }
}

export default AppComponent;
