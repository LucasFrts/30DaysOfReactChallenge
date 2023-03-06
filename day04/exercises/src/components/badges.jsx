const badge = {
    listStyleType:'none', padding:'5px 10px', borderRadius:'5px', color:'white', backgroundColor:'rgb(0, 196, 196)', fontWeight:600, fontSize:'13px'
  }
  const Badges =(props)=> (
    <>
    <ul style={{display:'flex', flexDirection:'row', gap:'10px', paddingLeft:'8px', flexWrap:'wrap'}}>
      {props.techs.map((tech)=>(<li key={tech} style={badge}>{tech}</li>))}
    </ul>
    </>
  
  )
  export default Badges