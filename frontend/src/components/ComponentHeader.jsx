import { useContext } from 'react';
import AppContext from '../context/AppContext';
import rasengam from '../imgs/pngwing1.png';
import '../styles/Header.css';

function Header() {
  const { setThame, modeThame } = useContext(AppContext);

  const handleClick = () => {
    if (modeThame === 1) setThame(0);
    else setThame(1);
  };

  return (
    <header id="Header">
      <section>
        <img src={ rasengam } className="Logo-rasengam" alt="rasengam" />
      </section>
      <nav className="Nav-superior">
        <a href="#Contact-footer">Contact</a>
        <a href="#Projects">Projects</a>
        <a href="#Description">Resume</a>
        <button className={ `Button-${modeThame}` } onClick={ handleClick }>.</button>
      </nav>
      <div className={ `Nav-lateral-${modeThame}` }>
        <nav>
          <button onClick={ handleClick }>.</button>
          <a href="#Header">Top</a>
          <a href="#Contact-footer">Contact</a>
          <a href="#Projects">Projects</a>
          <a href="#Description">Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
