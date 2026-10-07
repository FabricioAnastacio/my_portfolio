import { useContext } from 'react';
import arrayImgs from '../../assets/imgs/importImgs';
import '../../layouts/desktop/Header.css';
import AppContext from '../../contexts/AppContext';
import ButtonCV from '../common/ButtonCV';
import ButtonThame from '../common/ButtonTheme';

function Header() {
  const { modeThame } = useContext(AppContext);

  const logo = arrayImgs[arrayImgs.length - 1];

  const headerLogo = () => (
    <a href="#home" className="Icon-header">
      <img
        src={ logo }
        alt="React"
        className="Icon-profile"
      />
      <h2>.Dev</h2>
    </a>
  );

  return (
    <header id="Header">
      <section className="Nav-Header">
        <div className="Menu-header-logo">
          { headerLogo() }
          <nav className="Nav-superior">
            <a className="Links-Header" href="#Page-thow">Resumo</a>
            <a className="Links-Header" href="#Stack">Stack</a>
            <a className="Links-Header" href="#Projects">Projetos</a>
            <a className="Links-Header" href="#Contact-footer">Contato</a>
          </nav>
        </div>
        <div className="btns-thame-cv">
          <ButtonCV platform="Desktop" modeThame={ modeThame } />
          <ButtonThame />
        </div>
      </section>
    </header>
  );
}

export default Header;
