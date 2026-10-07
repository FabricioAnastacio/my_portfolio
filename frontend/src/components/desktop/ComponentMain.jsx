import { useContext } from 'react';
import Projects from '../common/Projects';
import PageDescription from '../common/PageDescription';
import PageInitial from '../common/PageInitial';
import AppContext from '../../contexts/AppContext';
import '../../layouts/desktop/Main.css';
import '../../layouts/desktop/Projects.css';
import '../../layouts/desktop/PageInitial.css';
import '../../layouts/desktop/Carousel.css';

function Main() {
  const { data, modeThame } = useContext(AppContext);

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
      if (index > 1) response += ` · ${e}`;
    });
    return response;
  };

  return (
    <main>
      <PageInitial
        name={ data.myname }
        // stacks={ refactorItems(data.stacks) }
        languages={ refactorItems(data.languages) }
        platform="Desktop"
      />
      <PageDescription
        modeThame={ modeThame }
        description={ data.description }
        platform="Desktop"
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
