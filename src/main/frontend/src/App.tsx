import classes from './App.module.scss';
import Layout from './hoc/Layout/Layout'
import {Component} from "react";
import Quiz from './containers/Quiz/Quiz';

class App extends Component<any, any> {
    render() {
        return (
            <Layout>
                <h1 className={classes.myColor}>Hello WORM!</h1>
                <Quiz/>
            </Layout>
        )
    }
}

export default App;
