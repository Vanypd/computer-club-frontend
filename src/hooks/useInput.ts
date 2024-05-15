import { useState } from "react";
import useValidation from "./useValidation";
import { Validations } from "@src/types/interfaces/interface";

const useInput = (validations: Validations) => {
    const [value, setValue] = useState('');
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations, isDirty)

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const onBlur = () => {
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

export default useInput;