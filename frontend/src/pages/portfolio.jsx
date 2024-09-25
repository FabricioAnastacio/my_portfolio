import { useContext } from 'react';
import '../styles/Portfolio.css';
import Main from '../components/ComponentMain';
import Header from '../components/ComponentHeader';
import AppContext from '../context/AppContext';
import Footer from '../components/ComponentFooter';
// import Projects from '../components/Projects';

function Portfolio() {
  const { modeThame } = useContext(AppContext);

  return (
    <div className={ `Portfolio-home-${modeThame}` }>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Portfolio;
