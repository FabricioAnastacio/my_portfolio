import { useContext } from 'react';
import '../style/Portfolio.css';
import Main from '../desktop/components/ComponentMain';
import Header from '../desktop/components/ComponentHeader';
import AppContext from '../context/AppContext';
import Footer from '../desktop/components/ComponentFooter';
import HeaderMobile from '../mobile/components/ComponentHeader';
import FooterMobile from '../mobile/components/ComponentFooter';

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
    <div>
      <HeaderMobile />
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
        Desculpe
        <br />
        A versão Mobile esta em produção!
      </h1>
      <FooterMobile />
    </div>
  );

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
