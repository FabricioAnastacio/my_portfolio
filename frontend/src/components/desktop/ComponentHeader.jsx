import { useContext } from 'react';
import arrayImgs from '../../assets/imgs/importImgs';
import '../../layouts/desktop/Header.css';
import AppContext from '../../contexts/AppContext';
import ButtonCV from '../common/ButtonCV';

function Header() {
  const { setThame, modeThame } = useContext(AppContext);

  const handleClick = () => {
    if (modeThame === 1) setThame(0);
    else setThame(1);
  };

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
        <button
          className={ `Button-${modeThame}` }
          onClick={ handleClick }
          aria-label="Thame"
        />
      </nav>
    </header>
  );
}

export default Header;
