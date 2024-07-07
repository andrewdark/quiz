import classes from './Backdrop.module.scss';
import {MouseEventHandler} from "react";

interface BackdropProps {
    onClick: MouseEventHandler<HTMLDivElement>;
    isOpen: boolean;
}

const Backdrop = (props: BackdropProps) => props.isOpen ?
    <div className={classes.Backdrop} onClick={props.onClick}/> : null;

export default Backdrop;
