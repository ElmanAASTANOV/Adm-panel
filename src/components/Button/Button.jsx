
const Button = ({ type = "submit", children }) => {
    return (<button id = "btn" type={type}>{children}</button>)
}

export default Button;