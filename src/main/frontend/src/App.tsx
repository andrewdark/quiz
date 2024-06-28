import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout'
import {Component} from "react";

class App extends Component<any, any> {
    render() {
        return (
            <Layout>
                <h1 className={classes.myColor}>Hello WORM!</h1>
            </Layout>
        )
    }
}

export default App;
