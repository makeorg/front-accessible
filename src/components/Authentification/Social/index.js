import React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from './GoogleAuthentification/Button';

class AuthentificationSocialComponent extends React.Component {
  render() {
    const { tabIndex } = this.props;
    return (
      <Authentification>
        <FacebookAuthentificationButtonComponent tabIndex={tabIndex} />
        <GoogleAuthentificationButtonComponent tabIndex={tabIndex} />
      </Authentification>
    );
  }
}

export default AuthentificationSocialComponent;
