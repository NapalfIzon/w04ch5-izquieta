import logo from "./face.png";
import "./App.css";

function App() {
  const consoleMessage = console.log(
    "Hola a todos, ¡La pizza con piña es lo más!"
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Modificando la página... poco a poco...</p>
        {consoleMessage}
        <a
          className="App-link"
          href="https://youtu.be/kuzTxsVWb3M"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Si entras te enamorarás de ella!
        </a>
      </header>
    </div>
  );
}

export default App;
