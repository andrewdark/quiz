import classes from "./Button.module.scss";
import React, {MouseEventHandler} from "react";

interface ButtonProps {
    type?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: React.ReactChild | React.ReactNode;
}

const Button = (props: ButtonProps) => {

    const cls = [classes.Button, classes[props.type]];
    return (
        <button
            className={cls.join(" ")}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
