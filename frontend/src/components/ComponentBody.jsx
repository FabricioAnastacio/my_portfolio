import { useEffect, useState } from 'react';
import '../styles/Body.css';
import Carousel from './Carousel';
import backendIcon from '../icons/icons8-backend.png';
import frontendIcon from '../icons/icons8-front-end.png';
import csIcon from '../icons/icons8-algorithm.png';
import fotoF from './fabricio_fot.png';

function Body() {
  const [{
    myname,
    position,
    description,
  }, setData] = useState({
    myname: '',
    position: '',
    description: {
      resume: '',
      frontend: '',
      backend: '',
      cs: '',
    },
  });

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
        <h1>{ myname }</h1>
        <h3>{ position }</h3>
        <p>{ description.resume }</p>
        <Carousel />
      </section>
      <hr />
      <div id="Page-thow">
        <hr />
        <ul>
          <li>
            <h2>Frontend</h2>
            <img src={ frontendIcon } alt="test" />
            <p>{ description.frontend }</p>
          </li>
          <li>
            <h2>Backend</h2>
            <img src={ backendIcon } alt="test" />
            <p>{ description.backend }</p>
          </li>
          <li>
            <h2>Ciência da Computação</h2>
            <img src={ csIcon } alt="test" />
            <p>{ description.cs }</p>
          </li>
        </ul>
      </div>
    </body>
  );
}

export default Body;
