import React, {Component} from 'react';
import {base} from './firebaseHelper'
import InputMessage from "./InputMessage";
import firebase from 'firebase/app';
import MessageList from "./MessageList";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class App extends Component {
    state = {roomId: "h8wxruxnv4EFEXczJeDq"}

    addMessage = (message) => {
        const {roomId} = this.state
        const payload = {
            content: message,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        base.addToCollection(`rooms/${roomId}/messages`, payload)
    }

    render() {
        const {roomId} = this.state
        return (
            <div className="App">
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit">Login</Button>
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

export default App;
