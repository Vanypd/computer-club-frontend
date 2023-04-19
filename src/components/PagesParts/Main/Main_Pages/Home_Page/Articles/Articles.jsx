import React from "react";
import classes from './Articles.module.css'

const Articles = () => {



    return (
        <section className={classes.section}>
            <div className={classes.container}>
                <div className={classes.articles_main_div}>
                    <div className={classes.cell}>
                        <div className={classes.cell_item}></div>
                    </div>
                    <div className={classes.cell}>
                        <div className={classes.cell_item}></div>
                    </div>
                    <div className={classes.cell}>
                        <div className={classes.cell_item}></div>
                    </div>
                    <div className={classes.cell}>
                        <div className={classes.cell_item}></div>
                    </div>


                </div>
            </div>
        </section>

    )
}

export default Articles;