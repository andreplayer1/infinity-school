import './index.css';
import perfil from './images/perfil.jpg';
function App() {
  return (
    <div className="App">
      <p class="form" id="name">André dos Santos Barbosa</p>
      <img id="perfil" src={perfil} alt="fotoPerfil"/>
      <p class="form" id="birth">Nascimento: 06/06/1994</p>
      <p class="form" id="about">Sobre: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae non aliquid, blanditiis, optio corrupti velit delectus dignissimos mollitia nam magnam, neque reiciendis dolore beatae voluptatibus dolorem unde corporis id eligendi!</p>
      <p class="form" id="trabalhos">Experiencias:
      <ul>
        <div className="exp">
          <li>Empresa: Google</li>
          <li>Cargo: Software Enginner</li>
          <li>Periodo: 2 Anos</li>
        </div>
        <div className="exp">
          <li>Empresa: Facebook</li>
          <li>Cargo: Software Enginner</li>
          <li>Periodo: 3 Anos</li>
        </div>
        <div className="exp">
          <li>Empresa: Orkut</li>
          <li>Cargo: Software Enginner</li>
          <li>Periodo: 5 Anos</li>
        </div>

      </ul>
      </p>
    </div>
  );
}

export default App;