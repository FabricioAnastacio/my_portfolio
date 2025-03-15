import { useContext, useEffect } from 'react';
import '../styles/Main.css';
import Carousel from './Carousel';
// import backendIcon from '../imgs/icons/icons8-backend.png';
// import frontendIcon from '../imgs/icons/icons8-front-end.png';
import fotoF from '../imgs/fabricio_fot.png';
import Projects from './Projects';
import AppContext from '../context/AppContext';
import FetchJson from '../hooks/fetchJson';
import Contact from './Contact';
import PageDescription from './PageDescription';

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
      <PageDescription
        modeThame={ modeThame }
        description={ data.description }
      />
      <section>
        <p className="Content-description">
          { data.description.project }
        </p>
        <Projects dataList={ data.listProjects } />
        <p className="Content-description">
          { data.description.projectThow }
        </p>
      </section>
      <Contact />
    </main>
  );
}

export default Main;
