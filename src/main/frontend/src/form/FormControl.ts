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

export function validateControl(value: string, validation: IValidation) {
    if (!validation) {
        return true
    }

    let isValid = true

    if (validation.required) {
        isValid = value.trim() !== '' && isValid
    }


    if (validation.template) {
        isValid = value.includes("@") && value.length >= validation.minLength && isValid
    }

    if (validation.minLength) {
        isValid = value.length >= validation.minLength && isValid
    }
    return isValid
}
