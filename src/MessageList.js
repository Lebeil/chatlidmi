import React, {Component} from 'react';
import {base} from "./firebaseHelper";

class MessageList extends Component {
    state = {messages: []}

    componentWillMount() {
        /*db.collection("rooms").doc("h8wxruxnv4EFEXczJeDq").collection("messages")
            .onSnapshot(querySnapshot => {
                const messages = []
                querySnapshot.forEach(snapshot => {
                    const message = {
                        ...snapshot.data(),
                        id: snapshot.id
                    }
                    messages.push(message)
                })
                this.setState({messages})
            })*/
        base.bindCollection('rooms/h8wxruxnv4EFEXczJeDq/messages', {
            context: this,
            state: 'messages',
            withIds: true,
            query: (ref) => ref.orderBy('date')
        });
    }


    render() {
        return (
            <div>
                {this.state.messages.map(message =>
                    <p key={message.id}>
                        {message.content}
                    </p>
                )}
            </div>
        );
    }
}

export default MessageList;

