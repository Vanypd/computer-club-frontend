import React, { useEffect, useRef } from 'react'
import classes from './PageLoader.module.css'

const PageLoader = ({ isPageLoaded }) => {
    const backgroundRef = useRef(null);

    useEffect(() => {
        if (!backgroundRef.current) {
            return;
        }

        if (backgroundRef.current.classList.contains(classes.background_disappears)) {
            return;
        }

        if (isPageLoaded) {
            backgroundRef.current.classList.add(classes.background_disappears);
        }
    }, [isPageLoaded])

    return (
        <div ref={backgroundRef} className={classes.background}>
            <div className={classes.top_tape}></div>

            <div className={classes.loader_item}>
                <i className={classes.loader}></i>
            </div>

            <div className={classes.bottom_tape}></div>
        </div>
    )
}

export default PageLoader