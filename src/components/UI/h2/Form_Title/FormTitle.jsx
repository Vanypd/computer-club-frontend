import React, { useState } from 'react';
import classes from './FormTitle.module.css'

const FormTitle = ({ styles, arrayWord, ...props }) => {
    return (
        <h2 style={styles} className={classes.loader}>
            <div>
                {arrayWord.map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
        </h2>
    )
}

export default FormTitle;