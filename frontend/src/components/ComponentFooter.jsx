import { useCallback, useContext } from 'react';
import '../styles/Footer.css';
import {
  linkedin,
  github,
  instagram,
  email,
} from '../svg';
import Contact from './Contact';
import AppContext from '../context/AppContext';

function Footer() {
  const { modeThame } = useContext(AppContext);
  const Email = 'fabricio12nastacio@gmail.com';

  const copyToClipboard = useCallback(async (text) => {
    const customAlert = (txt) => alert(txt);
    try {
      await navigator.clipboard.writeText(text);
      customAlert('Email copiado para area de transferência');
    } catch (e) {
      customAlert('Email não copiado, verifique o erro e o email no console');
      console.log({
        Email: 'fabricio12nastacio@gmail.com',
        Erro: e.message,
      });
    }
  }, []);
  return (
    <footer id="Contact-footer" className={ `Contact-footer-${modeThame}` }>
      <nav className="Nav-footer">
        <h1>CONTATO</h1>
        <a href="#Header">Voltar ao topo</a>
      </nav>
      <div className="Footer-links">
        <Contact />
        <hr />
        <section className="Contact-links">
          <button onClick={ () => copyToClipboard(Email) } className="Button-Email">
            <img src={ email } alt="E-mail" />
            E-mail
          </button>
          <a className="links" href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
            <img src={ github } alt="Github Link" />
            Github
          </a>
          <a className="links" href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
            <img src={ linkedin } alt="Linkedin Link" />
            Linkedin
          </a>
          <a className="links" href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
            <img src={ instagram } alt="Instagram Link" />
            Instagram
          </a>
          <a href="/CurriculoFabrício.pdf" download className="Button-CV">
            <button>
              Baixar CV
            </button>
          </a>
        </section>
      </div>
      <div className="Autor">
        <p>Fabrício&reg; 2024</p>
        <p>|</p>
        <p>Obrigado por acessar.</p>
      </div>
    </footer>
  );
}

export default Footer;
