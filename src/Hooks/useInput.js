import React from "react";
import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {

    const [value, setValue] = useState(initialValue);

    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations, isDirty)

    const onChange = async (e) => {
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

export default useInput;