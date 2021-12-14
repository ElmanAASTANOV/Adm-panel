
const NormalButton = ({ type = "", children, onClick, style }) => {
    return (<button style={style} id = "btn" className="normal-button" type={type} onClick = {onClick}>{children}</button>)
}

export default NormalButton;