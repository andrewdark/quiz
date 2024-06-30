import classes from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";
import {IQuiz, IState} from "../../types/types";

interface ActiveQuizProps {
    answerState: IState;
    quiz: IQuiz;
    onAnswerClick?: Function;
    quizLength: number;
    answerNumber: number;
}

const ActiveQuiz = (props: ActiveQuizProps) => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
            {props.quiz.question}
        </span>

                <small>
                    {props.answerNumber} из {props.quizLength}
                </small>
            </p>

            <AnswersList
                answerState={props.answerState}
                answers={props.quiz.answers}
                onAnswerClick={props.onAnswerClick}
            />
        </div>
    );
};

export default ActiveQuiz;
