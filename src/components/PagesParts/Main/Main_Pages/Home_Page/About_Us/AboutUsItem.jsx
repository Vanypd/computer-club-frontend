import React from "react";
import classes from './AboutUsItem.module.css'

const AboutUsItem = ({img_number, children, ...props}) => {
    const imgSelector = () => {
        switch (img_number) {
            case 1: return classes.img1
            case 2: return classes.img2
            case 3: return classes.img3
        } 
    }

    return (
        <div className={classes.aboutUs_item}>
            <div className={[classes.aboutUs_item_img, imgSelector()].join(' ')}></div>
            <div className={classes.aboutUs_item_descr}>
                <span className={classes.aboutUs_item_descr_text}>
                    {children}
                </span>
            </div>
        </div>
    )
}

export default AboutUsItem;