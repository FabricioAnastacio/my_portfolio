import { useContext, useEffect } from 'react';
import '../../layouts/desktop/Main.css';
import Projects from './Projects';
import FetchJson from '../../hooks/fetchJson';
import PageDescription from './PageDescription';
import PageInitial from '../common/PageInitial';
import AppContext from '../../contexts/AppContext';

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
      />
    </main>
  );
}

export default Main;
