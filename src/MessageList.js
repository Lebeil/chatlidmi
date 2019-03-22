import React, {Component} from 'react';
import {base} from "./firebaseHelper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import firebase from "firebase/app";

class MessageList extends Component {
    state = {messages: []}

    componentWillMount() {
        base.bindCollection('rooms/h8wxruxnv4EFEXczJeDq/messages', {
            context: this,
            state: 'messages',
            withIds: true,
            query: (ref) => ref.orderBy('date')
        });
    }

    render() {
        const me = firebase.auth().currentUser.uid
        return (
            <div>
                {this.state.messages.map(message => {
                        const isMe = me === message.authorId
                        const className = isMe ? 'chat-bubble-container-me' : 'chat-bubble-container';
                        return <div className={className} key={message.id}>
                            <Card className='chat-bubble'>
                                <CardContent>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="Recipe">
                                                N
                                            </Avatar>
                                        }
                                        title={message.authorName}
                                    />
                                    <Typography component="p">
                                        {message.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    }
                )}
            </div>
        );
    }
}

export default MessageList

