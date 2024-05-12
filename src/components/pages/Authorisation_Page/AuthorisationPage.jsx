import React, { useState } from "react";
import useInput from "hooks/useInput";
import BackButton from "UI/button/back_button/BackButton";
import MainStyleBtn from "UI/button/main_style_button/MainStyleBtn";
import FormTitle from "UI/h2/form_title/FormTitle";
import RegInput from "UI/input/Registration_input/RegistrationInput";
import classes from './AuthorisationPage.module.css'
import { CookieManager, POST_AUTH_URL } from "src/MAIN";
import { useNavigate } from "react-router-dom";

const AutorisationPage = ({ setLogged }) => {

    const navigate = useNavigate()
    const [formErrorMsg, setFormErrorMsg] = useState('')

    const email = useInput('', { isEmpty: true, minLength: 6, maxLength: 128 })
    const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 36 })

    const activeFormChecker = () => {

        let checker = async () => {
            let form = document.getElementById('Registration');
            form.classList.add(classes.form_active);
        }
        checker()
    }

    const authorisation = async (e) => {
        e.preventDefault()

        if (email.noErrors &&
            password.noErrors) {

            let user = {
                login: email.value,
                password: password.value,
            }

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            }

            fetch(POST_AUTH_URL, requestOptions)
                .then(function (response) {

                    return response.json();
                })
                .then(function (data) {
                    let responseCode = data.response;

                    if (responseCode === 'wrong login or password') {
                        setFormErrorMsg('Неверный e-mail или пароль')

                    } else {
                        
                        if (data.status === 500) {
                            setFormErrorMsg('Что-то пошло не так STATUS:500')
                            console.log(data)
                        } else {
                            CookieManager.logIn(data.token, data.userId)
                            setLogged(true)

                            navigate('/')
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error)
                })

        } else {
            setFormErrorMsg('Неверно заполнены поля')
        }
    }

    return (
        <main className="main">
            <BackButton />
            <div className="conteiner">
                <form method="post" className={[classes.form].join(' ')} id='Registration' onLoad={activeFormChecker()} noValidate>

                    <FormTitle styles={{ marginBottom: '80px' }} arrayWord={['А', 'в', 'т', 'о', 'р', 'и', 'з', 'а', 'ц', 'и', 'я']} />

                    <input type="text" name="id" hidden />
                    <RegInput value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} errorMsg={email.errorMessage} type='text' name='email' label='Электронная почта' />
                    <RegInput value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} errorMsg={password.errorMessage} type='password' name='password' label='Пароль' />
                    <div className={classes.form_bottom}>
                        <div className='flex'>
                            <MainStyleBtn onClick={authorisation} classType={'monochrome'} styles={{ fontSize: '18px', display: 'inline-block' }}>Войти</MainStyleBtn>
                        </div>
                        <div>
                            <span className={classes.response_error_messege}>{formErrorMsg}</span>
                        </div>
                    </div>
                </form>
            </div >
        </main >
    )
}

export default AutorisationPage;