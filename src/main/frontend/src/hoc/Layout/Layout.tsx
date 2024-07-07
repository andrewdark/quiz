import classes from "./Layout.module.scss";
import { Component } from "react";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";
import Backdrop from "../../UI/Backdrop/Backdrop";

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
                <Backdrop onClick={this.toggleMenuHandler} isOpen={this.state.menu} />
                <Drawer isOpen={this.state.menu} onClose={this.toggleMenuHandler}/>
                <main>{this.props.children}</main>
            </div>
        );
    }
}

export default Layout;
