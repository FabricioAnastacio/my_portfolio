import { useContext } from 'react';
import '../styles/Portfolio.css';
import Main from '../components/ComponentMain';
import Header from '../components/ComponentHeader';
import AppContext from '../context/AppContext';
import Footer from '../components/ComponentFooter';

function Portfolio() {
  const { modeThame } = useContext(AppContext);
  const { innerWidth: width } = window;
  const maxWidth = 920;  
  
  const desktopAPP = (
      <div className={ `Portfolio-home-${modeThame}` }>
        <Header />
        <Main />
        <Footer />
      </div>
    );

  const mobileAPP = (
    <h1
      style={ {
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: 'red',
      } }
    >
      Desculpe, a versão Mobile esta em produção!
    </h1>
  );

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
