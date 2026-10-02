import Header from '../components/desktop/ComponentHeader';
import Main from '../components/desktop/ComponentMain';
import Footer from '../components/desktop/ComponentFooter';
import HeaderMobile from '../components/mobile/ComponentHeader';
import MainMobile from '../components/mobile/ComponentMain';
import FooterMobile from '../components/mobile/ComponentFooter';
import '../assets/style/Portfolio.css';

function Portfolio() {
  const { innerWidth: width } = window;
  const maxWidth = 920;

  const desktopAPP = (
    <div className="Portfolio-home">
      <div className="Paleta-de-cores">
        <div>Fundo</div>
        <div>Fundo Claro</div>
        <div>Supeficie</div>
        <div>Superficie 2</div>
        <div>Txt Principal</div>
        <div>Txt Secun.</div>
        <div>Accent</div>
        <div>Accent Fort</div>
        <div>Bordas</div>
      </div>
      <Header />
      <Main />
      <Footer />
    </div>
  );

  const mobileAPP = (
    <div className="Portfolio-home">
      <HeaderMobile />
      <MainMobile />
      <FooterMobile />
    </div>
  );

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
