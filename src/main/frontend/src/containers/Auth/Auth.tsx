import {Component} from "react";
import classes from './Auth.module.scss';
import Button from "../../UI/Button/Button";

interface AuthProps {

}

interface AuthState {

}

class Auth extends Component<AuthProps, AuthState> {

    loginHandler = ():void =>{};
    regHandler = ():void =>{};
    submitHandler = ():void =>{};

    render() {
        return <div className={classes.Auth}>
            <div>
                <h1>AUTHENTICATION</h1>
                <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <Button type="success" onClick={this.loginHandler}>Login</Button>
                    <Button type="primary" onClick={this.regHandler}>Registration</Button>
                </form>
            </div>
        </div>;

    }
}

export default Auth;

