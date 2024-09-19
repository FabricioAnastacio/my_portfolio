import { useContext } from 'react';
import '../styles/Portfolio.css';
import Body from '../components/ComponentBody';
import Header from '../components/ComponentHeader';
import AppContext from '../context/AppContext';
import Footer from '../components/ComponentFooter';

function Portfolio() {
  const { modeThame } = useContext(AppContext);

  return (
    <div className={ `Portfolio-home-${modeThame}` }>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Portfolio;
