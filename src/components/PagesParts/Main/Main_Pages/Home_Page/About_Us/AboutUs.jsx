import React from "react";
import classes from './AboutUs.module.css'
import AboutUsItem from "./AboutUsItem";

const AboutUs = () => {



    return (

        <section className={classes.section}>
            <div className={classes.aboutUs_title_div}>
                <h2 className={classes.aboutUs_title}>Почему именно мы?</h2>
            </div>
            <div className={classes.items_container}>
                <AboutUsItem img_number={1}>Современные комплектации</AboutUsItem>
                <AboutUsItem img_number={2}>Круглосуточная работа</AboutUsItem>
                <AboutUsItem img_number={3}>Турнирные сетки</AboutUsItem>
            </div>
        </section>

    )
}

export default AboutUs;