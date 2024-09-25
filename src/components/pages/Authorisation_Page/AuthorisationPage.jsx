import BackButton from "@UI/button/back_button/BackButton";
import MainStyleBtn from "@UI/button/main_style_button/MainStyleBtn";
import FormTitle from '@UI/h2/FormTitle/FormTitle';
import RegInput from "@UI/input/Registration_input/RegistrationInput";
import useInput from "@hooks/useInput";
import APIService from "@src/API/APIService";
import CookieManager from "@src/cookie/CookieManager";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BasicPostForm from "../../UI/form/BasicPostForm/BasicPostForm";
import classes from './AuthorisationPage.module.css';

const AuthorisationPage = ({ setLogged }) => {

    const navigate = useNavigate()
    const [formErrorMsg, setFormErrorMsg] = useState('')

    const email = useInput('', { isEmpty: true, minLength: 6, maxLength: 128 })
    const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 36 })

    const authorisation = async (e) => {
        e.preventDefault()

        if (email.noErrors && password.noErrors) {

            let user = {
                login: email.value,
                password: password.value,
            }

            const response = APIService.auth.login(user);
            const data = (await response).data;
            let responseMessage = data.response;

            if (responseMessage === 'wrong login or password') {
                setFormErrorMsg('Неверный e-mail или пароль')
                return;
            }

            if (data.status === 500) {
                setFormErrorMsg('Что-то пошло не так STATUS:500')
                console.log(data)
            }

            CookieManager.logIn(data.token, data.userId)
            setLogged(true)
            navigate('/')

        } else {
            setFormErrorMsg('Неверно заполнены поля')
        }
    }


    return (
        <main>
            <BackButton />
            <div className={classes.container}>

                <BasicPostForm>
                    <FormTitle styles={{ marginBottom: '80px' }} word={'Авторизация'} />
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
                </BasicPostForm>
            </div >
        </main >
    )
}

export default AuthorisationPage;