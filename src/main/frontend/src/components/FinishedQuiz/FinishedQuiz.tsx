import {IQuiz, IState} from "../../types/types";
import classes from './FinishedQuiz.module.scss';
import Button from "../../UI/Button/Button";
import {MouseEventHandler} from "react";

interface FinishedQuizProps {
    results: IState[];
    quiz: IQuiz[];
    onRetry?: MouseEventHandler<HTMLButtonElement>;
}

const FinishedQuiz = (props: FinishedQuizProps) => {
    console.log(props.results);
    const successCount: number = props.results.filter(el=>el.value==='success').length;

    return (<div className={classes.FinishedQuiz}>
        <div>
            <ul>
                {props.quiz.map((quizItem, index) => {
                    const curEl = props.results.filter(el=>el.id===quizItem.id);
                    const cls = [
                        "fa",
                        curEl.length>0 && curEl[0].value === "error" ? "fa-times" : "fa-check",
                        classes[curEl[0].value],
                    ];

                    return (
                        <li key={index}>
                            <strong>{index + 1}</strong>.&nbsp;
                            {quizItem.question}
                            <i className={cls.join(" ")} />
                        </li>
                    );
                })}
            </ul>
            <p>
                Правильно {successCount} из {props.quiz.length}
            </p>
            <Button onClick={props.onRetry} type="primary">
                Повторить
            </Button>
            <Button type="success">Перейти в список тестов</Button>
        </div>
    </div>);
};

export default FinishedQuiz;
