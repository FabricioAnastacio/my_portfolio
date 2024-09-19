import { useContext } from 'react';
import rasengam from './pngwing1.png';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
  const { setThame, modeThame } = useContext(AppContext);

  const handleClick = () => {
    if (modeThame === 1) setThame(0);
    else setThame(1);
  };

  return (
    <header className={ `Header-${modeThame}` }>
      <section>
        <img src={ rasengam } className="Logo-rasengam" alt="rasengam" />
      </section>
      <nav className="Nav-superior">
        <a href="/">About</a>
        <a href="#Contact-footer">Contact</a>
        <a href="/">Projects</a>
        <a href="#Page-thow">Resume</a>
        <button onClick={ handleClick }>.</button>
      </nav>
      <div className={ `Nav-lateral-${modeThame}` }>
        <nav>
          <button onClick={ handleClick }>.</button>
          <a href="/">About</a>
          <a href="#Contact-footer">Contact</a>
          <a href="/">Projects</a>
          <a href="#Page-thow">Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
