import React from 'react';
import ReactDOM from 'react-dom/client';
import htmlicon from './image/html-5--v1.png'
import cssicon from './image/css-icon.png'
import jsicon from './image/javascript-logo.svg'
import reacticon from "./image/logo.svg"
import { Fragment } from 'react';
import userImg from "./image/user.png"
import starImg from "./image/verified.svg.png"
const title = (<h3 style={{marginBottom:'50px'}}>Front End Technologies</h3>)
const techs = [htmlicon, cssicon, jsicon, reacticon]
const sectionStyle = {display:'flex', flexDirection:'row', gap: '20px', justifyContent:'center'}
const mainContentStyle = {width: '80%', textAlign:'center', margin:'auto', backgroundColor:'white', padding:'25px'}
const main = (
  <div style={mainContentStyle}>
  {title}
  <section style={sectionStyle}>
  {techs.map((tech)=>(<img style={{objectFit:'cover', width:'200px', height:'200px', aspectRatio: '4/4'}} src={tech} alt='img'></img>))}
  </section>
  
  </div>

  
)

const text = (<p style={{fontWeight:'500',paddingTop:'25px', paddingBottom:'40px', fontSize:'16px', color:'#202020'}}>Sign up with your email adress to receive new and updates</p>)
const cardTitle = ( <h1 style={{fontSize:'26px', color:'#111111'}}>SUBSCRIBE</h1>)
const inputStyle = { padding:'10px', borderRadius: '8px', border:'1px solid #fafafa', margin: '10px'}
const labelStyle = {transform:'translate(-218px, 22px) scale(1)', position:'absolute', padding:'0px 12px', color:'gray', textAlign:'unset'
}

const inputs = (
  <Fragment>
    <div>
    <input style={inputStyle} id='fname'/>
    <label style={labelStyle} htmlFor='fname'>First name</label>

    <input style={inputStyle} id='lname'/>
    <label style={labelStyle} htmlFor='lname'>Last name</label>
    <input style={inputStyle} id='email'/>
    <label style={labelStyle} htmlFor='email'>Email</label>
    </div>
  </Fragment>
)
const buttonStyles = {
  padding:'15px 25px', margin: '40px auto', width:'40%', backgroundColor:'#f55', color:'white', fontSize:'16px', fontWeight:'600', borderRadius:'20px', border:'none', cursor:'pointer'
}
const customButton = (<button style={buttonStyles} type='button'>Subscribe</button>)

const cardStyles = {
  width:'90%', backgroundColor: '#a6dcfd', margin:'auto', padding:'25px', borderRadius:'25px', display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center'
}
const card = (
  <div style={cardStyles}>
   {cardTitle}
    {text}
    {inputs}
    {customButton}
    
  </div>

)
const nameAndStar = (
  <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
    <h2 style={{fontSize:'18px', color:'#202020', fontWeight:'600', marginTop:'30px', paddingLeft:'8px'}}>LUCAS FREITAS </h2>
    <img style={{width:'20px', height:'20px', margin:'5px'}}src={starImg} alt="star"/>
  </div>
)
const userInfo = (
  <section style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', margin:'auto auto'}}>
    <div style={{textAlign:'justify', display:'flex', justifyContent:'center', flexDirection:'column', width:'20%'}}>
    <img style={{width:'200px', height:'200px', margin:'auto'}} src={userImg} alt="user"/>
    {nameAndStar}
    <p style={{fontSize:'16px', color:'#202020', padddingTop:'14px', paddingLeft:'8px'}}>Web-developer Jr, Brazil</p>  
    </div>
  
  </section>
)
const badge = {
  listStyleType:'none', padding:'5px 10px', borderRadius:'5px', color:'white', backgroundColor:'rgb(0, 196, 196)', fontWeight:600, fontSize:'13px'
}
const myTechs = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python', 'Flask', 'MYSQL', 'GIT', 'Laravel']
const skillsSection = (
  <>
  <h1 style={{fontSize:'18px', color:'#202020', fontWeight:'600', marginTop:'30px', paddingLeft:'8px'}}>SKILLS</h1>
  <ul style={{display:'flex', flexDirection:'row', gap:'10px', paddingLeft:'8px', flexWrap:'wrap'}}>
    {myTechs.map((tech)=>(<li key={tech} style={badge}>{tech}</li>))}
  </ul>
  <p style={{fontSize:'12px', color:'#202020', padddingTop:'12px', paddingLeft:'8px', marginTop:'40px'}}>&#x23f0; Joined on Mar 4, 2023</p>
  </>

)


const userCardStyles = {width:'90%', backgroundColor:'white', margin:'50px auto', padding:'25px', borderRadius:'5px'}

const userCard = (
  <div style={userCardStyles}>
    {userInfo}
    {skillsSection}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section style={{ padding:'25px'}}>
    
    {main}
    {card}
    {userCard}
    </section>
   
  
  </React.StrictMode>
);

