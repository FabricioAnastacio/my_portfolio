import { useContext } from 'react';
import rasengam from './pngwing1.png';
import AppContext from '../context/AppContext';

function InitialApp() {
  const { inputName, setNAME } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setNAME(target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ inputName }</h1>
        <img src={ rasengam } className="App-logo" alt="rasengam" />
        <input type="text" value={ inputName } onChange={ handleChange } />
        <p>
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
        </a>
      </header>
    </div>
  );
}

export default InitialApp;
