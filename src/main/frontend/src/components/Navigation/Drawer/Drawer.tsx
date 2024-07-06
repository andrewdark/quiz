import classes from "./Drawer.module.css";

const LINKS = ["one", "two", "three"];

function renderLink() {
    return LINKS.map((link, index) => {
        return (
            <li key={index}>
                <a href="/">LINK {link}</a>
            </li>
        );
    });
}

interface DrawerProps{
    isOpen: boolean;
}

const Drawer = (props) => {
    const cls = [classes.Drawer];
    if (!props.isOpen) {
        cls.push(classes.close);
    }
    return (
        <>
            <nav className={cls.join(" ")}>
                <ul>{renderLink()}</ul>
            </nav>
        </>
    );
};

export default Drawer;
