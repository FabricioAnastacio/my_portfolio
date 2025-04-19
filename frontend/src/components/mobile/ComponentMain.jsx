import React, { useContext, useEffect } from 'react';
import fotoF from '../../assets/imgs/fabricio_fot.png';
import FetchJson from '../../hooks/fetchJson';
import '../../layouts/mobile/MainMobile.css';
import PageDescriptionMobile from './PageDescriptionMobile';
import ProjectsMobile from './ProjectsMobile';
import AppContext from '../../contexts/AppContext';

function MainMobile() {
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
    <main>
      <section className="Content-First-Mobile">
        <img
          className={ `Picture-Mobile-${modeThame}` }
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
      </section>
      <PageDescriptionMobile
        modeThame={ modeThame }
        description={ data.description }
      />
      <section>
        <p className="Content-description-Mobile">
          { data.description.project }
        </p>
        <ProjectsMobile dataList={ data.listProjects } />
        <p className="Content-description-Mobile">
          { data.description.projectThow }
        </p>
      </section>
    </main>
  );
}

export default MainMobile;
