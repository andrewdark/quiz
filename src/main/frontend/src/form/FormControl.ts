import {IInputState, IValidation, IValidInputState} from "../types/types";

export function createControl(input: IInputState, validation:IValidation) :IValidInputState {
    return {
       ...input,
        errorMessage: 'Введите корректный ' + input.value,
        valid: !validation,
        touched: false,
        validation: validation
    }
}
