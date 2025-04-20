import React, { useContext } from 'react';
import { github, instagram, linkedin } from '../../assets/svg';
import '../../layouts/mobile/Footer.css';
import buttonUp from '../../assets/imgs/mobile/icons8-para-cima-48.png';
import AppContext from '../../contexts/AppContext';
import Contact from '../common/Contact';
import FooterAutor from '../common/FooterAutor';
import ButtonCV from '../common/ButtonCV';

function FooterMobile() {
  const { modeThame } = useContext(AppContext);

  return (
    <footer id="Contact-footer" className={ `Footer-${modeThame}-Mobile` }>
      <hr className="Line-Footer" />
      <nav className="Nav-Footer-Mobile">
        <h1>CONTATO</h1>
        <a href="#Header" className="Button-Up">
          <img src={ buttonUp } alt="Para-Cima" />
        </a>
      </nav>
      <div className="Footer-Mobile">
        <Contact />
        <hr className="Line-Mobile" />
        <section className="Contact-Mobile">
          <a className="Links-Mobile" href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
            <img src={ github } alt="Github Link" />
          </a>
          <a className="Links-Mobile" href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
            <img src={ linkedin } alt="Linkedin Link" />
          </a>
          <a className="Links-Mobile" href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
            <img src={ instagram } alt="Instagram Link" />
          </a>
        </section>
        <ButtonCV platform="Mobile" modeThame={ modeThame } />
      </div>
      <FooterAutor platform="Mobile" />
    </footer>
  );
}

export default FooterMobile;
