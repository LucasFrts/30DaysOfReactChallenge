const ComponentTitle = ({title, subtext, children})=>(
    <header style={{marginBottom:'20px'}} className="container">
        <h1 style={{fontSize:'4.2rem'}}>{title}</h1>
        <p style={{fontSize: '2rem'}}>{subtext}</p>
        {children}
    </header>
    
)
export {ComponentTitle}