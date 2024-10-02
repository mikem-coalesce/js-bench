import logo from './logo.svg';
import './App.css';
import Bench2 from './Bench'; // This should now work correctly

function App() {
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
      </header>
      <main>
        <Bench2 />  
      </main>
    </div>
  );
}

export default App;
