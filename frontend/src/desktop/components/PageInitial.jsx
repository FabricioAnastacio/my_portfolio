import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../services/Carousel';
import fotoF from '../../imgs/fabricio_fot.png';
import '../styles/PageInitial.css';
import '../styles/Carousel.css';

function PageInitial(props) {
  const { stacks, languages, name } = props;

  return (
    <section className="Content-first-page">
      <img
        className="Picture"
        src={ fotoF }
        alt="Foto de Fabricio"
      />
      <h1>{ name }</h1>
      <h3>
        Desenvolvedor
        <br />
        { stacks }
      </h3>
      <p>{ languages }</p>
      <Carousel />
    </section>
  );
}

PageInitial.propTypes = {
  name: PropTypes.string.isRequired,
  stacks: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
};

export default PageInitial;
