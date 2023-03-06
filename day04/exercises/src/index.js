import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import InputComponent from './components/InputComponent';
import { AlertBoxDanger, AlertBoxSuccess } from './components/AlertBox';
import FrontEndTechnologies from './components/FrontendTechnologies';
import Subscribe from './components/SubscribeComponent';
import RandomColorBracket from './components/RandomColorBracket';
import UserCard from './components/UserCard';
const App = ()=>{
  return(
    <div style={{ width:'100%', display:'flex', flexDirection:'column'}}>
     <UserCard/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

