const divStyle = {
    padding:'10px',
    margin: '10px'
}
const inputStyle = {  borderRadius: '8px', border:'1px solid #fafafa', padding: 'inherit'}
const labelStyle = {transform:'translate(-218px, 10px) scale(1)', position:'absolute', color:'gray', textAlign:'unset'
}

const InputComponent = (props)=>(
    <div style={divStyle}>
    <input style={inputStyle} id={props.nome}/>
    <label style={labelStyle} htmlFor={props.nome}>{props.nome}</label>
    </div>
)
export default InputComponent