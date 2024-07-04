import {IState} from "../../types/types";
import classes from './FinishedQuiz.module.scss';
import Button from "../../UI/Button/Button";
import {MouseEventHandler} from "react";

interface FinishedQuizProps {
    results: IState[];
    quiz: any;
    onRetry?: MouseEventHandler<HTMLButtonElement>;
}

const FinishedQuiz = (props: FinishedQuizProps) => {
    return (<div className={classes.FinishedQuiz}>
        <div>
            <Button onClick={props.onRetry} type="primary">
                Повторить
            </Button>
            <Button type="success">Перейти в список тестов</Button>
        </div>
    </div>);
};

export default FinishedQuiz;
