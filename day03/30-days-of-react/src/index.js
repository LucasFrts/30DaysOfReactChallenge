import React from 'react'
import ReactDOM from 'react-dom'

import userImage from './images/user.png'

const root = document.getElementById('root')

const welcome = "Welcome to 30 days of React";
const title = "getting started with react";
const subtitle = "Javascript library";
const student = "Lucas Freitas";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Mar 4, 2023";
const profilePicture = (
  <div >
    <img style={{width:'200px', height:'200px'}} src={userImage} alt="user"></img>
  </div>
)


const header = (
  <header>
    <div className="header-wrapper">
      {profilePicture}
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {" "}
        <strong>{student}</strong>
      </p>
      <small>Date: {date}</small>
      <p>
        Instructor {author.firstName} {author.lastName}
      </p>
    </div>
  </header>
);
const techs = ["HTML", "CSS", "JavaScript"];

const numOne = 3;
const numTwo = 2;
const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
);
const yearBorn = 2001;
const currentYear = new Date().getFullYear();
const age = currentYear - yearBorn;

const main = (
  <main >
    <div className="main-wrapper">
      <p>
        Prerequisite to get started{" "}
        <em style={{ fontWeight: 800 }}>react.js</em>:
      </p>
      <ul>
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {result}
      Lucas Freitas is {age} years old
    </div>
  </main>
);

const copyright = <p>Copyright 2023</p>
const footer = (
  <footer>
    <div className="footer-wrapper">
      {copyright}
    </div>
  </footer>
);
const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

ReactDOM.render(app, root);