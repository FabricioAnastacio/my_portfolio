import '../styles/Footer.css';
import {
  linkedin,
  github,
  instagram,
} from '../svg';

function Footer() {
  return (
    <footer id="Contact-footer">
      <div className="References">
        <ul>
          <li>Fonte: SUSE</li>
        </ul>
      </div>
      <div className="Footer-links">
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
        <h2>Obrigado por acessar minha humilde pagina</h2>
      </div>
      <div className="Autor">
        <p>Fabrício&reg; 2024</p>
      </div>
    </footer>
  );
}

export default Footer;
