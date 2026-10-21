import { useEffect } from 'react';
import Header from '../components/desktop/ComponentHeader';
import Main from '../components/desktop/ComponentMain';
import Footer from '../components/desktop/ComponentFooter';
import '../assets/style/Portfolio.css';
import FetchJson from '../hooks/fetchJson';
import HeaderMobile from '../components/mobile/ComponentHeader';
import MainMobile from '../components/mobile/ComponentMain';
import FooterMobile from '../components/mobile/ComponentFooter';

function Portfolio() {
  const [loading, erro, refresh] = FetchJson();
  const { innerWidth: width } = window;
  const maxWidth = 920;

  useEffect(() => {
    refresh();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
