import '../styles/LoadingPage.css';
import { useNavigate } from 'react-router-dom';
import rasengam from '../imgs/pngwing1.png';
import CountDown from '../hooks/countDownII';

const num = 3;

function ComponentLoading() {
  const navigate = useNavigate();
  const [second] = CountDown(num);

  if (second === 0) navigate('/home');
  return (
    <div className="Loading">
      <header className="Loading-header">
        <img src={ rasengam } alt="rasengam" className="Loading-logo" />
        <p>{`loading... ${second}`}</p>
      </header>
    </div>
  );
}

export default ComponentLoading;
