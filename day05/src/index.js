import React from 'react';
import ReactDOM from 'react-dom/client';

import userImage from './images/user.png'


const Age = ({age})=>(<h1>The person is {age} years old.</h1>)
const Weight = ({weight})=>(<p>The weight of the object on earth is {weight} N.</p>)

const Status = ({status})=>{
  let result = status ? "Old enough to drive" : "Too young for driving"
  return <p>{result}</p>
}



const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}



const Header = ({
  data:{welcome, 
  title, 
  subtitle, 
  profilePicture, 
  student, 
  date, 
  author:{firstName, lastName}}
})=>{
  return(
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      {profilePicture}
      <p>
        {" "}
        <strong>{student}</strong>
      </p>
      <small>Date: {date}</small>
      <p>
        Instructor {firstName} {lastName}
      </p>
    </div>
  </header>
)};





const Main = ({techs, age, result, student})=> {
  return(
  <main >
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <em style={{ fontWeight: 800 }}>react.js</em>:
      </p>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {result}

      
      {student} is {age} years old
    </div>
  </main>
)};


const Footer = ({copyright})=> {
  return(
  <footer>
    <div className="footer-wrapper">
      {copyright}
    </div>
  </footer>
)};


const Button = ({text, onclick})=>(<button onClick={onclick}>{text}</button>)

const App = ()=> {
  const mass = 51.76
  const gravity = 9.81

  let currentYear = 2023
  let birthYear = 2005
  const age = currentYear - birthYear // 15 years
  const status = age >= 18
  const techs = ["HTML", "CSS", "JavaScript"];

  const ProfilePicture = () =>(
    <div >
      <img style={{width:'200px', height:'200px'}} src={userImage} alt="user"></img>
    </div>
  )
 
const data = {
   date  : showDate(new Date()),
   welcome : "Welcome to 30 days of React",
 title : "getting started with react",
 subtitle : "Javascript library",
 student : "Lucas Freitas",
 author : {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
},
profilePicture: <ProfilePicture/>
}
const copyright = <p>Copyright {showDate(new Date())}</p>
const numOne = 3;
const numTwo = 2;
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);

  return(
  <div className="app">
    <Header 
      data={data}/>
    <Age age={age}/>
    <Weight weight={mass * gravity}/>
    <Status status={status}/>
    <Main techs={techs} age={age} result={result} student={data.student}/>
    <Button onclick={()=>{
      alert('Welcome to 30 days of React Challenge, 2023')
    }} text="Greet People"/>
    <Button onclick={()=>{
    alert(showDate(new Date()))
  }} text="Show Time"/>
    
    <Footer copyright={copyright}/>
  </div>
)};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


