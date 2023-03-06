
import userImg from "./../image/user.png"
import starImg from "./../image/verified.svg.png"


  const UserInfo = (props) =>(
    <section style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', margin:'auto auto'}}>
      <div style={{textAlign:'justify', display:'flex', justifyContent:'center', flexDirection:'column', width:'20%'}}>
        <img style={{width:'10rem', height:'10rem', margin:'auto'}} src={userImg} alt="user"/>
        <div style={{margin:'auto'}}>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
            <h2 style={{fontSize:'18px', color:'#202020', fontWeight:'600', marginTop:'30px', padding:'8px'}}>{props.name} </h2>
            <img style={{width:'20px', height:'20px', margin:'5px'}}src={starImg} alt="star"/>
        </div>
        <p style={{fontSize:'16px', color:'#202020', padddingTop:'10px', padding:'8px', marginTop:0}}>{props.description}</p>  
        </div>

      </div>
    </section>
  )
  export default UserInfo