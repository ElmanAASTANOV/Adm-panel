const Input = ({name, value, onChange = (text) => {}, style}) => {
    return <input id = "input" name = {name} type="text" style={style} value={value} onChange = {el => onChange(el.currentTarget.value)}/>
}

export default Input;