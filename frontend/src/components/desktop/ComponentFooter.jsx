import { useCallback } from 'react';
import '../../layouts/desktop/Footer.css';
import '../../layouts/desktop/Contact.css';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';
import fotoF from '../../assets/imgs/fabricio_fot.png';

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
      className="Contact-footer portfolio-section-footer"
    >
      <div className="timeline-item-footer">
        <p>CONTATO</p>
      </div>
      <div className="footer-header">
        <img
          className="Picture-Desktop"
          src={ fotoF }
          alt="Foto de Fabricio"
        />
        <div className="box-buttons">
          <h3>Vamos conversar?</h3>
          <div>
            <button onClick={ () => copyToClipboard(Email) } className="Button-Email">
              E-mail
            </button>
            <ButtonCV platform="Desktop" />
          </div>
        </div>
      </div>
      <FooterAutor platform="Desktop" />
    </footer>
  );
}

export default Footer;
