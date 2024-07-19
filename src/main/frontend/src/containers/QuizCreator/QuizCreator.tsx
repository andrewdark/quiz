import {ChangeEvent, Component, FormEvent} from "react";
import classes from './QuizCreator.module.scss';
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import {IAnswer, IInputState, IQuiz, IValidation, IValidInputState} from "../../types/types";
import {createControl, validateControl} from "../../form/FormControl";
import Select from '../../UI/Select/Select';

interface QuizCreatorProps {

}

interface QuizCreatorState {
    quiz?: IQuiz[];
    question?: IValidInputState;
    formControls?: IValidInputState[];
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
        value: '',
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
        value: '',
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
        value: '',
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
        value: '',
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
    onChangeHandler = (event: ChangeEvent<HTMLInputElement>, id: number) => {

        const formControls = this.state.formControls;
        const control = formControls.find(el => el.id === id);
        control.value = event.target.value;
        control.touched = true;
        control.valid = validateControl(event.target.value, control.validation);

        this.setState({
            formControls:formControls
        });
    }

    render() {
        return <div className={classes.QuizCreator}>
            <div>
                <h1>Quiz Creator</h1>
                <form onSubmit={this.submitHandler}>
                    <Input label={this.state.question.label} type={this.state.question.type}/>
                    <hr/>
                    {this.state.formControls.map((control, index) => {
                        return (<Input key={control.label + index}
                                       type={control.type}
                                       value={control.value}
                                       valid={control.valid}
                                       touched={control.touched}
                                       label={control.label}
                                       shouldValidate={!!control.validation}
                                       errorMessage={control.errorMessage}
                                       onChange={event => this.onChangeHandler(event, control.id)}/>);
                    })}
                    <Select label="Select the right answer"/>
                    <br/>
                    <Button type='primary' onClick={this.addQuestionHandler}>Add question</Button>
                    <Button type='success' onClick={this.createQuizHandler}>Create Quiz</Button>
                </form>

            </div>
        </div>;

    }
}

export default QuizCreator;

