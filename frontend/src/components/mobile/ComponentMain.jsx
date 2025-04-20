import React, { useContext, useEffect } from 'react';
import FetchJson from '../../hooks/fetchJson';
import '../../layouts/mobile/MainMobile.css';
import PageDescriptionMobile from './PageDescriptionMobile';
import ProjectsMobile from './ProjectsMobile';
import AppContext from '../../contexts/AppContext';
import PageInitial from '../common/PageInitial';

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
      <PageInitial
        name={ data.myname }
        stacks={ refactorItems(data.stacks) }
        languages={ refactorItems(data.languages) }
        platform="Mobile"
      />
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
