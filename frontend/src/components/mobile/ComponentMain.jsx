import React, { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import PageInitial from '../common/PageInitial';
import Projects from '../common/Projects';
import PageDescription from '../common/PageDescription';
import Timeline from '../common/TimeLine';
import '../../layouts/mobile/Main.css';
import '../../layouts/mobile/Projects.css';
import '../../layouts/mobile/Carousel.css';
import '../../layouts/mobile/TimeLine.css';

function MainMobile() {
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
      if (index > 1) response += ` - ${e}`;
    });
    return response;
  };

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
      <Timeline platform="Mobile" timeline={ data.timeLine } />
    </main>
  );
}

export default MainMobile;
