import { useContext, useEffect } from 'react';
import '../styles/Main.css';
import Projects from './Projects';
import AppContext from '../context/AppContext';
import FetchJson from '../hooks/fetchJson';
import PageDescription from './PageDescription';
import PageInitial from './PageInitial';

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
      <PageInitial
        name={ data.myname }
        stacks={ refactorItems(data.stacks) }
        languages={ refactorItems(data.languages) }
      />
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
    </main>
  );
}

export default Main;
