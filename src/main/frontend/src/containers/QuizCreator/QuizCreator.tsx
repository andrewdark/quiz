import {Component, FormEvent} from "react";
import classes from './QuizCreator.module.scss';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {IAnswer, IInputState, IQuiz, IValidation, IValidInputState} from "../../types/types";
import {createControl} from "../../form/FormControl";

interface QuizCreatorProps {

}

interface QuizCreatorState {
    quiz: IQuiz[];
    question: IValidInputState;
    formControls: IValidInputState[];
}

function createQuestion(): IValidInputState {
    const input: IInputState = {
        id: 0,
        value: '',
        type: 'text',
        label: 'Enter your question'
    };
    const validation: IValidation = {
        required: true,
        minLength: 6,
        template: false
    }
    return createControl(input, validation);
}

function createFormControls(): IValidInputState[] {
    const controls: IValidInputState[] = [];

    const input1: IInputState = {
        id: 1,
        value: 'Answer-1',
        type: 'text',
        label: 'Answer 1'
    };
    const validation1: IValidation = {
        required: true,
        minLength: 6,
        template: false
    }
    const control1 = createControl(input1, validation1);

    const input2: IInputState = {
        id: 2,
        value: 'Answer-2',
        type: 'text',
        label: 'Answer 2'
    };
    const validation2: IValidation = {
        required: true,
        minLength: 6,
        template: false
    }
    const control2 = createControl(input2, validation2);

    const input3: IInputState = {
        id: 3,
        value: 'Answer-3',
        type: 'text',
        label: 'Answer 3'
    };
    const validation3: IValidation = {
        required: true,
        minLength: 6,
        template: false
    }
    const control3 = createControl(input3, validation3);

    const input4: IInputState = {
        id: 4,
        value: 'Answer-4',
        type: 'text',
        label: 'Answer 4'
    };
    const validation4: IValidation = {
        required: true,
        minLength: 6,
        template: false
    }
    const control4 = createControl(input4, validation4);

    controls.push(control1, control2, control3, control4);
    return controls;
}

class QuizCreator extends Component<QuizCreatorProps, QuizCreatorState> {

    state = {
        quiz: [] as IQuiz[],
        question: createQuestion(),
        formControls: createFormControls()
    }

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
                    <Input label={this.state.question.label} type={this.state.question.type}/>
                    <hr/>
                    {this.state.formControls.map((el, index) => {
                        return (<Input label={el.label} type={el.type}/>);
                    })}
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

