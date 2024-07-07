import {Component} from "react";
import classes from './QuizCreator.module.scss';

interface QuizCreatorProps {

}

interface QuizCreatorState {

}

class QuizCreator extends Component<QuizCreatorProps, QuizCreatorState> {

    render() {
        return <div className={classes.QuizCreator}>QuizCreator</div>;

    }
}

export default QuizCreator;

