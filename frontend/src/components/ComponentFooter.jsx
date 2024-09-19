import '../styles/Footer.css';
import {
  linkedin,
  github,
  instagram,
} from '../svg';

function Footer() {
  return (
    <footer id="Contact-footer">
      <div className="Footer-links">
        <a href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
          <img src={ github } alt="Github Link" />
        </a>
        <a href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
          <img src={ linkedin } alt="Linkedin Link" />
        </a>
        <a href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
          <img src={ instagram } alt="Instagram Link" />
        </a>
      </div>
      <h2>Obrigado por acessar minha humilde pagina</h2>
    </footer>
  );
}

export default Footer;
