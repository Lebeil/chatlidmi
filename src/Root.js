import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MessageList from "./MessageList";
import InputMessage from "./InputMessage";
import {base} from "./firebaseHelper";
import firebase from 'firebase/app';

class Root extends Component {
    state = {roomId: "h8wxruxnv4EFEXczJeDq"}

    addMessage = (message) => {
        const {roomId} = this.state
        const payload = {
            content: message,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        base.addToCollection(`rooms/${roomId}/messages`, payload)
    }

    logOut = () => {
        firebase.auth().signOut()
    }

    render() {
        const {roomId} = this.state
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit" onClick={this.logOut}>Logout</Button>
                    </Toolbar>
                </AppBar>
                <div style={{marginBottom: 100}}>
                    <MessageList/>
                </div>
                <div className="input-container">
                    <InputMessage roomId={roomId} addMessage={this.addMessage}/>
                </div>
            </div>
        );
    }
}

export default Root;
