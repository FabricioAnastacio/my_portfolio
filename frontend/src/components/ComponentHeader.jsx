import { useContext } from 'react';
import rasengam from './pngwing1.png';
import AppContext from '../context/AppContext';
import '../styles/Header.css';

function Header() {
  const { setTame, modeTame } = useContext(AppContext);

  const handleClick = () => {
    if (modeTame === 1) setTame(0);
    else setTame(1);
  };

  return (
    <header className={ `Header-${modeTame}` }>
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
