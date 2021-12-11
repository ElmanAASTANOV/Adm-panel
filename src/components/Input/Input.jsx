const Input = ({name, value, onChange = (text) => {}}) => {
    return <input id = "input" name = {name} type="text" value={value} onChange = {el => onChange(el.currentTarget.value)}/>
}

export default Input;