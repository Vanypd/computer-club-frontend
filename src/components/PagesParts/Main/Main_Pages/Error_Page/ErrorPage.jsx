import React from 'react'
import BackButton from '../../../../UI/button/back_button/BackButton'
import cl from './ErrorPage.module.css'

const ErrorPage = () => {
    return (
        <main className="main">
            <BackButton />
            <div className={cl.container}>
                <div className={cl.xdd}>
                    <img src="https://i.pinimg.com/originals/fe/df/71/fedf7125acf620e856b6d09ef44eee51.gif" alt="" />
                </div>
            </div>
        </main>

    )
}

export default ErrorPage