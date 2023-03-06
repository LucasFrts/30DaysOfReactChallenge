
const inputStyle = { padding:'10px', borderRadius: '8px', border:'1px solid #fafafa', margin: '10px'}
const labelStyle = {transform:'translate(-218px, 22px) scale(1)', position:'absolute', padding:'0px 12px', color:'gray', textAlign:'unset'
}

const InputComponent = (props)=>(
    <div>
    <input style={inputStyle} id={props.nome}/>
    <label style={labelStyle} htmlFor={props.nome}>{props.nome}</label>
    </div>
)
export default InputComponent