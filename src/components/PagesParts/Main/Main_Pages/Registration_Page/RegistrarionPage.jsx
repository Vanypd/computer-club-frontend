import React, { useState } from 'react';
import { useEffect } from 'react';
import BackButton from '../../../../UI/button/back_button/BackButton';
import SubmitCheckbox from '../../../../UI/checkbox/Submit_checkbox/SubmitCheckbox';
import FormTitle from '../../../../UI/h2/Form_Title/FormTitle';
import RegInput from '../../../../UI/input/Registration_input/RegistrationInput';
import classes from './RegistrationPage.module.css';

const RegistrationPage = () => {

    const useValidation = (value, validations, isDirty) => {
        const [isEmpty, setEmpty] = useState(true)

        const [minLengthError, setMinLengthError] = useState(false)
        const [minLength, setMinLength] = useState(0)

        const [maxLengthError, setMaxLengthError] = useState(false)
        const [maxLength, setMaxLength] = useState(0)
        const [emailError, setEmailError] = useState(false)

        const [errorMessage, setErrorMessage] = useState('')


        useEffect(() => {

            for (const validation in validations) {
                switch (validation) {
                    case 'minLength':
                        if (value.length < validations[validation]) {
                            setMinLengthError(true)
                            setMinLength(validations[validation])
                        } else {
                            setMinLengthError(false)
                        }
                        break;

                    case 'isEmpty':
                        value ? setEmpty(false) : setEmpty(true)
                        break;

                    case 'maxLength':
                        if (value.length > validations[validation]) {
                            setMaxLengthError(true)
                            setMaxLength(validations[validation])
                        } else {
                            setMaxLengthError(false)
                        }
                        break;

                    case 'isEmail':
                        const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                        break

                    case 'errorsChecker':
                        switch (true) {
                            case isEmpty:
                                setErrorMessage(`Поле не может быть пустым`)
                                break

                            case minLengthError:
                                setErrorMessage(`В этом поле не должно быть меньше ${minLength} символов`)
                                break

                            case maxLengthError:
                                setErrorMessage(`В этом поле не должно быть больше ${maxLength} символов`)
                                break

                            default:
                                setErrorMessage('')
                        }
                }
            }
        }, [value])

        return {
            isEmpty,
            minLengthError,
            maxLengthError,
            emailError,
            errorMessage
        }
    }

    const useInput = (initialValue, validations) => {

        const [value, setValue] = useState(initialValue);
        const [isDirty, setDirty] = useState(false)
        const valid = useValidation(value, validations, isDirty)

        const onChange = (e) => {
            setValue(e.target.value)

        }

        const onBlur = (e) => {
            setDirty(true);

        }

        return {
            value,
            isDirty,
            onChange,
            onBlur,
            ...valid
        }
    }

    const [id, setId] = useState(0);
    const name = useInput('', { isEmpty: true, minLength: 2, maxLength: 16, errorsChecker: true })
    const email = useInput('', { isEmpty: true, minLength: 6, maxLength: 128, errorsChecker: true })



    return (
        <main className="main">
            <BackButton />
            <div className="conteiner">
                <form method="post" className="form" noValidate>

                    <FormTitle arrayWord={['Р', 'е', 'г', 'и', 'с', 'т', 'р', 'а', 'ц', 'и', 'я']} />

                    <input type="text" name="id" hidden />
                    <RegInput value={name.value} onBlur={e => name.onBlur(e)} onChange={e => name.onChange(e)} errorMsg={name.errorMessage} type='text' name='name' label='Имя' />
                    <RegInput value={email.value} onBlur={e => email.onBlur(e)} onChange={e => email.onChange(e)} errorMsg={email.errorMessage} type='text' name='email' label='Электронная почта' />
                    {/* <RegInputerrorActive={nameErrorActive} setErrorActive={setNameErrorActive} state={name} setState={setName} type='text' name='name' label='Имя' /> */}
                    {/* <RegInput handler={emailHandler} errorActive={emailErrorActive} setErrorActive={setEmailErrorActive} state={email} setState={setEmail} type='text' name='email' label='Электронная почта' /> */}
                    {/* <RegInput errorActive={phoneErrorActive} setErrorActive={setPhoneErrorActive} state={phone} setState={setPhone} type='tel' name='phone' label='Телефон' /> */}
                    {/* <RegInput errorActive={passwordErrorActive} setErrorActive={setPasswordErrorActive} state={password} setState={setPassword} type='password' name='password' label='Пароль' /> */}
                    {/* <RegInput errorActive={passwordConfirmErrorActive} setErrorActive={setPasswordConfirmErrorActive} state={passwordConfirm} setState={setPasswordConfirm} type='password' label='Подтвердите пароль' /> */}

                    <div className="form_bottom">
                        <div>
                            <button className="form_btn">Отправить</button>
                        </div>
                        <div>
                            <span className="response_error_messege"></span>
                        </div>
                    </div>

                    <SubmitCheckbox label='Я принимаю согласие на обработку данных' />
                </form>
            </div>
        </main>
    )
};

export default RegistrationPage;