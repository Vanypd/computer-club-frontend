import React, { FormHTMLAttributes, ReactNode } from 'react';
import classes from './BasicPostForm.module.css';

interface BasicPostFormProps extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode;
}

const BasicPostForm: React.FC<BasicPostFormProps> = ({ children, ...props }) => {

    return (
        <form method="post" className={classes.form} {...props} noValidate>
            {children}
        </form>
    )
}

export default BasicPostForm