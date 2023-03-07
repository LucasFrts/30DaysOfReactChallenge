import './App.css';
import { ComponentTitle } from './components/JsxTitle';
import Table from './components/NumberGenerator';
import WorldPopulation from './components/WorldPopulation';
import { tenHighestPopulation } from './components/worldPopulation';
const randomColorGenerator = ()=>{
  let possibilities = "0123456789abcdef"
  let color = '#'
  for(let i=0;i<6;i++){
    color += possibilities[Math.floor(Math.random() * 16)]
  }
  return color
}
const randomNumberGenerator = ()=>{
  let random = Math.floor(Math.random() * 100)
  return random
}
const fullArrayMethod = (method, times)=>{
  let array = []
  for(let i=0;i<times;i++){
   let num = method()
  !array.some((item)=> item === num) ? array.push(num) : i--
  }
  return array
}
function App() {
  const numberArray = fullArrayMethod(randomNumberGenerator, 32)
  const hexaArray = fullArrayMethod(randomColorGenerator, 32)
  return (
    <div style={{fontFamily:'helvetica'}} className="App">
      <ComponentTitle title="30 Days Of React" subtext="Number Generator">
      <small style={{fontSize: '1rem'}}><b style={{color:'#030'}}>even</b> <b style={{color:'#5b0000'}}>odd</b> <b style={{color:'#c6c605'}}>prime</b></small>
      </ComponentTitle>
      <div className='container'>
        <Table array={numberArray} rule={false}/>
      </div>
      <ComponentTitle title="30 Days Of React" subtext="Hexadecimal Colors">
      </ComponentTitle>
      <div className='container'>
        <Table array={hexaArray} rule={true}/>
      </div>
      <ComponentTitle title="30 Days Of React" subtext="World Population">
      <small style={{fontSize: '1rem'}}>Ten most populated countries</small>
      </ComponentTitle>
      <WorldPopulation data={tenHighestPopulation}/>
    </div>
  );
}

export default App;
