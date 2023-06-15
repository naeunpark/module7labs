import { useState } from 'react'

export function useTextInput({value, type}) {
    const [inputValue, setInputValue] = useState(value);

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    
    const inputProps = {
        value: inputValue,
        type: type,
        onChange: handleChange
    }

    return inputProps;
}