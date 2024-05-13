import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';
import BackButton from '@UI/button/back_button/BackButton';
import MainStyleBtn from '@UI/button/main_style_button/MainStyleBtn';
import SubmitCheckbox from '@UI/checkbox/Submit_checkbox/SubmitCheckbox';
import FormTitle from '@UI/h2/form_title/FormTitle';
import RegInput from '@UI/input/Registration_input/RegistrationInput';
import classes from './RegistrationPage.module.css';
import APIService from '@src/API/APIService';

const RegistrationPage = () => {

    const navigate = useNavigate()
    const [formErrorMsg, setFormErrorMsg] = useState('')
    
    const id = 0;
    const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 16 })
    const email = useInput('', { isEmpty: true, minLength: 6, maxLength: 128, isEmail: true })
    const phone = useInput('', { isEmpty: true, minLength: 11, maxLength: 11, isNumber: true })
    const password = useInput('', { isEmpty: true, minLength: 8, maxLength: 36 })
    const passwordConfirm = useInput('', { isEmpty: true, minLength: 8, maxLength: 36 })

    const [agreementIsChecked, setAgreementIsChecked] = useState(false);

    
    const addUser = async (e) => {
        e.preventDefault()

        if (name.noErrors &&
            email.noErrors &&
            phone.noErrors &&
            password.noErrors &&
            passwordConfirm.noErrors &&
            agreementIsChecked === true
            ) {

            let user = {
                id: id,
                name: name.value,
                login: email.value,
                email: email.value,
                phone: phone.value,
                password: password.value,
                roleId: 3
            }

            APIService.users.addUser(user)
                .then(function (response) {

                    if (response.ok) {
                        setFormErrorMsg('')
                        navigate('/')
                    }

                    return response.json();
                })
                .then(function (data) {

                    let responseCode = data.response;

                    if (responseCode === 'email exists') {
                        setFormErrorMsg('Пользователь с таким e-mail уже существует')

                    } else if (responseCode === 'phone exists') {
                        setFormErrorMsg('Пользователь с таким номером уже существует')

                    } else {
                        setFormErrorMsg('Что-то пошло не так')
                    }
                })
                .catch(function (error) {
                    alert('error ', error);
                })

        } else {
            if (name.value ==='' &&
                email.value ==='' &&
                phone.value ==='' &&
                password.value ==='' &&
                passwordConfirm.value ==='') {setFormErrorMsg('Необходимо ввести данные в поля')}
            else if (agreementIsChecked === false) {setFormErrorMsg('Необходимо принять соглашение об обработке данных')}
            else { setFormErrorMsg('Неверно заполнены поля') }
            
        }
    }

    const activeFormChecker = () => {

        let checker = async () => {
            let form = document.getElementById('Registration');
            form.classList.add(classes.form_active);
        }
        checker()
    }

    return (
        <main className="main">
            <BackButton />
            <div>
                <form method="post" className={[classes.form].join(' ')} id='Registration' onLoad={activeFormChecker()} noValidate>

                    <FormTitle arrayWord={['Р', 'е', 'г', 'и', 'с', 'т', 'р', 'а', 'ц', 'и', 'я']} />

                    <input type="text" name="id" hidden />
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
                </form>
            </div >
        </main >
    )
};

export default RegistrationPage;