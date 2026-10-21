import { useState } from 'react';
import '../../layouts/mobile/Footer.css';
import '../../layouts/mobile/Contact.css';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';
import fotoF from '../../assets/imgs/fabricio_fot.png';
import Contact from '../common/Contact';

function FooterMobile() {
  const [emailPage, setEmailPage] = useState(false);

  const setTabEmailClose = () => {
    document.body.style.overflow = !emailPage ? 'hidden' : '';
    setEmailPage(!emailPage);
  };

  return (
    <footer
      id="Contact-footer"
      className="Footer-Mobile portfolio-section-footer"
    >
      <div className="timeline-item-footer">
        <p>CONTATO</p>
      </div>
      <div className="footer-header-Mobile">
        <img
          className="Picture-Mobile"
          src={ fotoF }
          alt="Foto de Fabricio"
        />
        <div className="box-buttons-Mobile">
          <div>
            <h3>Vamos conversar?</h3>
            <p>Entre em contato ou conheça mais sobre meu trabalho.</p>
          </div>
          <div>
            <button onClick={ setTabEmailClose } className="Button-Email">
              E-mail
            </button>
            <ButtonCV platform="Mobile" />
          </div>
        </div>
      </div>
      <FooterAutor platform="Mobile" />
      {
        emailPage && (
          <div className="Email-tab-Mobile">
            <Contact setTabEmailClose={ setTabEmailClose } platform="Mobile" />
          </div>
        )
      }
    </footer>
  );
}

export default FooterMobile;
