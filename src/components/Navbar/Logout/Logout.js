import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/logout-512.png'

// function Logout
const Logout = (props) => {

  const logout = () => {
    props.setSessionToken(false)
  }

  return (
    <div>
      <img id="logout" className="logout" src={logoutPic} alt="logout" onClick={logout} />
    </div>
  );
}

export default Logout;