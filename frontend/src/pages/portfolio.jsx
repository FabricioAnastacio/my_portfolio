import { useEffect } from 'react';
import Header from '../components/desktop/ComponentHeader';
import Main from '../components/desktop/ComponentMain';
import Footer from '../components/desktop/ComponentFooter';
import HeaderMobile from '../components/mobile/ComponentHeader';
import MainMobile from '../components/mobile/ComponentMain';
import FooterMobile from '../components/mobile/ComponentFooter';
import '../assets/style/Portfolio.css';
import FetchJson from '../hooks/fetchJson';

function Portfolio() {
  const [loading, erro, refresh] = FetchJson();
  const { innerWidth: width } = window;
  const maxWidth = 920;

  useEffect(() => {
    refresh();
  }, []);

  const desktopAPP = (
    <div className="Portfolio-home">
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

  if (loading) return (<h1 className="Content-loading">Carregando...</h1>);
  if (erro) {
    return (
      <div className="Content-loading">
        <p>
          Aconteceu um erro
          <br />
          <br />
          Recarregue a pagina, por favor
        </p>
      </div>
    );
  }

  return width > maxWidth ? desktopAPP : mobileAPP;
}

export default Portfolio;
