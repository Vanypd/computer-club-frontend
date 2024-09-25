import BackButton from '@UI/button/back_button/BackButton';
import MainStyleBtn from '@UI/button/main_style_button/MainStyleBtn';
import SubmitCheckbox from '@UI/checkbox/Submit_checkbox/SubmitCheckbox';
import RegInput from '@UI/input/Registration_input/RegistrationInput';
import APIService from '@src/API/APIService';
import { FieldType } from '@src/types/enums/enum';
import useInput from 'hooks/useInput';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicPostForm from '../../UI/form/BasicPostForm/BasicPostForm';
import classes from './RegistrationPage.module.css';
import FormTitle from '@UI/h2/FormTitle/FormTitle';

const RegistrationPage = () => {

    const navigate = useNavigate()
    const [formErrorMsg, setFormErrorMsg] = useState('')

    const name = useInput({ minLength: 2, maxLength: 16, fieldType: FieldType.Text })
    const email = useInput({ minLength: 6, maxLength: 128, fieldType: FieldType.IsEmail })
    const phone = useInput({ minLength: 11, maxLength: 11, fieldType: FieldType.IsPhone })
    const password = useInput({ minLength: 8, maxLength: 36, fieldType: FieldType.Text })
    const passwordConfirm = useInput({ minLength: 8, maxLength: 36, fieldType: FieldType.Text })
    const [agreementIsChecked, setAgreementIsChecked] = useState(false);


    const addUser = async (e) => {
        e.preventDefault()

        if (
            name.value === '' ||
            email.value === '' ||
            phone.value === '' ||
            password.value === '' ||
            passwordConfirm.value === '') {
            setFormErrorMsg('Не все поля заполнены');
            return;
        }

        if (agreementIsChecked === false) {
            setFormErrorMsg('Необходимо принять соглашение об обработке данных');
            return;
        }


        if (name.hasErrors ||
            email.hasErrors ||
            phone.hasErrors ||
            password.hasErrors ||
            passwordConfirm.hasErrors) {
            setFormErrorMsg('В форме присутствуют ошибки');
            return;
        }

        if (password.value !== passwordConfirm.value) {
            setFormErrorMsg('Пароли не совпадают');
            return;
        }

        let user = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            password: password.value,
        }

        APIService.users.addUser(user)
            .then(() => {
                setFormErrorMsg('')
                navigate('/')
            })
            .catch((error) => {
                switch (error.response.data.message) {
                    case 'email is already exist':
                        setFormErrorMsg('Пользователь с таким e-mail уже существует');
                        break;

                    case 'phone is already exist':
                        setFormErrorMsg('Пользователь с таким номером уже существует');
                        break;

                    default:
                        setFormErrorMsg('Что-то пошло не так');
                        console.log(error)
                }
            })
    }

    return (
        <main className="main">
            <BackButton />
            <div className={classes.container}>
                <BasicPostForm>
                    <FormTitle word={'Регистрация'} />
                    <RegInput labelLink={'name'} value={name.value} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} errorMsg={name.errorMessage} type='text' name='name' label='Имя' />
                    <RegInput labelLink={'email'} value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} errorMsg={email.errorMessage} type='text' name='email' label='Электронная почта' />
                    <RegInput labelLink={'phone'} value={phone.value} onBlur={e => phone.onBlur(e)} onChange={e => phone.onChange(e)} errorMsg={phone.errorMessage} type='tel' name='phone' label='Телефон' />
                    <RegInput labelLink={'password'} value={password.value} onBlur={e => password.onBlur(e)} onChange={e => password.onChange(e)} errorMsg={password.errorMessage} type='password' name='password' label='Пароль' />
                    <RegInput labelLink={'passwordConfirm'} value={passwordConfirm.value} onBlur={e => passwordConfirm.onBlur(e)} onChange={e => passwordConfirm.onChange(e)} errorMsg={passwordConfirm.errorMessage} type='password' label='Подтвердите пароль' />

                    <div className={classes.form_bottom}>
                        <div className='flex'>
                            <MainStyleBtn classType={'monochrome'} styles={{ fontSize: '18px', display: 'inline-block' }} onClick={addUser}>Отправить</MainStyleBtn>
                        </div>
                        <div>
                            <span className={classes.response_error_messege}>{formErrorMsg}</span>
                        </div>
                    </div>

                    <SubmitCheckbox isChecked={agreementIsChecked} setIsChecked={setAgreementIsChecked} label='Я принимаю согласие на обработку данных' />
                </BasicPostForm>
            </div >
        </main >
    )
};

export default RegistrationPage;