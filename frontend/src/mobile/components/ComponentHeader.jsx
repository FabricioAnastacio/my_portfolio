import React, { useContext } from 'react';
import arrayImgs from '../../imgs/importImgs';
import AppContext from '../../context/AppContext';
import '../style/HeaderMobile.css';

function HeaderMobile() {
  const { modeThame, setThame } = useContext(AppContext);

  const handleClick = () => {
    setThame(modeThame === 1 ? 0 : 1);
  };

  const logo = modeThame === 0
    ? arrayImgs[arrayImgs.length - 1] : arrayImgs[arrayImgs.length - 2];

  return (
    <header id="Header" className="Header-Mobile">
      <section className="Header-Primary">
        <div className="Title-Header">
          <img className="Img-Logo" src={ logo } alt="React-logo" />
          <h2>Dev Jr.</h2>
        </div>
        <div className="Header-stage2">
          <a
            href="/CurriculoFabrício.pdf"
            download
            className={ `Button-CV-Mobile-${modeThame}` }
          >
            <button>
              Baixar CV
            </button>
          </a>
          <button
            className={ `Button-Theme-${modeThame}` }
            onClick={ handleClick }
            aria-label="Theme"
          />
        </div>
      </section>
      <nav className={ `Navegation-Header-${'Open'}` }>
        <a className="Navegation" href="#Contact-footer">Contato</a>
        <a className="Navegation" href="#Projects">Projetos</a>
        <a className="Navegation" href="#Description">Resumo</a>
      </nav>
    </header>
  );
}

export default HeaderMobile;
