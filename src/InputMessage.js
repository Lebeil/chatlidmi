import React, {Component} from 'react';
import firebase from 'firebase/app';
import {base} from './firebaseHelper'

class InputMessage extends Component {
    state = {message: ""}

    onChange = (e) => {
        const message = e.target.value
        this.setState({message})
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            //this.addMessage()
            this.props.addMessage(this.state.message)
            this.setState({message: ""})
        }
    }

    addMessage = () => {
        const roomId = this.props.roomId
        const payload = {
            content: this.state.message,
            date: firebase.firestore.FieldValue.serverTimestamp()
        }
        base.addToCollection(`rooms/${roomId}/messages`, payload)
    }

    render() {
        return (
            <div>
                <textarea
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    value={this.state.message}/>
            </div>
        );
    }
}

export default InputMessage;