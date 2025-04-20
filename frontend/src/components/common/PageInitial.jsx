import React from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import fotoF from '../../assets/imgs/fabricio_fot.png';

function PageInitial(props) {
  const { stacks, languages, name, platform } = props;

  return (
    <section className={ `Content-first-${platform}` }>
      <img
        className={ `Picture-${platform}` }
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
      <Carousel platform={ platform } />
    </section>
  );
}

PageInitial.propTypes = {
  name: PropTypes.string.isRequired,
  stacks: PropTypes.string.isRequired,
  languages: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
};

export default PageInitial;
