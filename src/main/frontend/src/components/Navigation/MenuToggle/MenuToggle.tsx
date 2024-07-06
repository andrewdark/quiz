import classes from "./MenuToggle.module.scss";
import {MouseEventHandler} from "react";

interface MenuToggleProps{
    isOpen: boolean;
    onToggle?: MouseEventHandler<HTMLButtonElement>;
}

const MenuToggle = (props:MenuToggleProps) => {
    const cls = [classes.MenuToggle, "fa"];
    if (props.isOpen) {
        cls.push("fa-times");
        cls.push(classes.open);
    } else {
        cls.push("fa-bars");
    }

    return <i className={cls.join(" ")} onClick={props.onToggle}></i>;
};

export default MenuToggle;
