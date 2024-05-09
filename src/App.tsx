import React from "react";
import logo from "./logo.svg";
import "./App.css";

// atoms
// 1. TheIcon
// props: icon (Twitter, Tiktok etc.), size? ='medium' ('small' | 'meidum')
// <i href={/assets/icon.svg}></i>

// 2. LinkText
// props: url, label, isActive (boolean)
// <a href={url} >{label}</a>

// molecules
// 1. IconLink
// props: icon , url
// <div> <THeIcon icon={icon}> </div>

//organism
// 1. TheHeader
// <header>
//  <LinkText label='home' url='/home' />
//  <LinkText label='secondPage' url='/secondPage' />
// <IconLink icon="twitter" url="twitter/TokyoMeetAndFun">
// </header
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
