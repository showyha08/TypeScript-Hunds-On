import { useState, ReactElement } from "react";
import "./App.css";

function App(): ReactElement {
  const [counter, setCounter] = useState(0)
  const doAction = () => {
    setCounter(counter + 1)
  }
  return (
      <div>
        <h1 className="bg-primary text-white p-2">React sample</h1>
        <div className="container"></div>
        <h2 className="my-3">click button!</h2>
        <div className="alert alert-primary">
          <div className="row px-2">
          <h3 id="msg" className="col">{counter} click.</h3>
          <button onClick={doAction}
            className="btn btn-primary col-2">
            Click!
          </button>
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
