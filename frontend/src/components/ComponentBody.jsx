/* eslint-disable max-len */
import { useEffect, useState } from 'react';
import '../styles/Body.css';
import Carousel from './Carousel';
import backendIcon from '../icons/icons8-backend.png';
import frontendIcon from '../icons/icons8-front-end.png';
import dbIcon from '../icons/icons8-banco-de-dados.png';
import fotoF from './fabricio_fot.png';

function Body() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('data/portfolio.json')
      .then((response) => response.json())
      .then((dta) => {
        setData(dta);
      });
  }, []);

  return (
    <body className="Content-body">
      <section>
        <img className="Picture" src={ fotoF } alt="Foto de Fabricio" />
        <h1>{ data.name }</h1>
        <h3>{ data.position }</h3>
        <p>{ data.description }</p>
        <Carousel />
      </section>
      <hr />
      {/* <h4>Alguns dos meus projetos</h4> */}
      <div id="Page-thow">
        <hr />
        <ul>
          <li>
            <img src={ frontendIcon } alt="test" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum fermentum bibendum.</p>
          </li>
          <li>
            <img src={ backendIcon } alt="test" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum fermentum bibendum.</p>
          </li>
          <li>
            <img src={ dbIcon } alt="test" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum fermentum bibendum.</p>
          </li>
        </ul>
      </div>
    </body>
  );
}

export default Body;
