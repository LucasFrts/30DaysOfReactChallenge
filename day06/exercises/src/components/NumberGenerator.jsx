const colorRuler = (bool, name)=>{
    if(bool){
        return name
    }else{
        let count = 0
        for(let i = 1;i<=name;i++){

            if(name % i === 0){
                count++ 
            }
        }
        return count === 2 ? '#ff7c7c' : ( name % 2 === 0 ? "rgb(126, 208, 126)" : "#ffff73")
    }
}

const Block =  ({number, hexa})=>(
    <>
{
    ( ()=>{
        const color = colorRuler(hexa, number)
        
        const block = (<div style={{backgroundColor:color, display:'flex', justifyContent:'center', width:'5rem', padding:'3rem', fontSize:'1.6rem', textAlign:'center', border:'0.2rem solid white', borderRadius:'1rem', color:'rgb(49, 49, 49)'}}>{number}</div>)
        return block
    })()
}
    </>

)
const Table = ({array, rule})=>{
    
    const tableBlocks = array.map((number)=><Block key={number} number={number} hexa={rule}/>) 
    const container = <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap', justifyContent:'center', width:'85%', margin:'auto'}}>{tableBlocks}</div>
    return(
        container
    )
}

export default Table