import {Component, FormEvent} from "react";
import classes from './QuizCreator.module.scss';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {IInputState, IValidation} from "../../types/types";

interface QuizCreatorProps {

}

interface QuizCreatorState {

}

class QuizCreator extends Component<QuizCreatorProps, QuizCreatorState> {
    submitHandler = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        console.log("Send data to server ...");
    }

    addQuestionHandler = (): void => {
        console.log("Add Question to mem ...");
    }

    createQuizHandler = (): void => {
        console.log("Sent new Quiz to server ...");
    }

    render() {
        return <div className={classes.QuizCreator}>
            <div>
                <h1>Quiz Creator</h1>
                <form onSubmit={this.submitHandler}>
                    <Input label={"Label_1"}/>
                    <hr/>
                    <Input label={"Label_2"}/>
                    <Input label={"Label_3"}/>
                    <Input label={"Label_4"}/>
                    <Input label={"Label_5"}/>
                    <select></select>
                    <br/>
                    <Button type='primary' onClick={this.addQuestionHandler}>Add question</Button>
                    <Button type='success' onClick={this.createQuizHandler}>Create Quiz</Button>
                </form>

            </div>
        </div>;

    }
}

export default QuizCreator;

