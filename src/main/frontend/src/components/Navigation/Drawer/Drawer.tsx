import classes from "./Drawer.module.scss";
import {NavLink} from "react-router-dom";

interface DrawerProps {
    isOpen: boolean;
    onClose: Function;
}

const LINKS = [{to: '/', label: 'Quiz list', exact: true},
    {to: '/auth', label: 'Auth', exact: true},
    {to: '/create-quiz', label: 'Create quiz', exact: true}
];


function renderLink(onClose: Function) {

    return LINKS.map((link, index) => {
        return (
            <li key={index}>
                <NavLink to={link.to} onClick={() => {
                    onClose();
                }}>{link.label}</NavLink>
            </li>
        );
    });
}

const Drawer = (props: DrawerProps) => {
    const cls = [classes.Drawer];
    if (!props.isOpen) {
        cls.push(classes.close);
    }
    return (
        <>
            <nav className={cls.join(" ")}>
                <ul>{renderLink(props.onClose)}</ul>
            </nav>
        </>
    );
};

export default Drawer;
