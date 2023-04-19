import React from "react";
import { useEffect } from "react";
import classes from './MainStyleBtn.module.css'

const MainStyleBtn = ({isDisabled, classType, styles, children, ...props }) => {
    
    const styleSelector = () => {
        switch (classType) {
            case 'delete': return ([classes.default_button_styles, classes.delete_button_styles].join(' '))
            case 'monochrome': return ([classes.default_button_styles, classes.monochrome_button_styles].join(' '))
            case 'monochrome-delete': return ([classes.default_button_styles, classes.monochrome_delete_button_styles].join(' '))

            default: return (classes.default_button_styles)
        }
    }

    return (
        <button
            {...props}
            className={isDisabled ? [styleSelector(), classes.disabled].join(' ') : styleSelector()}
            style={styles}
        >
            <span>
                {children}
            </span>
        </button>
    )
}

export default MainStyleBtn;