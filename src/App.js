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
          <img src={logo} width="390px" height="390px" alt="logo"/>
        </div>
        <div className="title">
          <h1>Bem vindo ao React</h1>
          <p>Dê os seus primeiros passos na tecnologia mais utilizada do mercado</p>
          <a href="https://pt-br.reactjs.org/" target="_blank" rel="noreferrer"><button>React.Js</button></a>
        </div>
      </div>
      <div className="container-footer">
        <div className="about">
          <p>Clique no botão abaixo e vá para o próximo nível   🚀</p>
          <div>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><button>Next.Js</button></a>  
          </div>
        </div>
        <div className="description">
          <h3>Conheça outras tecnologias:</h3>
          <div className="tecnology">
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src={nodejs} width="45px" height="45px" alt="logo nodejs"/></a>
            <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src={typescript} width="45px" height="45px" alt="logo typescript"/></a>
            <a href="https://developer.apple.com/swift/" target="_blank" rel="noreferrer"><img src={swift} width="45px" height="45px" alt="logo swift"/></a>
            <a href="https://sass-lang.com/" target="_blank" rel="noreferrer"><img src={sass} width="45px" height="45px" alt="logo sass"/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;