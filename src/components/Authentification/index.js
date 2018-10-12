import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Authentification from './Styled';
import { IconInButton } from '../Elements/ButtonElements';

class AuthentificationComponent extends React.Component {
  render() {
    return (
      <Authentification>
        <Authentification.FacebookButton>
          <IconInButton>
            <FontAwesomeIcon icon={faFacebookF} />
          </IconInButton>
          Facebook
        </Authentification.FacebookButton>
        <Authentification.GoogleButton>
          <IconInButton>
            <FontAwesomeIcon icon={faGoogle} />
          </IconInButton>
          Google
        </Authentification.GoogleButton>
      </Authentification>
    );
  }
}

export default AuthentificationComponent;
