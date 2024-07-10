export interface IQuiz {
    question: string;
    rightAnswerId: number;
    id: number
    answers: IAnswer[]
}

export interface IAnswer {
    id: number;
    text: string;
}

export interface IState {
    id?: number;
    value?: string;
}

export interface IValidation {
    required: boolean;
    minLength: number;
    template: boolean;
}
export interface IInputState {
    value: string;
    type: string;
    label: string;
    errorMessage: string;
    valid: boolean;
    touched: boolean;
    validation: IValidation;
}
