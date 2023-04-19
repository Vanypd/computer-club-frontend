import React from 'react'
import classes from './Games.module.css'

const Games = () => {
    return (
        <section className={classes.games_section}>
            <div className={classes.games_img}></div>
            <div className={classes.games_title_1}>
                ИГРОВЫЕ НОВИНКИ
            </div>
            <div className={classes.games_title_2}>
                либо незабываемая классика
            </div>

        </section>
    )
}

export default Games
