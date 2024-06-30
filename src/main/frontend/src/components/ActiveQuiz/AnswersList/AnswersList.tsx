import classes from "./AnswersList.module.scss";
import AnswerItem from "./AnswerItem/AnswerItem";
import {IAnswer, IState} from "../../../types/types";

interface AnswersListProps {
    answerState?: IState;
    answers: IAnswer[];
    onAnswerClick?: Function;
}

const AnswersList = (props: AnswersListProps) => {
    return (
        <ul className={classes.AnswersList}>
            {props.answers.map((answer: IAnswer, index: number) => {
                return (
                    <AnswerItem key={index}
                                answer={answer}
                                onAnswerClick={props.onAnswerClick}
                                state={props.answerState ? props.answerState.value : null}
                    />
                );
            })}
        </ul>
    );
};

export default AnswersList;
