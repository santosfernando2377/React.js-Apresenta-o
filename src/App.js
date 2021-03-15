import './App.css';
import logo from './logo.svg';
import nodejs from '../src/img/nodejs.svg';
import typescript from '../src/img/dactilografado.svg';
import swift from '../src/img/rapido.svg';
import sass from '../src/img/sass.svg';


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
          <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer"><button>Quero Saber Mais</button></a>
        </div>
        <div className="description">
          <h3>Outras Tecnologias:</h3>
          <div className="tecnology">
            <img src={nodejs} width="45px" height="45px" alt="logo nodejs"/>
            <img src={typescript} width="45px" height="45px" alt="logo typescript"/>
            <img src={swift} width="45px" height="45px" alt="logo swift"/>
            <img src={sass} width="45px" height="45px" alt="logo sass"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;