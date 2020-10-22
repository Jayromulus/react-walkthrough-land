import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'

function App() {
  // let numbers = [1, 2, 3, 4];
  // let one = numbers[0];
  // let two = numbers[1];
  // let [three, one, two, four] = numbers;

  //  let sessionToken, function setSessionToken(newValue) { sessionToken = newValue}
  const [sessionToken, setSessionToken] = useState(undefined);
  // console.log(sessionToken);

  return (
    <div className="App">
      <Navbar setSessionToken={setSessionToken} />
      { !sessionToken ? <Auth setSessionToken={setSessionToken} /> : <TuesdayContent sessionToken={sessionToken} /> }
    </div>
  );
}

const TuesdayContent = (props) => {
  return (
    <div>
      <h1><b>++++++++++++++++++++</b></h1>
      <p>{props.sessionToken}</p>
    </div>
  )
}

export default App;
