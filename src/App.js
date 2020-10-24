import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'

function App() {

  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(
    () => {
      const token = localStorage.getItem('token')
      if (token) {
        setSessionToken(token)
      }
    }, []
  )


  const updateToken = (newToken) => {
    setSessionToken(newToken)
    localStorage.setItem('token', newToken)
  }

  const clearToken = () => {
    setSessionToken(undefined)
    localStorage.clear()
  }


  return (
    <div className="App">
      <Navbar clearToken={clearToken} />
      { !sessionToken ? <Auth updateToken={updateToken} /> : <TuesdayContent sessionToken={sessionToken} /> }
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
