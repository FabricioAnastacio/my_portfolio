import { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import arrayImgs from '../imgs/importImgs';
import '../styles/Header.css';

function Header() {
  const number = 5;
  const [valueSecund, setSecund] = useState(number);
  const { setThame, modeThame } = useContext(AppContext);

  const handleClick = () => {
    if (modeThame === 1) setThame(0);
    else setThame(1);
  };

  const handleLogo = () => {
    setSecund(valueSecund - 1);
    if (valueSecund === 1) setSecund(number);
    console.log(valueSecund);
  };

  const logo = modeThame === 0
    ? arrayImgs[arrayImgs.length - 1] : arrayImgs[arrayImgs.length - 2];

  return (
    <header id="Header">
      <div
        className="Icon-header"
        onClick={ handleLogo }
        role="button"
        onKeyPress={ 0 }
        tabIndex="0"
      >
        <img
          src={ logo }
          alt="React"
          style={ { animationDuration: `${valueSecund}s` } }
          className="Icon-profile"
        />
        <h2>Dev Jr.</h2>
      </div>
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
