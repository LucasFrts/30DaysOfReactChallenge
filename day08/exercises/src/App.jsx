import { useState } from 'react'
import './App.css'
import userImage from './assets/images/user.png'

const showDate = (time)=>{
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
  return `${date} ${month}, ${year}`
}

const UserCard = ({user:{firstName, lastName, image}}) =>{
  return(
  <div className="user-card">
    <img height='150px' width='150px' src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
  )

}

const Button = ({text, onClick, style}) =>{
  return(
    <button style={style} onClick={onClick}>{text}</button>
  )
}
const buttonStyles = {
  backgroundColor:'#61dbfb',
  padding:10,
  border:'none',
  borderRadius:5,
  margin:3,
  cursor:'pointer',
  fontSize:18,
  color:'white',
}

const Header = ({data, theme:{backgroundColor, color} })=>{
  const {welcome, title, subtitle, author: {firstName, lastName }, date} = data
  return(
    <header  style={{backgroundColor: backgroundColor == '#fff' ? "#61dbfb" :  backgroundColor, color: color}}>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  )
}

const Count = ({count, addOne, minusOne}) =>{
  return(
  <div>
    <h1>{count}</h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
  )
}

const TechList = ({techs})=>{
  const techsFormated = techs.map((tech)=> <li key={tech}>{tech}</li>)
  return techsFormated
}

const Main = ({techs, user, greetPeople, handleTime, changeBackground, count, addOne, minusOne, theme: {backgroundColor, color}})=>{
  return(
    <main style={{minHeight: "70vh",  borderTop:'1px solid white', backgroundColor: backgroundColor, color:color }}>
      <div className="main-wrapper">
        <p>Pre-requisites to get started react.js:</p>
        <ul>
          <TechList techs={techs}/>
        </ul>
        <UserCard user={user}/>
        <Button
        text='GreetPeople'
        onClick={greetPeople}
        style={buttonStyles}
        />
        <Button
        text='Show time'
        onClick={handleTime}
        style={buttonStyles}
        />
        <Button
        text='Change Background'
        onClick={changeBackground}
        style={buttonStyles}
        />
        <Count count={count} addOne={addOne} minusOne={minusOne}/>
      </div>
    </main>
  )
}

const Footer = ({date, theme})=>{
  return(
    <footer style={theme}>
      <div style={{ borderTop:'1px solid white'}} className="footer-wrapper">
        <p>Copyright {date.getFullYear()}</p>
      </div>
    </footer>
  )
}


const App = ()=> {
  const [count, setCount] = useState(0)
  const [Theme, setTheme] = useState({backgroundColor: '#fff', color:'#000'})
  const addOne = ()=>{
    setCount(count + 1)
  }
  const minusOne = ()=>{
    setCount(count - 1)
  }
  const handleTime = ()=>{
    alert(showDate(new Date()))
  }
  const greetPeople = ()=>{
    alert('Welcome to 30 days of React challenge')
  }
  const changeBackground = ()=>{
    Theme.backgroundColor == '#fff' ? setTheme({backgroundColor: '#1d242f', color:'#fff'}) : setTheme({backgroundColor: '#fff', color:'#000'})
  }
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Lucas',
      lastName: 'Freitas',
    },
    date: '20 mar, 2023',
  }
  const techs = ['HTML', 'CSS', 'JavaScript']
  const user = {...data.author, image:userImage}

  return (
    <div className="App">
      <Header theme={Theme} data={data}/>
      <Main
      theme={Theme}
      user={user}
      techs={techs}
      handleTime={handleTime}
      greetPeople={greetPeople}
      changeBackground={changeBackground}
      addOne={addOne}
      minusOne={minusOne}
      count={count}/>
      <Footer theme={Theme} date={new Date()}/>
    </div>
  )
}

export {App}
