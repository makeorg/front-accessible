import React, { Component } from 'react';
import MainHeader from './Styled';
import MakeLogo from '../../assets/images/logo.svg';


class MainHeaderComponent extends Component {
  render() {
    return (
      <MainHeader role="banner">
        <a href="https://make.org"><h1><MainHeader.Logo src={MakeLogo} alt="Aller sur le site Make.org" /></h1></a>
      </MainHeader>
    );
  }
}

export default MainHeaderComponent;
