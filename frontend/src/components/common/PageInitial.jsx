import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
// import fotoF from '../../assets/imgs/fabricio_fot.png';

function PageInitial(props) {
  const { name, languages, platform } = props;

  return (
    <section className={ `Content-first-${platform} portfolio-section` }>
      <div className="timeline-item">
        <p>HOME</p>
      </div>
      <div className="Hero-Title-section">
        <h1>{ name }</h1>
        <h3>
          Desenvolvedor Full Stack
        </h3>
        <p className="Hero-subtitle">
          Construo aplicações web com foco em
          clareza, funcionalidade e evolução.
        </p>
        <div className="Hero-Links">
          <a className="Hero-Link" href="#Projects">Projetos ↗</a>
          <a className="Hero-Link" href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
        <p className="Hero-languages">{ languages }</p>
        <Carousel platform={ platform } />
      </div>
      {/* <img
        className={ `Picture-${platform}` }
        src={ fotoF }
        alt="Foto de Fabricio"
      /> */}
    </section>
  );
}

PageInitial.propTypes = {
  name: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
};

export default PageInitial;
