import {ChangeEvent, Component, FormEvent} from "react";
import classes from './Auth.module.scss';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {IInputState, IValidation} from "../../types/types";

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
                    minLength: 4,
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
    submitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
    };

    validateControl(value: string, validation: IValidation) {
        if (!validation) {
            return true
        }

        let isValid = true

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        }


        if (validation.template) {
            isValid = value.includes("@") && value.length >= validation.minLength && isValid
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    onChangeHandler = (event: ChangeEvent<HTMLInputElement>, controlName: string) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName as keyof FormControlsType]}

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName as keyof FormControlsType] = control

        let isFormValid = true

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name as keyof FormControlsType].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName as keyof FormControlsType]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return <div className={classes.Auth}>
            <div>
                <h1>AUTHENTICATION</h1>
                <form onSubmit={this.submitHandler} className={classes.AuthForm}>
                    {this.renderInputs()}
                    <Button type="success" onClick={this.loginHandler} disabled={!this.state.isFormValid}>Login</Button>
                    <Button type="primary" onClick={this.regHandler} disabled={!this.state.isFormValid}>Registration</Button>
                </form>
            </div>
        </div>;

    }
}

export default Auth;

