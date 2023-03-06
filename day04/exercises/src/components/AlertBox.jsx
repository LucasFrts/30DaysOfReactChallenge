const AlertBoxDanger = (props)=>{
    const alertStyle = {top:'0px', backgroundColor:'#f44336', padding: '10px', color: 'white', fontWeight:'600', zIndex:9999, position:'absolute', lineHeight:'20px', borderRadius:'4px', width:'80%'}    
    return(

    <div style={{width:'100%', justifyContent:'center', boxSizing:'border-box', display:'flex'}}>
        <div style={alertStyle}>
            <p>{props.message}</p>
        </div>
    </div>
)}
const AlertBoxSuccess = (props)=>{
    const alertStyle = {top:'0px', backgroundColor:'rgb(69, 217, 148)', padding: '10px', color: 'white', fontWeight:'600', zIndex:9999, position:'absolute', lineHeight:'20px', borderRadius:'4px', width:'80%'}    
    return(

    <div style={{width:'100%', justifyContent:'center', boxSizing:'border-box', display:'flex'}}>
        <div style={alertStyle}>
            <p>{props.message}</p>
        </div>
    </div>
)}
export {AlertBoxDanger, AlertBoxSuccess}