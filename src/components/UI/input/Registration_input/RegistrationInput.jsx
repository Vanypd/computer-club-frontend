import React, { useState } from 'react';
import classes from './RegistrationInput.module.css'

const RegInput = ({ value, onBlur, onChange, handler, errorMsg, state, setState, ...props }) => {

    const inputValidation = () => {
        if (value.length == 0) {
            return classes.form_place
        }

        if (errorMsg != '') {
            return ([classes.form_place, classes.form_place_invalid].join(' '))

        } else {
            return ([classes.form_place, classes.form_place_valid].join(' '))
        }
    }

    // НЕ РАБОТАЕТ
    // const onChangeState = async (e) => {
    //     await onChange(e);
        
    // }


    return (
        <div className={classes.input_box}>
            <input type={props.type} name={props.name}
                className={inputValidation()}
                onChange={e => { onChange(e) }}
                onBlur={e => { onBlur(e) }}
                required autoComplete="off"></input>
            <label htmlFor="" className={classes.div_label}>{props.label}</label>
            <span className={
                (errorMsg != '') ? ([classes.error, classes.error_active].join(' ')) : classes.error
            } aria-live="polite">
                {errorMsg}
            </span>
        </div>
    )

}

export default RegInput;