import React, {Component} from 'react';
import {base} from './firebaseHelper'
import InputMessage from "./InputMessage";
import firebase from 'firebase/app';
import MessageList from "./MessageList";

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
                <MessageList/>
                <InputMessage roomId={roomId} addMessage={this.addMessage}/>
            </div>
        );
    }
}

export default App;
