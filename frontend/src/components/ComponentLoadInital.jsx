import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import rasengam from './pngwing1.png';
import CountDown from '../hooks/countDownII';

function ComponentLoadInital() {
  const navigate = useNavigate();
  const num = 10;
  const [second] = CountDown(num);

  if (second === 0) navigate('/home');

  return (
    <div className="App">
      <header className="App-header">
        <img src={ rasengam } alt="rasengam" className="App-logo" />
        <p>{`loading... ${second}`}</p>
      </header>
    </div>
  );
}

export default ComponentLoadInital;
