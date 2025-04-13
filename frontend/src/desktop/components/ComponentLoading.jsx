import '../styles/LoadingPage.css';
import { useNavigate } from 'react-router-dom';
import arrayImgs from '../../imgs/importImgs';
import CountDown from '../../hooks/countDownII';

const num = 3;

function ComponentLoading() {
  const navigate = useNavigate();
  const [second] = CountDown(num);

  if (second === 0) navigate('/home');
  return (
    <div className="Loading">
      <header className="Loading-header">
        <img
          src={ arrayImgs[arrayImgs.length - 1] }
          alt="Logo"
          className="Loading-logo"
        />
        <p>{`Loading... ${second}`}</p>
      </header>
    </div>
  );
}

export default ComponentLoading;
