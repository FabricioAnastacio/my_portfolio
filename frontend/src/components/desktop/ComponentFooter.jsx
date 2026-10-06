import { useCallback } from 'react';
import '../../layouts/desktop/Footer.css';
import '../../layouts/desktop/Contact.css';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';

function Footer() {
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
    <footer
      id="Contact-footer"
      className="Contact-footer portfolio-section"
    >
      <div className="timeline-item">
        <p>CONTATO</p>
      </div>
      <h3>Vamos conversar?</h3>
      <div className="Footer-links">
        <div>
          <button onClick={ () => copyToClipboard(Email) } className="Button-Email">
            <p>E-mail</p>
          </button>
          <ButtonCV platform="Desktop" />
        </div>
        <section className="Contact-links">
          <a className="links" href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
            Github
          </a>
          <a className="links" href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a className="links" href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </section>
      </div>
      <FooterAutor platform="Desktop" />
    </footer>
  );
}

export default Footer;
