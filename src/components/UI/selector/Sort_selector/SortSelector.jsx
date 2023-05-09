import React, { useEffect, useRef, useState } from 'react'
import classes from './SortSelector.module.css'

const SortSelector = ({options}) => {
    const [isActive, setActive] = useState(false)
    const [lable, setLable] = useState('Сортировать по')
    const rootEl = useRef(null);

    const activeChanger = () => {
        if (isActive) { setActive(false) }
        else { setActive(true) }
    }

    const selectOption = (e) => {
        setLable(e.target.innerHTML)
        console.log(e.target.innerHTML)

        setActive(false)
    }

    useEffect(() => {
        if (isActive) {
            const onClick = e => rootEl.current.contains(e.target) || setActive(false);
            document.addEventListener('click', onClick);
            return () => document.removeEventListener('click', onClick);
        }
    }, [isActive])


    return (
        <div className={classes.selector_box}>
            <div className={classes.selector_container}>

                <div ref={rootEl} onClick={activeChanger} className={(isActive) ? [classes.selector, classes.selector_active].join(' ') : classes.selector}>
                    <span>{lable}</span>
                    <span >
                        <svg className={(isActive) ? [classes.selector_char, classes.selector_char_active].join(' ') : classes.selector_char}
                            xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="-99.5 0.5 400 200"><path d="M156.25 73.7c0 1.6-.612 3.2-1.825 4.425L100 132.55 45.575 78.125c-2.438-2.438-2.438-6.4 0-8.837s6.4-2.438 8.837 0L100 114.862l45.575-45.575a6.253 6.253 0 0 1 8.837 0 6.23 6.23 0 0 1 1.838 4.413z" /></svg>
                    </span>
                </div>
                <div className={isActive ? [classes.selector_menu, classes.selector_menu_active].join(' ') : classes.selector_menu}>
                    {options.map(option => 
                        <div onClick={(e) => selectOption(e)} className={classes.selector_option}>{option.name}</div>
                        )}
                </div>

            </div>
        </div>
    )
}

export default SortSelector