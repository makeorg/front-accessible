/* @flow */

import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainHeaderContainer from 'Containers/MainHeader';
import PannelContainer from 'Containers/Pannel';
import SequencePage from 'Pages/Consultation/Sequence';
import NotFoundPage from 'Pages/NotFound';
import HomePage from 'Pages/Home';
import ModernNormalizeStylesheet from 'Assets/css-in-js/ModernNormalize';
import { FontFacesStylesheet } from 'Assets/css-in-js/FontFaces';
import DefaultStylesheet from 'Assets/css-in-js/DefaultStyle';
import AnimationsStylesheet from 'Assets/css-in-js/Animations';
import { AppWrapper, MainContent } from 'Components/Elements/MainElements';

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
  </AppWrapper>
);

export default AppComponent;
