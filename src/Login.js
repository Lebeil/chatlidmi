import React, {Component} from 'react';
import {uiConfig} from "./firebaseHelper";
import firebase from "firebase/app";
import {StyledFirebaseAuth} from "react-firebaseui";

class Login extends Component {
    render() {
        return (
            <div>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </div>
        );
    }
}

export default Login;
