import { useContext } from 'react';
import arrayImgs from '../../assets/imgs/importImgs';
import '../../layouts/desktop/Header.css';
import AppContext from '../../contexts/AppContext';
import ButtonCV from '../common/ButtonCV';
import ButtonThame from '../common/ButtonTheme';

function Header() {
  const { modeThame } = useContext(AppContext);

  const logo = arrayImgs[arrayImgs.length - 1];

  return (
    <header id="Header">
      <div
        className="Icon-header"
      >
        <img
          src={ logo }
          alt="React"
          className="Icon-profile"
        />
        <h2>.Dev</h2>
      </div>
      <nav className="Nav-superior">
        <ButtonCV platform="Desktop" modeThame={ modeThame } />
        <a className="Links-Header" href="#Contact-footer">Contato</a>
        <a className="Links-Header" href="#Projects">Projetos</a>
        <a className="Links-Header" href="#Page-thow">Resumo</a>
        <ButtonThame />
      </nav>
    </header>
  );
}

export default Header;
