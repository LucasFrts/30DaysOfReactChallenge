import { useState, React } from 'react'
import ReactDOM from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () =>{
  const [count, setCount] = useState(0)
  const [image, setImage] = useState('https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg')

  const changeAnimal = ()=>{
    const dog = 'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg'
    const cat = 'https://static.poder360.com.br/2020/10/gato-animal-covid-19-scaled.jpg'

    image === cat ? setImage(dog) : setImage(cat)
  }

  const addOne = ()=>{
    setCount( count + 1)
  }
  const minusOne = ()=>{
    setCount( count - 1)
  }
    return(
    <div className="App">
       <div className='animal'>
          <img height='200px' width='200px' src={image} alt='animal' />
      </div>
    <h1>{count}</h1>
    <div className="container">
   
    <button type='button' onClick={()=>addOne()}>Add one</button> 
    <button type='button' onClick={()=>minusOne()}>Minus one</button>
      <button type='button' onClick={()=>changeAnimal()}>Change</button>
    </div>

    </div>
    )
  }


export default App
