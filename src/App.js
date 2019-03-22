import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Root from "./Root";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import firebase from 'firebase/app';
import CircularProgress from "@material-ui/core/CircularProgress";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
        console.log("initial loading", this.state.loading)
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user, loading: false})
            } else {
                this.setState({user: null, loading: false})
            }
        })
    }

    componentWillUnmount() {
        this.unregisterAuthObserver()
    }

    render() {
        if (this.state.loading === true) {
            return <div className='loader'>
                <CircularProgress/>
            </div>
        }
        const authenticated = firebase.auth().currentUser !== null
        return (
            <BrowserRouter>
                <Switch>
                    <PrivateRoute exact path="/" component={Root} authenticated={authenticated}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
