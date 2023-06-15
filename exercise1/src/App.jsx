import {useTextInput} from './hooks/useTextInput'

function App() {
    const firstTextProps = useTextInput({type: "text",value: "Hello World"});
    const firstNumProps = useTextInput({type:"number", value: 1})

    return (
        <>
            <lable>Please type your text: 
                <input {...firstTextProps} />
            </lable>
            <lable>Please type your number: 
                <input {...firstNumProps} />
            </lable>

            <h1><strong>{firstTextProps.value}</strong></h1>
            <h1><strong>{firstNumProps.value}</strong></h1>
        </>
    )
}

export default App