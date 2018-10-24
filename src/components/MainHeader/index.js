import React, { Component } from 'react';
import i18n from 'i18next';
import MainHeader from './Styled';
import MakeLogo from '../../assets/images/logo.svg';


class MainHeaderComponent extends Component {
  render() {
    return (
      <MainHeader role="banner">
        <a href="https://make.org"><h1><MainHeader.Logo src={MakeLogo} alt={i18n.t('header.logo_alt')} /></h1></a>
      </MainHeader>
    );
  }
}

export default MainHeaderComponent;
