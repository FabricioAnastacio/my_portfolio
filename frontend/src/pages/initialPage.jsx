import '../assets/style/LoadingPage.css';
import { useNavigate } from 'react-router-dom';
import arrayImgs from '../assets/imgs/importImgs';
import CountDown from '../hooks/countDownII';

const num = 3;

function InitialPage() {
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

export default InitialPage;
