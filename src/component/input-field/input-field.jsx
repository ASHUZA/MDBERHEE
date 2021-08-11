const InputField = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type} name={props.name} id={props.id}/>
        </>)
}
export default InputField;