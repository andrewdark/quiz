import {Component} from "react";
import classes from './QuizList.module.scss';

interface QuizListProps {

}

interface QuizListState {

}

class QuizList extends Component<QuizListProps, QuizListState> {

    render() {
        return <div className={classes.QuizList}>QuizList</div>;

    }
}

export default QuizList;

