import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Button = ({text, onClick, style})=>(
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

const Header = ({data:{
  welcome,
  title,
  subtitle,
  author: { firstName, lastName },
  date,
}})=>{
  return(
    <header>
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
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: '3px auto',
  cursor: 'pointer',
  fontSize: 22,
  color: 'white',
}
const Login = ()=>{
  return(
    <div>
      <h3>Please Login</h3>
    </div>
  )
}
const Welcome = ()=>{
  return(
    <div>
        <h1>Welcome to 30 Days of React</h1>
    </div>
  )
}
const Message = ({message})=>{
  return(
    <div>
      <h1>{message}</h1>
    </div>
  )
}
const TechList = ({techs})=>{
  const TechsFormated = techs.map((tech)=><li key={tech}>{tech}</li>)
  return TechsFormated

}

const Main = ({
  techs,
  greetPeople,
  handleTime,
  loggedIn,
  handleLogin,
  message
}) =>{
  const status = loggedIn ? <Welcome/> : <Login/>
  return(
    <main>
      <div className="main-wrapper">
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList techs={techs} />
        </ul>
        {
          techs.length === 3 && (
            <p>
              You have all the prerequisite courses to get started React
            </p>
          )
        }
        <div>
          <Button
          text="Show Time"
          onClick={handleTime}
          style={buttonStyles}
          />
          {' '}
          <Button
          text='Greet People'
          onClick={greetPeople}
          style={buttonStyles}
          />
          {
            !loggedIn && <p>Please login to acess more information about 30 Days of React challenge</p>
          }
        </div>
        <div style={{margin: 30}}>
          <Button
          text={loggedIn ? 'Logout' : 'Login'}
          style={buttonStyles}
          onClick={handleLogin}
          />
          <br />
          {status}
        </div>
        <Message message={message}/>
      </div>
    </main>
  )
}
const Footer = ()=>{
  const data  = new Date()
  return(
    <footer>
      <div className='footer-wrapper'>
        <p>Copyright {data.getFullYear()}</p>
      </div>
    </footer>
  )
}


function App() {
  const [logged, setLogged] = useState(false)
  const [techs, setTechs] = useState(['HTML', 'CSS', 'JS'])
  const [message, setMessage] = useState('Click show time or Greet people to change me')

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
      'December'
    ]
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${date} ${month}, ${year}`
  }
  const handleLogin = ()=>{
    setLogged(!logged)
  }
  const handleTime = ()=>{
    setMessage(showDate(new Date()))
  }
  const greetPeople = ()=>{
    setMessage('Welcome to 30 days of React Challenge, 2023')
  }
  
  const data = {
    welcome: '30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Lucas',
      lastName: 'Freitas',
    },
    date: showDate(new Date()),
  }

  return (
    <div className="App">
      <Header data={data}/>

      <Main 
      techs={techs}
      handleTime={handleTime}
      handleLogin={handleLogin}
      greetPeople={greetPeople}
      loggedIn={logged}
      message={message}
       />

      <Footer date={new Date()}/>

    </div>
  )
}

export default App
