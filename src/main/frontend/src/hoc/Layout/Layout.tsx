import classes from "./Layout.module.scss";
import { Component } from "react";

class Layout extends Component<any, any> {
    state = {
        menu: false,
    };

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu,
        });
    };

    render() {
        return (
            <div className={classes.Layout}>
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
