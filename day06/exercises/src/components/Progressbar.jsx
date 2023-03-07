const Progressbar = ({percentage, color})=>{
    const bar = (
        <div style={{width:'70%'}}>
   <div style={{width:percentage, backgroundColor:color, height:'4rem'}}></div>
        </div>
 )
    return(bar)
}
export default Progressbar