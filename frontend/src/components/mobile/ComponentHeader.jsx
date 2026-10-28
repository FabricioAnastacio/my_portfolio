import React, { useState } from 'react';
import arrayImgs from '../../assets/imgs/importImgs';
import ButtonCV from '../common/ButtonCV';
import ButtonThame from '../common/ButtonTheme';
import '../../layouts/mobile/Header.css';

function HeaderMobile() {
  const logo = arrayImgs[arrayImgs.length - 1];
  const [retract, setRetract] = useState(true);

  const menuRetract = () => (
    <div className={ `Menu-retract retract-${retract}` }>
      <nav className="Navegation-Header">
        <a className="Navegation" href="#Stack">Stack</a>
        <a className="Navegation" href="#Projects">Projetos</a>
        <a className="Navegation" href="#TimeLine">Trajetoria</a>
        <a className="Navegation" href="#Contact-footer">Contato</a>
        <ButtonThame platform="Mobile" />
      </nav>
    </div>
  );

  const menuButton = () => (
    <button
      onClick={ () => setRetract(!retract) }
      className={ `menu-button ${retract ? '' : 'is-open'}` }
      aria-label={ !retract ? 'Fechar menu' : 'Abrir menu' }
      aria-expanded={ !retract }
      aria-controls="mobile-navigation"
    >
      <svg
        viewBox="0 0 32 32"
        className="menu-icon"
        aria-hidden="true"
      >
        <path className="line line-top" d="M5 9H27" />
        <path className="line line-middle" d="M5 16H27" />
        <path className="line line-bottom" d="M5 23H27" />
      </svg>
    </button>
  );

  return (
    <header className="Header-Mobile">
      <section className="Header-Primary">
        <div className="Menu-header-logo">
          <a href="#home" className="Icon-header">
            <img
              src={ logo }
              alt="React"
              className="Icon-profile"
            />
            <h2>.Dev</h2>
          </a>
        </div>
        <div className="Header-stage2">
          <ButtonCV platform="Mobile" />
          { menuButton() }
        </div>
      </section>
      { menuRetract() }
    </header>
  );
}

export default HeaderMobile;
