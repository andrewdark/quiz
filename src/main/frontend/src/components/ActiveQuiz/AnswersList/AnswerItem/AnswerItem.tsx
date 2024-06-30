import classes from "./AnswerItem.module.scss";
import {IAnswer} from "../../../../types/types";
import React from "react";

interface AnswerItemProps{
    state?: string;
    answer: IAnswer;
    onAnswerClick: Function;
}

const AnswerItem = (props: AnswerItemProps) => {
    const cls = [classes.AnswerItem];

    if (props.state) {
        cls.push(classes[props.state]);
    }

    return (
        <li
            className={cls.join(" ")}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    );
};

export default AnswerItem;
