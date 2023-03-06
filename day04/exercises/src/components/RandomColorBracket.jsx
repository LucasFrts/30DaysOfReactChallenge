import HexaColor from "./HexaNumber"
const RandomColorBracket = (props)=>(

    <div>
{
    ( ()=>{
        const brackets = []
        for(let i = 0; i< props.quantity;i++){
            brackets.push(<HexaColor key={i}/>)
        }
        return brackets
    })()
}
    </div>
)
export default RandomColorBracket