import React from 'react';
import classes from './FormTitle.module.css';

const FormTitle = ({ styles, word }) => {
    return (
        <h2 style={styles} className={classes.loader}>
            <div>
                {word.split('').map((letter, index) => (
                    <span key={index}>{letter}</span>
                ))}
            </div>
        </h2>
    )
}

export default FormTitle;