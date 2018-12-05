/* @flow */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModernNormalizeStylesheet from '../../assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from '../../assets/css-in-js/FontFaces';
import DefaultStylesheet from '../../assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from '../../assets/css-in-js/Animations';
import { AppWrapper, MainContent } from '../Elements/MainElements';
import MainHeaderContainer from '../../containers/MainHeader';
import MainFooterContainer from '../../containers/MainFooter';
import PannelContainer from '../../containers/Pannel';
import SequencePage from '../../pages/Consultation/Sequence';
import NotFoundPage from '../../pages/NotFound';
import HomePage from '../../pages/Home';

/* type Props = {
  isSequenceCollapsed: boolean
}; */

const AppComponent = () => (
  <AppWrapper>
    <ModernNormalizeStylesheet />
    <FontFacesStylesheet />
    <DefaultStylesheet />
    <AnimationsStylesheet />
    <MainHeaderContainer />
    <MainContent role="main">
      <Switch>
        <Route exact path="/:country" component={HomePage} />
        <Route path="/:country/consultation/:questionSlug/selection" component={SequencePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </MainContent>
    <PannelContainer />
    <MainFooterContainer />
  </AppWrapper>
);

export default AppComponent;
