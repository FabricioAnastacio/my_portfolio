import { useContext, useEffect } from 'react';
import '../styles/Main.css';
import Carousel from './Carousel';
import backendIcon from '../imgs/icons/icons8-backend.png';
import frontendIcon from '../imgs/icons/icons8-front-end.png';
import csIcon from '../imgs/icons/icons8-algorithm.png';
import fotoF from '../imgs/fabricio_fot.png';
import Projects from './Projects';
import AppContext from '../context/AppContext';
import FetchJson from '../hooks/fetchJson';

function Main() {
  const [loading, erro, refresh] = FetchJson();
  const { data, modeThame } = useContext(AppContext);

  useEffect(() => {
    refresh();
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

  if (loading) return (<h1 className="Content-loading">Loading...</h1>);
  if (erro) {
    return (
      <h1 className="Content-loading">
        Algo de errado não esta certo!
        <br />
        Recarregue a pagina!
      </h1>
    );
  }

  return (
    <main className="Content-main">
      <section className="Content-first-page">
        <img
          className="Picture"
          src={ fotoF }
          alt="Foto de Fabricio"
        />
        <h1>{ data.myname }</h1>
        <h3>
          Desenvolvedor
          <br />
          { refactorItems(data.stacks) }
        </h3>
        <p>{ refactorItems(data.languages) }</p>
        <Carousel />
      </section>
      <hr id="Description" className={ `Hr-thame-${modeThame}` } />
      <div id="Page-thow">
        <p className="Content-description">
          {/* Enquanto estudei na
          {' '}
          <a
            href="https://www.betrybe.com/"
            className="Link-Trybe"
            target="_blank"
            rel="noreferrer"
          >
            Trybe
          </a> */}
          { data.description.resume }
        </p>
        <ul>
          <li className={ `Item-theme-${modeThame}` }>
            <h2>Frontend</h2>
            <img src={ frontendIcon } alt="test" />
            <p>{ data.description.frontend }</p>
          </li>
          <li className={ `Item-theme-${modeThame}` }>
            <h2>Backend</h2>
            <img src={ backendIcon } alt="test" />
            <p>{ data.description.backend }</p>
          </li>
          <li className={ `Item-theme-${modeThame}` }>
            <h2>Ciência da Computação</h2>
            <img src={ csIcon } alt="test" />
            <p>{ data.description.cs }</p>
          </li>
        </ul>
        <p className="Content-description">
          Text
        </p>
      </div>
      <hr id="Projects" className={ `Hr-thame-${modeThame}` } />
      <section className="Content-description">
        <p>{ data.description.project }</p>
      </section>
      <Projects dataList={ data.listProjects } />
    </main>
  );
}

export default Main;
