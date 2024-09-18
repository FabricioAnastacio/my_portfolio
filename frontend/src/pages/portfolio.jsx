import { useContext } from 'react';
import '../styles/Portfolio.css';
import Body from '../components/ComponentBody';
import Header from '../components/ComponentHeader';
import AppContext from '../context/AppContext';

function Portfolio() {
  const { modeThame } = useContext(AppContext);

  return (
    <div className={ `Portfolio-home-${modeThame}` }>
      <Header />
      <Body />
    </div>
  );
}

export default Portfolio;
