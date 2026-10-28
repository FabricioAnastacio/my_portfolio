import { useContext } from 'react';
import Projects from '../common/Projects';
import PageDescription from '../common/PageDescription';
import PageInitial from '../common/PageInitial';
import AppContext from '../../contexts/AppContext';
import Timeline from '../common/TimeLine';
import '../../layouts/desktop/Main.css';
import '../../layouts/desktop/Projects.css';
import '../../layouts/desktop/PageInitial.css';
import '../../layouts/desktop/Carousel.css';
import '../../layouts/desktop/TimeLine.css';

function Main() {
  const { data } = useContext(AppContext);

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
        description={ data.description }
        platform="Desktop"
      />
      <Projects
        dataList={ data.listProjects }
        description={ data.description }
        platform="Desktop"
      />
      <Timeline platform="Desktop" timeline={ data.timeLine } />
    </main>
  );
}

export default Main;
