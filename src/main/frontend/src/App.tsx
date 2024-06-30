import Layout from './hoc/Layout/Layout'
import {Component} from "react";
import Quiz from './containers/Quiz/Quiz';

class App extends Component<any, any> {
    render() {
        return (
            <Layout>
                <Quiz/>
            </Layout>
        )
    }
}

export default App;
