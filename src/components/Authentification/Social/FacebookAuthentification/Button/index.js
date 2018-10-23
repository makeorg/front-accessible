import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { IconInButton, FacebookButton } from '../../../../Elements/ButtonElements';
import FacebookAuthentificationComponent from '..';

const renderFacebookLogin = tabIndex => renderProps => (
  <FacebookButton onClick={renderProps.onClick} tabIndex={tabIndex}>
    <IconInButton>
      <FontAwesomeIcon icon={faFacebookF} />
    </IconInButton>
    Facebook
  </FacebookButton>
);

class FacebookAuthentificationButtonComponent extends React.Component {
  render() {
    const { tabIndex } = this.props;
    return (
      <FacebookAuthentificationComponent {...this.props} render={renderFacebookLogin(tabIndex)} />
    );
  }
}

export default FacebookAuthentificationButtonComponent;
