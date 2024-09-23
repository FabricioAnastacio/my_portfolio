import { useEffect, useState } from 'react';
import '../styles/Body.css';
import Carousel from './Carousel';
import backendIcon from '../imgs/icons/icons8-backend.png';
import frontendIcon from '../imgs/icons/icons8-front-end.png';
import csIcon from '../imgs/icons/icons8-algorithm.png';
import fotoF from '../imgs/fabricio_fot.png';
import Projects from './Projects';

function Body() {
  const [{
    myname,
    stacks,
    languages,
    description,
  }, setData] = useState({
    myname: '',
    stacks: [''],
    languages: [''],
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

  const refactorItems = (item) => {
    let response = '';
    const [isStack, firstItem] = item;
    response = firstItem;
    if (isStack === 'stacks') {
      item.forEach((e, index) => {
        if (index > 1) response += ` / ${e}`;
      });
      return response;
    }
    item.forEach((e, index) => {
      if (index > 1) response += ` - ${e}`;
    });
    return response;
  };

  return (
    <body className="Content-body">
      <section className="Content-first-page">
        <img
          className="Picture"
          src={ fotoF }
          alt="Foto de Fabricio"
        />
        <h1>{ myname }</h1>
        <h3>
          Desenvolvedor
          <br />
          { refactorItems(stacks) }
        </h3>
        <p>{ refactorItems(languages) }</p>
        <Carousel />
      </section>
      <hr id="Description" />
      <section className="Content-description">
        <p>{ description.resume }</p>
      </section>
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
      <Projects />
    </body>
  );
}

export default Body;
