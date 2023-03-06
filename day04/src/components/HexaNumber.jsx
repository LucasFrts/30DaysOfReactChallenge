
const hexaColor = ()=>{
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6;i++){
        color += str[Math.floor(Math.random() * str.length)]
    }
    return '#' + color
}
const HexaColor = ()=>(
    <div>{hexaColor()}</div>
)
export default HexaColor