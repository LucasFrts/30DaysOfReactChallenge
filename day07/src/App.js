import './App.css';
import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return( <header>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 6, 2020</small>
      </div>
    </header>)
  }

}

 
class TechList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(<main>
      <div className='main-wrapper'>
        <p>Prerequisite to get started react.js:</p>
        <ul>
          <TechList />
        </ul>
      </div>
    </main>)
  }
}

class Footer extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(<footer>
            <div className='footer-wrapper'>
               <p>Copyright 2020</p>
            </div>
         </footer>)
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(<div className="App">
            <Header/>
            <Main/>
            <Footer/>
          </div>)
  }
}

export default App;
