import React from 'react';
import ReactDOM from 'react-dom/client';
import htmlicon from './image/html-5--v1.png'
import cssicon from './image/css-icon.png'
import jsicon from './image/javascript-logo.svg'
import reacticon from "./image/logo.svg"
import { Fragment } from 'react';
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

const text = (<p>Sign up with your email adress to receive new and updates</p>)
const cardTitle = ( <h1>SUBCRIBE</h1>)
const inputs = (
  <Fragment>
    <div>
    <input id='fname'/>
    <label htmlFor='fname'>First name</label>
    </div>
    <input id='lname'/>
    <label htmlFor='lname'>Last name</label>
    <input id='email'/>
    <label htmlFor='email'>Email</label>
  </Fragment>
)
const customButton = (<button type='button'>Subscribe</button>)
const card = (
  <Fragment>
   {cardTitle}
    {text}
    {customButton}
  </Fragment>

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section style={{backgroundColor:'gray', padding:'25px'}}>
    
    {main}
  {card}
    </section>
   
  
  </React.StrictMode>
);

