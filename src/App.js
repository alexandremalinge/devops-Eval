import {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount((prevCount) => prevCount + 2);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <p>Compteur : <span data-cy="count">{count}</span></p>
          <button data-cy="button" onClick={onButtonClick}>+1</button>
        </div>
      </header>
    </div>
  );
}

export default App;
