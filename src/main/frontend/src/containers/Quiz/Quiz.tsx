import React, {Component} from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import {IQuiz, IState} from "../../types/types";

interface QuizProps {
    children?: React.ReactChild | React.ReactNode;
}

interface QuizState {
    results?: IState[];
    isFinished?: boolean;
    activeQuestion?: number;
    answerState?: IState;
    quiz?: IQuiz[];
}

class Quiz extends Component<QuizProps, QuizState> {
    state = {
        results: [] as IState[],
        isFinished: false,
        activeQuestion: 0,
        answerState: {},
        quiz: [
            {
                question: "Какого цвета небо?",
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: "Черный", id: 1},
                    {text: "Синий", id: 2},
                    {text: "Красный", id: 3},
                    {text: "Зеленый", id: 4},
                ],
            },
            {
                question: "В каком году рак на горе свиснет?",
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: "1800", id: 1},
                    {text: "1902", id: 2},
                    {text: "2103", id: 3},
                    {text: "2203", id: 4},
                ],
            },
        ],
    };

    onAnswerClickHandler = (answerId: number): void => {
        console.log("clicked: " + answerId)
        const question: IQuiz = this.state.quiz[this.state.activeQuestion];
        const results: IState[] = this.state.results;

        if (question.rightAnswerId === answerId) {
            const state: IState = {id: answerId, value: "success"};
            results.push({id: question.id, value: "success"});
            this.setState({
                answerState: state,
                results
            });
            const timeout = window.setTimeout(() => {
                if (this.isQuizFinished()) {
                    this.setState({
                        isFinished: true,
                    });
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState: {id:-1},
                    });
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            const state: IState = {id: answerId, value: "error"};
            results.push({id: question.id, value: "error"});
            this.setState({
                answerState: state,
                results
            });
        }


    };

    isQuizFinished(): boolean {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    retryHandler = () => {
        this.setState({
            activeQuestion: 0,
            answerState: {},
            isFinished: false,
            results: [] as IState[],
        });
    };

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>

                    {this.state.isFinished ? (
                        <FinishedQuiz
                            results={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                    ) : (

                        <ActiveQuiz
                            answerState={this.state.answerState}
                            quiz={this.state.quiz[this.state.activeQuestion]}
                            onAnswerClick={this.onAnswerClickHandler}
                            quizLength={this.state.quiz.length}
                            answerNumber={this.state.activeQuestion + 1}
                        />
                    )}
                </div>
            </div>
        );
    }
}

export default Quiz;
