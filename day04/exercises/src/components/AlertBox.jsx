const alertStyle = {top:'0px', backgroundColor:'#f44336', padding: '10px', color: 'white', fontWeight:'600', zIndex:9999, position:'absolute', lineHeight:'20px', borderRadius:'4px', width:'80%'}
const AlertBox = (props)=>(

    <div style={{width:'100%', justifyContent:'center', boxSizing:'border-box', display:'flex'}}>
    <div style={alertStyle}>
        <p>{props.message}</p>
    </div>
    </div>
)
export default AlertBox