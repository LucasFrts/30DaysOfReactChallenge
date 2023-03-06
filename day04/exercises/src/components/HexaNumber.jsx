
const hexaColor = ()=>{
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6;i++){
        color += str[Math.floor(Math.random() * str.length)]
    }
    return '#' + color
}
const HexaColor = ()=>(
    <div>
    {
        (()=>{
            const backcolor = hexaColor()
            return(<div style={{backgroundColor:backcolor, textAlign:'center', padding:'20px', border:'1px solid white', borderRadius:'8px', color:'white', fontWeight:'600', fontSize:'17px'}}>{backcolor}</div>)
        })()
    }
    </div>

)
export default HexaColor