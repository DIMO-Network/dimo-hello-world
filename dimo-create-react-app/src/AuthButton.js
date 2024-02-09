import React from 'react';
import Cookie from 'js-cookie';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
const AUTH_URL = `${process.env.REACT_APP_AUTH_URL}/auth`;

class AuthButton extends React.Component {
  handleAuth = () => {
    Cookie.remove('access_token');
    // Perform the authentication call
    window.location.href = `${AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=openid email&response_type=code`;
  };

  render() {
    return <button onClick={this.handleAuth}>Authenticate with DIMO</button>;
  }
}

export default AuthButton;
