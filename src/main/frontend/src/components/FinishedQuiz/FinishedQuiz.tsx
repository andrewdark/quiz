import {IState} from "../../types/types";

interface FinishedQuizProps {
    results: IState[];
    quiz: any;
    onRetry: Function;

}

const FinishedQuiz = (props: FinishedQuizProps) => {
    return (<h1>Finish</h1>);
};

export default FinishedQuiz;
