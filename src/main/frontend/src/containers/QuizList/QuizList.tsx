import {Component, ReactNode} from "react";
import classes from './QuizList.module.scss';
import {NavLink} from "react-router-dom";

interface QuizListProps {

}

interface QuizListState {

}

class QuizList extends Component<QuizListProps, QuizListState> {

    renderQuizes(): ReactNode {
        return [1, 2, 3].map((quiz, index) => {
            return (<li key={index}><NavLink to={'/quiz/' + quiz}>Quiz: {quiz}</NavLink></li>);
        });
    }

    render() {
        return (<div className={classes.QuizList}>
            <div>
                <h1>Quiz List</h1>
                <ul>
                    {this.renderQuizes()}
                </ul>
            </div>

        </div>);

    }
}

export default QuizList;

