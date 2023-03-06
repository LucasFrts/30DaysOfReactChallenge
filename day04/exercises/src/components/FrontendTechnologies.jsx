import TechLogo from "./TechLogo"
import htmlicon from './../image/html-5--v1.png'
import cssicon from './../image/css-icon.png'
import jsicon from './../image/javascript-logo.svg'
import reacticon from "./../image/logo.svg"
const sectionStyle = {display:'flex', flexDirection:'column', gap: '20px', justifyContent:'center', width:'50%', margin:'0 auto'}
const techs = [htmlicon, cssicon, jsicon, reacticon]
const FrontEndTechnologies = ()=>(
    <section style={sectionStyle} >
        <h1 style={{textAlign:'center'}}>Front End Technologies</h1>
        <div style={{flexDirection:'row', flexWrap:'wrap', justifyContent:'space-around', gap:'10px', display:'flex'}}>
            {techs.map((tech)=><TechLogo key={tech} img={tech}/>)}
        </div>
    </section>
)
export default FrontEndTechnologies