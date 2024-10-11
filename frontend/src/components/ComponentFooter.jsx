import '../styles/Footer.css';
import {
  linkedin,
  github,
  instagram,
} from '../svg';

function Footer() {
  return (
    <footer id="Contact-footer">
      <nav className="Nav-footer">
        <a href="#Header">Voltar ao topo</a>
        <a href="#Projects">Projects</a>
        <a href="#Description">Resume</a>
      </nav>
      <hr />
      <div className="Footer-links">
        <div className="Autor">
          <p>Fabrício&reg; 2024</p>
          <p>|</p>
          <p>Obrigado por acessar minha humilde pagina</p>
        </div>
        <section>
          <a href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
            <img src={ github } alt="Github Link" />
          </a>
          <a href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
            <img src={ linkedin } alt="Linkedin Link" />
          </a>
          <a href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
            <img src={ instagram } alt="Instagram Link" />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
