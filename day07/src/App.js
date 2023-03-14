import './App.css';
import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props)
  }
  greetPeople = ()=>{
    alert('greet people!')
  }

  render(){
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data
    
    return( <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{date}</small>
        <button onClick={this.greetPeople}>Click</button>
      </div>
    </header>)
  }

}

 
class TechList extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const {techs} = this.props
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
          <TechList techs={this.props.techs} />
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
    const mounths = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ]
    const actualMounth = mounths[this.props.date.getMonth()].slice(0, 3)
    return(<footer>
            <div className='footer-wrapper'>
               <p>Copyright {this.props.date.getDate()} {actualMounth} {this.props.date.getFullYear()}</p>
            </div>
         </footer>)
  }
}


class App extends React.Component{
  
  constructor(props){
    super(props)
  }
  
  render(){
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      },
      date: 'Oct 6, 2020',
    }
    const techs = ['HTML', 'CSS', 'JavaScript']

    return(<div className="App">
            <Header data={data}/>
            <Main techs={techs}/>
            <Footer date={new Date()}/>
          </div>)
  }
}

export default App;
