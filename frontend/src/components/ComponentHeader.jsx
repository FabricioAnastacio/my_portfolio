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
      <nav>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Projects</a>
        <a href="/">Resume</a>
        <button onClick={ handleClick }>.</button>
      </nav>
      {/* <p>
        Edit
        <code>src/App.js</code>
        and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
    </header>
  );
}

export default Header;
