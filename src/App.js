import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <div className="container-header">
        <div className="logo">
          <img src={logo} width="390px" height="390px" alt="logo" />
        </div>
        <div className="title">
          <h1>Bem vindo ao React</h1>
          <p>Dé os seus primeiros passos na tecnologia mais utilizada do mercado.</p>
        </div>
      </div>
      <div className="container-footer">
        <div className="about">
          <a href="https://pt-br.reactjs.org/" target="_blank"><button>Saiba mais</button></a>
        </div>
        <div className="description">
          <h3>Novas Tecnologias:</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
