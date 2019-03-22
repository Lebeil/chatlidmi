import React, {Component} from 'react';
import {base} from "./firebaseHelper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core";

const styles = {
    card: {
        width: 'auto',
        margin: 8,
        display: 'inline-block',
        borderRadius: 16
    }
};

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
        const {classes} = this.props
        return (
            <div>
                {this.state.messages.map(message =>
                    <div style={{display: 'block'}} key={message.id}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography component="p">
                                    {message.content}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        );
    }
}

export default withStyles(styles)(MessageList)

