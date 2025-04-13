import { useContext } from 'react';
import '../style/Portfolio.css';
import Main from '../desktop/components/ComponentMain';
import Header from '../desktop/components/ComponentHeader';
import AppContext from '../context/AppContext';
import Footer from '../desktop/components/ComponentFooter';

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

  const mobileAPP = (<h1>Mobile!</h1>);

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
