import { useContext } from 'react';
import '../assets/style/Portfolio.css';
import Header from '../components/desktop/ComponentHeader';
import Main from '../components/desktop/ComponentMain';
import Footer from '../components/desktop/ComponentFooter';
import HeaderMobile from '../components/mobile/ComponentHeader';
import MainMobile from '../components/mobile/ComponentMain';
import FooterMobile from '../components/mobile/ComponentFooter';
import AppContext from '../contexts/AppContext';

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
    <div className={ `Portfolio-home-${modeThame}` }>
      <HeaderMobile />
      <MainMobile />
      <FooterMobile />
    </div>
  );

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
