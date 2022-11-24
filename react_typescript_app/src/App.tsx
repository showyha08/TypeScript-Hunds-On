import { useState, ReactElement } from "react";
import "./App.css";
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

function App(): ReactElement {
  const [msg, setMsg] = useState("This is sample message.");
  return (
      <div>
        <h1 className="bg-primary text-white p-2">React sample</h1>
        <div className="container"></div>
        <h2 className="my-3">click button!</h2>
        <div className="alert alert-primary">
          <div className="row px-2">
            <h3 id="msg">{msg}</h3>
          </div>
        </div>
      </div>
      );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
