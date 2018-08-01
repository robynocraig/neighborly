import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'mcale017.auth0.com',
    clientID: 'WW2TpRT8RPw00N1el1j6LhoeplTfS3Jt',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://mcale017.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}