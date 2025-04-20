import React, { useContext, useEffect } from 'react';
import FetchJson from '../../hooks/fetchJson';
import AppContext from '../../contexts/AppContext';
import PageInitial from '../common/PageInitial';
import Projects from '../common/Projects';
import '../../layouts/mobile/Main.css';
import '../../layouts/mobile/Projects.css';
import '../../layouts/mobile/Carousel.css';
import PageDescription from '../common/PageDescription';

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
      <PageDescription
        modeThame={ modeThame }
        description={ data.description }
        platform="Mobile"
      />
      <Projects
        dataList={ data.listProjects }
        description={ data.description }
        platform="Mobile"
      />
    </main>
  );
}

export default MainMobile;
