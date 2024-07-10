import {Component} from "react";
import classes from './Auth.module.scss';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {IInputState} from "../../types/types";

interface AuthProps {

}

type FormControlsType = {
    email: IInputState;
    password: IInputState
};

interface AuthState {
    isFormValid: boolean;
    formControls: FormControlsType;
}

class Auth extends Component<AuthProps, AuthState> {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 0,
                    template: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    template: false
                }
            }

        }
    };
    loginHandler = (): void => {
    };
    regHandler = (): void => {
    };
    submitHandler = (): void => {
    };

    render() {
        return <div className={classes.Auth}>
            <div>
                <h1>AUTHENTICATION</h1>
                <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    <Input label="Email" type="text"/>
                    <Input label="Passwd" type="text"/>
                    <Button type="success" onClick={this.loginHandler}>Login</Button>
                    <Button type="primary" onClick={this.regHandler}>Registration</Button>
                </form>
            </div>
        </div>;

    }
}

export default Auth;

