import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables';

class Lock extends Component {
    lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
        allowedConnections: ['facebook', 'google-oauth2', 'twitter', 'Username-Password-Authentication'],
        auth: {
            responseType: 'token id_token',
            // audience: 'https://mcale017-neighborly.herokuapp.com/',
            audience: 'https://' + AUTH_CONFIG.domain + '/userinfo',
            sso: true,
            params: {
                scope: 'openid profile email'
            }
        },
        container: AUTH_CONFIG.container,
        languageDictionary: {
            title: "Neighborly",
            signUpTitle: "Neighborly",
            emailInputPlaceholder: "yours@neighborly.com"
        },
        theme: {
            logo: "https://i.imgur.com/uwqO6OC.png",
            primaryColor: '#FCBF32'
        },
        socialButtonStyle: 'small',
    });

    constructor(props) {
        super(props);
        this.state = { loggedIn: false };
        this.onAuthenticated = this.onAuthenticated.bind(this);

        this.onAuthenticated();
    }

    // onAuthenticated() {
    onAuthenticated = () => {
        this.lock.on('authenticated', (authResult) => {
            let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
            localStorage.setItem('access_token', authResult.accessToken);
            localStorage.setItem('id_token', authResult.idToken);
            localStorage.setItem('expires_at', expiresAt);

            this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
                if (!error) {
                    localStorage.setItem("profile", JSON.stringify(profile));

                    if (profile) {
                        this.setState({
                            loggedIn: true,
                            profile: JSON.stringify(profile)
                        })
                    }
                };
            });
        });
    }

    componentDidMount() {
        // Avoid showing Lock when hash is parsed.
        if (!(/access_token|id_token|error/.test(this.props.location.hash))) {
            this.lock.show();
        }
    }

    render() {
        const style = { marginTop: '96px' }

        return (
            !this.state.loggedIn ? (
                <div>
                    <div id={AUTH_CONFIG.container} style={style}></div>
                </div>
            ) : (
                    <Redirect to={{
                        pathname: '/',
                        state: { from: this.props.location, profile: JSON.parse(this.state.profile) }
                    }} />
                )
        );
    }
}

export default Lock;