import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'



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
const Button = ({text, onclick, styles})=>{
  return(
    <button style={styles} onClick={onclick}>
      {text}
    </button>
  )
}



function App() {
  const [styles, setStyles] = useState()
  const [stylesFilter, setStilesFilter] = useState()
  const [loading, setLoading] = useState(false)

  const fechData = ()=>{
    setLoading(true)
    setTimeout(()=>{
      console.log('fetching data')
      setLoading(false)
    }, 3000)
  }

  useEffect(()=>{
    const images = handleSeason()
    const color = handleDaytime()
    setStyles({
      backgroundImage: `url(${images})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover',
      height: '100vh',
      width: '100vw',
      display: 'flex',
      placeItems: 'center',
    })
    setStilesFilter({
      backgroundColor: color,
      height: '100vh',
      width: '100vw',
    })
  }, [])
  
  const handleSeason = ()=>{
    const time = new Date()
    const images = {
       autumn : 'https://images.hdqwalls.com/download/autumn-trees-fall-gj-1920x1080.jpg',
       winter : 'https://wallpapercave.com/wp/wp7963342.jpg',
       spring : 'https://wallpaperaccess.com/full/490164.jpg',
       summer : 'https://wallpapercave.com/wp/OQfqPA3.jpg',
    }


    const month = time.getMonth()
    console.log(month)
    if(month == 11 || month < 2){
      return images.winter
    } 
    if(month >= 2 && month < 5){
      return images.spring
    } 
    if(month >= 5 && month < 8){
      return images.summer
    }
    else{
      return images.autumn
    }

  }
  const handleDaytime = ()=>{
    const time = new Date()
    const timeOfDay = {
      morning: 'rgba(255, 255, 255, 0.2)',
      noon: 'rgba(255, 255, 255, 0.4)',
      evening : 'rgba(0, 0, 0, 0.4)',
      night: 'rgba(0, 0, 0, 0.8)'
    }
    const daytime = time.getHours()
    if(daytime > 5 && daytime < 12){
      return timeOfDay.morning
    } 
    if(daytime > 11 && daytime < 15){
      return timeOfDay.noon
    } 
    if(daytime > 14 && daytime < 19){
      return timeOfDay.evening
    }
    else{
      return timeOfDay.night
    }
  }
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
  const date = new Date()
  const dia = date.getDate()
  const mes = months[date.getMonth()].slice(0, 3)
  const ano = date.getFullYear()
  const hora = date.getHours()
  const showDate = `${dia} ${mes}, ${ano}`
  return (
    <div style={styles} className="App">
      <div style={stylesFilter}>
        <h3>
          Hora: {hora}
        </h3>
        <h4>
          Dia: {showDate}
        </h4>
        {loading && <div className='loader'></div>}
        <Button text={loading ? 'fetching' : 'fetch data'} onclick={fechData} styles={buttonStyles}/>
      </div>
    </div>
  )
}

export default App
