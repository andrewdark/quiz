import classes from "./Layout.module.scss";
import { Component } from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

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
                <MenuToggle
                    onToggle={this.toggleMenuHandler}
                    isOpen={this.state.menu}
                ></MenuToggle>
                <Drawer isOpen={this.state.menu} />
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
