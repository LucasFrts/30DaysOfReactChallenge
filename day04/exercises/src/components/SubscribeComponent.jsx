import InputComponent from "./InputComponent"
import Button from "./Button"
const form = ['First Name', 'Last Name', 'Email']
const subscribeStyle = {
    width:'80%', backgroundColor:'#49bbff', margin:'0 auto', borderRadius:'15px'
}
const formStyles = {
    display:'flex', justifyContent:'center', flexWrap:'wrap', flexDirection:'row', gap:'15px'
}
const textStyle = {textAlign:'center', color:'#202020', paddingBottom:'60px', fontWeight:'400'}
const Subscribe = ()=>(
    <section style={subscribeStyle}>
        <div style={textStyle}>
        <h1 style={{marginBottom:'50px', paddingTop:'20px'}}>SUBSCRIBE</h1>
        <p>Sign up with your email adress to receive news and updates.</p>
        </div>


        <form >
            <div style={formStyles}>
            {form.map((label)=>(<InputComponent key={label} nome={label}/>))}
            </div>
            <div style={{textAlign:'center', justifyContent:'center', display:'flex'}}>
                 <Button/>
            </div>
            
        </form>
     
    </section>
)
export default Subscribe