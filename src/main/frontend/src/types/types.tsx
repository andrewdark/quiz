export interface IQuiz{
    question: string;
    rightAnswerId: number;
    id: number
    answers: IAnswer[]
}

export interface IAnswer{
    id: number;
    text: string;
}
