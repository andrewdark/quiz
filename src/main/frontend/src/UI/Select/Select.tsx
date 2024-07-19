import classes from './Select.module.scss';
import {ChangeEventHandler} from "react";

interface SelectProps{
    label: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLSelectElement>
}
const Select = (props:SelectProps) => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.Select}>
            <label htmlFor={htmlFor}>{props.label}</label>
            <select
                id={htmlFor}
                value={props.value}
                onChange={props.onChange}
            >
                <option value='option_1' key='one_key'>
                    Answer_1
                </option>
                <option value='option_2' key='two_key'>
                    Answer_2
                </option>
                <option value='option_3' key='three_key'>
                    Answer_3
                </option>
                <option value='option_4' key='three_key'>
                    Answer_4
                </option>
            </select>
        </div>);
};

export default Select;
