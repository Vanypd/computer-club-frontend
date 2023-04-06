import React, { useState } from 'react';
import classes from './SubmitCheckbox.module.css'

const SubmitCheckbox = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className={classes.area}>
            <label htmlFor="check" className={classes.checkbox_label}>
                <span
                    className={isChecked ? ([classes.checkbox, classes.checkbox_active]).join(' ') : classes.checkbox}
                    aria-hidden="true"
                ></span>
                <input type="checkbox" id='check' onChange={() => setIsChecked(!isChecked)} className={classes.check} required></input>
                {label}

            </label>
        </div>
    )
}

export default SubmitCheckbox;