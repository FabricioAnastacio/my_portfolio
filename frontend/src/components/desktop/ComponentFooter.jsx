import { useCallback, useContext } from 'react';
import '../../layouts/desktop/Footer.css';
import '../../layouts/desktop/Contact.css';
import {
  linkedin,
  github,
  instagram,
  email,
} from '../../assets/svg';
import Contact from '../common/Contact';
import AppContext from '../../contexts/AppContext';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';

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
        <hr className="Line-Desktop" />
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
          <ButtonCV platform="Desktop" modeThame={ modeThame } />
        </section>
      </div>
      <FooterAutor platform="Desktop" />
    </footer>
  );
}

export default Footer;
