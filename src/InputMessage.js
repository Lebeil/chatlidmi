import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";

class InputMessage extends Component {
    state = {message: ""}

    onChange = (e) => {
        const message = e.target.value
        this.setState({message})
    }

    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.addMessage(this.state.message)
            this.setState({message: ""})
        }
    }

    render() {
        return (
            <div>
                <TextField
                    id="outlined-full-width"
                    onChange={this.onChange}
                    onKeyPress={this.onKeyPress}
                    value={this.state.message}
                    label="Votre message"
                    placeholder="Votre message"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        );
    }
}

export default InputMessage;
