import React from 'react';
import Authentification from '../Styled';
import FacebookAuthentificationButtonComponent from './FacebookAuthentificationButton';
import GoogleAuthentificationButtonComponent from './GoogleAuthentificationButton';

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
