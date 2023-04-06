import React, { useState } from 'react';
import classes from './FormTitle.module.css'

const FormTitle = ({ arrayWord, ...props }) => {
    return (
        <h2 className={classes.loader}>
            <div>
                {arrayWord.map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
        </h2>
    )
}

export default FormTitle;