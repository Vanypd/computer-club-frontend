import { FieldType } from "@src/types/enums/enum";
import { Validations } from "@src/types/interfaces/interface";
import { useEffect, useState } from "react"

const useValidation = (value: string, validations: Validations, isDirty: boolean) => {
    const [errorMessage, setErrorMessage] = useState('')
    const [hasErrors, setHasErrors] = useState(true)

    useEffect(() => {
        if (!isDirty) {
            return;
        }

        if (errorMessage.length !== 0) {
            setHasErrors(true);
            return;
        }

        setHasErrors(false);
    }, [errorMessage, isDirty])

    useEffect(() => {
        const regMail = /^\w+@\w+\.\w+$/;
        const regNumber = /^\d+$/;

        const fieldsErrorResolver = async () => {
            switch (true) {
                case (value.length === 0):
                    setErrorMessage(`Поле не может быть пустым`);
                    break;
    
                case (value.length < validations.minLength):
                    setErrorMessage(`В этом поле не должно быть меньше ${validations.minLength} символов`);
                    break;
    
                case (value.length > validations.maxLength):
                    setErrorMessage(`В этом поле не должно быть больше ${validations.maxLength} символов`);
                    break;
    
                case (validations.fieldType === FieldType.IsEmail && regMail.test(value) === false):
                    setErrorMessage(`Неверный формат E-mail`);
                    break;
    
                case (validations.fieldType === FieldType.IsPhone && regNumber.test(value) === false):
                    setErrorMessage(`Номер должен состоять только из чисел`);
                    break;
    
                default: setErrorMessage('')
            }
        }

        const validate = async () => {
            await fieldsErrorResolver()
        }
        if (isDirty) {
            validate()
        }

    }, [isDirty, validations.fieldType, validations.maxLength, validations.minLength, value])

    return {
        errorMessage,
        hasErrors,
    }
}

export default useValidation;