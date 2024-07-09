import classes from './Input.module.scss';
import {ChangeEventHandler} from "react";

interface InputProps {
    label: string;
    type?: string;
    errorMessage?: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    valid?: boolean;
    touched?: boolean;
    shouldValidate?: boolean;
}

function isInvalid({valid, touched, shouldValidate}: InputProps): boolean {
    return !valid && shouldValidate && touched
}

const Input = (props: InputProps) => {
    const inputType: string = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType}-${Math.random()}` //uniq random string for id

    if (isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                type={inputType}
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            />

            {
                isInvalid(props)
                    ? <span>{props.errorMessage || 'Press the correct value'}</span>
                    : null
            }
        </div>
    )
}

export default Input;
