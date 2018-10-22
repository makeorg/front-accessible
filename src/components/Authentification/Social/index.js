import React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentification/Button';
import GoogleAuthentificationButtonComponent from './GoogleAuthentification/Button';

class AuthentificationSocialComponent extends React.Component {
  render() {
    return (
      <Authentification>
        <FacebookAuthentificationButtonComponent />
        <GoogleAuthentificationButtonComponent />
      </Authentification>
    );
  }
}

export default AuthentificationSocialComponent;
