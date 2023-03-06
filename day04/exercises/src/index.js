import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Button from './components/Button';
import InputComponent from './components/InputComponent';
import AlertBox from './components/AlertBox';


const App = ()=>{
  return(
    <div style={{background:'#fafafa', width:'100%', display:'flex', flexDirection:'column'}}>
    <InputComponent nome='Input' />
    <Button/>
    <AlertBox message='success'/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

