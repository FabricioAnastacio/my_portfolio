import { useContext, useEffect } from 'react';
import Projects from '../common/Projects';
import FetchJson from '../../hooks/fetchJson';
import PageDescription from './PageDescription';
import PageInitial from '../common/PageInitial';
import AppContext from '../../contexts/AppContext';
import '../../layouts/desktop/Main.css';
import '../../layouts/desktop/Projects.css';
import '../../layouts/desktop/PageInitial.css';
import '../../layouts/desktop/Carousel.css';

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
    <main>
      <PageInitial
        name={ data.myname }
        stacks={ refactorItems(data.stacks) }
        languages={ refactorItems(data.languages) }
        platform="Desktop"
      />
      <PageDescription
        modeThame={ modeThame }
        description={ data.description }
      />
      <Projects
        dataList={ data.listProjects }
        description={ data.description }
        platform="Desktop"
      />
    </main>
  );
}

export default Main;
