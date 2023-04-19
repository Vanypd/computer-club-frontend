import React, { useEffect, useState } from "react"


const useValidation = (value, validations, isDirty) => {
    const [isEmpty, setEmpty] = useState(true)

    const [minLengthError, setMinLengthError] = useState(false)
    const [minLength, setMinLength] = useState(0)

    const [maxLengthError, setMaxLengthError] = useState(false)
    const [maxLength, setMaxLength] = useState(0)

    const [errorMessage, setErrorMessage] = useState('')

    const [noErrors, setNoErrors] = useState(false)

    const errorsChecker = async () => {
        switch (true) {
            case (value.length == 0):
                setErrorMessage(`Поле не может быть пустым`)
                setNoErrors(false)
                break

            case (value.length < minLength):
                setErrorMessage(`В этом поле не должно быть меньше ${minLength} символов`)
                setNoErrors(false)
                break

            case (value.length > maxLength):
                setErrorMessage(`В этом поле не должно быть больше ${maxLength} символов`)
                setNoErrors(false)
                break

            default:
                setErrorMessage('')
                setNoErrors(true)
        }
    }

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    setMinLength(validations[validation])
                    break;

                case 'maxLength':
                    setMaxLength(validations[validation])
                    break;
            }
        }

        const validate = async () => {
            for (const validation in validations) {
                switch (validation) {
                    case 'minLength':
                        if (value.length < validations[validation]) {
                            setMinLengthError(true)
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
                        } else {
                            setMaxLengthError(false)
                        }
                        break;
                }
                await errorsChecker()

            }
        }
        if (isDirty) {
            validate()
        }

    }, [value, isDirty])

    return {
        isEmpty,
        minLengthError,
        maxLengthError,
        errorMessage,
        noErrors,
    }
}

export default useValidation;