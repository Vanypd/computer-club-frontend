import React, { useEffect, useRef, useState } from 'react'
import classes from './RoomSelector.module.css'

const RoomSelector = ({ selectedRoom, setSelectedRoom }) => {
    const [isActive, setActive] = useState(false)
    const [roomLable, setRoomLable] = useState('Выберите комнату')
    const rootEl = useRef(null);

    const activeChanger = () => {
        if (isActive) { setActive(false) }
        else { setActive(true) }
    }

    const selectOption = (option) => {
        setRoomLable(option)
        if (option === 'DEFAULT')
            setSelectedRoom(0)
        if (option === 'VIP')
            setSelectedRoom(1)
        if (option === 'OLD STYLE')
            setSelectedRoom(2)

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
                    <span>{roomLable}</span>
                    <span >
                        <svg className={(isActive) ? [classes.selector_char, classes.selector_char_active].join(' ') : classes.selector_char}
                            xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="-99.5 0.5 400 200"><path d="M156.25 73.7c0 1.6-.612 3.2-1.825 4.425L100 132.55 45.575 78.125c-2.438-2.438-2.438-6.4 0-8.837s6.4-2.438 8.837 0L100 114.862l45.575-45.575a6.253 6.253 0 0 1 8.837 0 6.23 6.23 0 0 1 1.838 4.413z" /></svg>
                    </span>
                </div>
                <div className={isActive ? [classes.selector_menu, classes.selector_menu_active].join(' ') : classes.selector_menu}>
                    <div onClick={() => selectOption('DEFAULT')} className={classes.selector_option}>DEFAULT</div>
                    <div onClick={() => selectOption('VIP')} className={classes.selector_option}>VIP</div>
                    <div onClick={() => selectOption('OLD STYLE')} className={classes.selector_option}>OLD STYLE</div>
                </div>

            </div>
        </div>
    )
}

export default RoomSelector