import { useState } from 'react';
import '../../layouts/desktop/Footer.css';
import '../../layouts/desktop/Contact.css';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';
import fotoF from '../../assets/imgs/fabricio_fot.png';
import Contact from '../common/Contact';

function Footer() {
  // const Email = 'fabricio12nastacio@gmail.com';
  const [emailPage, setEmailPage] = useState(false);

  const setTabEmailClose = () => {
    document.body.style.overflow = !emailPage ? 'hidden' : '';
    setEmailPage(!emailPage);
  };

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
          <div>
            <h3>Vamos conversar?</h3>
            <p>Entre em contato ou conheça mais sobre meu trabalho.</p>
          </div>
          <div>
            <button onClick={ setTabEmailClose } className="Button-Email">
              E-mail
            </button>
            <ButtonCV platform="Desktop" />
          </div>
        </div>
      </div>
      <FooterAutor platform="Desktop" />
      {
        emailPage && (
          <div className="Email-tab">
            <Contact setTabEmailClose={ setTabEmailClose } />
          </div>
        )
      }
    </footer>
  );
}

export default Footer;
