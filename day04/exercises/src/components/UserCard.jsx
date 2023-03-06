
import Badges from "./badges"
import UserInfo from "./UsersInfo"

  const myTechs = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Flask', 'MYSQL', 'GIT', 'Laravel']

  
  
  const userCardStyles = {width:'90%', backgroundColor:'#fafafa', margin:'50px auto', padding:'25px', borderRadius:'5px'}
  
  const UserCard = ()=>(
    <main style={userCardStyles}>
      <UserInfo name="Lucas Freitas" description="Web-developer Jr, Brazil"/>
      <div style={{marginLeft:'4%'}}>
      <h1 style={{fontSize:'16px', color:'#202020', fontWeight:'600', marginTop:'30px', paddingLeft:'8px'}}>SKILLS</h1>
        <Badges techs={myTechs}/>
        <p style={{fontSize:'12px', color:'#202020', padddingTop:'12px', paddingLeft:'8px', marginTop:'40px'}}>&#x23f0; Joined on Mar 06, 2023</p>
      </div>
       
    </main>
  )
  export default UserCard