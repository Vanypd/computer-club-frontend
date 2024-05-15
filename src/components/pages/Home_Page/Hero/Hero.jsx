import React from "react";
import classes from './Hero.module.css'

const Hero = () => {
    return (
        <section className={classes.section}>
            <svg className={classes.svg_retangle} viewBox="0 0 1500 300" xmlns="http://www.w3.org/2000/svg">
                <g className={classes.penis}>
                    <path className={classes.retangle_background} d="M0 0L1500 0L1197.69 300H0V0Z"/>
                    <path className={classes.retangle_border} d="M1.5 1.5H1496.36L1197.08 298.5H1.5V1.5Z"/>
                </g>

                <defs>
                    {/* ФОН */}
                    <linearGradient id="hero_svg_retangle_background" x1="682.5" y1="96.5001" x2="647.5" y2="-278.5" gradientUnits="userSpaceOnUse">
                        <stop />
                        <stop offset="1" stopColor="#3300FF" stopOpacity="0" />
                    </linearGradient>

                    {/* ОБВОДКА */}
                    <linearGradient id="hero_svg_retangle_border" x1="286" y1="46.4999" x2="1215.5" y2="170.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C902CD" />
                        <stop offset="0.291667" stopColor="#29B5D3" />
                        <stop offset="1" stopColor="#315ED1" />
                    </linearGradient>
                </defs>
            </svg>

            <div className={classes.title_wrap}>
                <h2 className={classes.title_h2}>
                    Компьютерный клуб cyberT
                </h2>

                <h3 className={classes.title_h3}>
                    ЛУЧШЕЕ МЕСТО ДЛЯ ПРОВЕДЕНИЯ ТУРНИРОВ,<br></br>
                    РАЗВИТИЯ В КИБЕСПОРТЕ,<br></br>
                    ИЛИ ПРОСТО ХОРОШЕГО ВРЕМЯПРОВОЖДЕНИЯ.
                </h3>
            </div>
        </section>
    )
}

export default Hero;