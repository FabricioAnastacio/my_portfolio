import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
  const { setThame, modeThame } = useContext(AppContext);

  const handleClick = () => {
    if (modeThame === 1) setThame(0);
    else setThame(1);
  };

  return (
    <header id="Header">
      <nav className="Nav-superior">
        <a href="#Contact-footer">Contact</a>
        <a href="#Projects">Projects</a>
        <a href="#Description">Resume</a>
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
