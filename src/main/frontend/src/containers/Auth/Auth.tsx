import {Component} from "react";
import classes from './Auth.module.scss';

interface AuthProps {

}

interface AuthState {

}

class Auth extends Component<AuthProps, AuthState> {

    render() {
        return <div className={classes.Auth}>AUTH</div>;

    }
}

export default Auth;

