import Progressbar from "./Progressbar"
import { tenHighestPopulation } from "./worldPopulation"

const CountryComponentStyle = {display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'20px'}
const numberMask = (string)=>{
    let str = String(string)
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const CountryComponent = ({data:{country, population}})=>{
    const world =  tenHighestPopulation.find((k)=>k.country === 'World')
    let progressPercentage = (population)/(world.population) * 100
    progressPercentage+="%"
    const laterals = {width:'5rem', textAlign:'center', margin:'5px', fontWeight:'500', fontSize:'1.1rem'}
    const line = <div style={CountryComponentStyle}> <div style={laterals}>{country}</div> <Progressbar percentage={progressPercentage} color="#ffb15e"/><div style={laterals}> { numberMask(population) }</div></div>
    return(line)
}
const WorldPopulationStyle = {display:'flex', flexWrap:'wrap', justifyContent:'center', flexDirection:'column'}
const WorldPopulation = ({data})=>(
    <div style={{width:'80%', margin:'auto'}}>
<div style={WorldPopulationStyle}>{data.map((country)=><CountryComponent key={country.country} data={country}/>)}</div>
    </div>

)
export default WorldPopulation