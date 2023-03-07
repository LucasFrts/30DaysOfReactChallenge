import './App.css';


const Skill = ({skill: [tech, level]})=>(
  <li>
    {tech} : {level}
  </li>
)
const Skills = ({skills})=>{
  const skillsList = skills.map((skill)=><Skill key={skill} skill={skill}></Skill>)
  return(<ul>
    {skillsList}
  </ul>)
}

const Numbers = ({numbers})=>{
  const list = numbers.map((number)=><li key={number}>{number}</li>)
  return list
}
const Country = ({country:{name, city}})=>{
  return(
    <>
      <h1>{name}</h1>
      <small>{city}</small>
    </>
  )
}
const Countries = ({countryes})=>{
  const countryList = countryes.map((country)=>(<Country key={country.name} country={country}/>))
  return(countryList)
}

function App() {
  const numbers = [1, 2, 3, 4, 5]
  const skills = [
    ["HTML", 10],
    ["CSS", 7],
    ["javaScript", 9],
    ["React", 8]
  ]
  const countries = [
    { name: 'Finland', city: 'Helsinki' },
    { name: 'Sweden', city: 'Stockholm' },
    { name: 'Denmark', city: 'Copenhagen' },
    { name: 'Norway', city: 'Oslo' },
    { name: 'Iceland', city: 'Reykjavík' },
  ]
  return (
    <div className="App">
      <div className="container">
          <>
            <h1>Numbers List</h1>
            <ul>
              <Numbers numbers={numbers}/>
            </ul>
            <h1>Skills level</h1>
            <Skills skills={skills}/>
            <h1>Countryes List</h1>
            <Countries countryes={countries}/>
          </>

      </div>
    </div>
  );
}

export default App;
