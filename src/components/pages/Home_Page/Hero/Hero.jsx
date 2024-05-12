import React from "react";
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <section className={classes.section}>
            <svg className={classes.section_svg} viewBox="0 0 1500 300" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.5 1.5H1496.36L1197.08 300.5H1.5V1.5Z" stroke="url(#paint1_linear_30_2)" strokeWidth="3" />
                <defs>   
                    <linearGradient id="paint0_linear_30_2" x1="682.5" y1="96.5" x2="647.5" y2="-278.5" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#3300FF" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_30_2" x1="286" y1="46.4999" x2="1215.5" y2="170.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C902CD" />
                        <stop offset="0.291667" stopColor="#29B5D3" />
                        <stop offset="1" stopColor="#315ED1" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={classes.section_title_div}>
                <h2 className={classes.section_title_h2}>
                    Компьютерный клуб cyberT
                </h2>
                <h3 className={classes.section_title_h3}>
                    ЛУЧШЕЕ МЕСТО ДЛЯ ПРОВЕДЕНИЯ ТУРНИРОВ,<br></br>
                    РАЗВИТИЯ В КИБЕСПОРТЕ,<br></br>
                    ИЛИ ПРОСТО ХОРОШЕГО ВРЕМЯПРОВОЖДЕНИЯ.
                </h3>
            </div>

            <div className={classes.container}>
                <div className={classes.Hero_main_div}></div>
            </div>
        </section>
    )
}

export default Hero;