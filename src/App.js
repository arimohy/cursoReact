import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";

let nombre="yhomira"
let estaciones=["primavera","verano","otoño","invierno"]
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre"/>
        <h1>{nombre}</h1>
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>

        <ul>
          {estaciones.map((el,index)=>(
              <li key={index}>{el}</li>
            ))
          }
        </ul>

        <p>{2+1}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    <section>
      <Componente msg="Hola Soy un componente funcional expresado"/>
    </section>
    </div>
    </>
  );
}

export default App;
