import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';
import ListProjects from './ListProjects';

function Projects(props) {
  const {
    dataList,
    description,
    platform,
  } = props;
  const { modeThame } = useContext(AppContext);

  return (
    <div className={ `List-projects-${platform}` }>
      <p className={ `Content-description-${platform}` }>
        { description.project }
      </p>
      <div className={ `Projects-title-${platform}` }>
        <h1>Projetos em destaque</h1>
        <hr className={ `Emphasis-title-${platform}` } />
      </div>
      <ul className={ `Projects-${platform}` }>
        <ListProjects
          platform={ platform }
          modeThame={ modeThame }
          dataList={ dataList }
        />
      </ul>
      <p className={ `Content-description-${platform}` }>
        { description.projectThow }
      </p>
    </div>
  );
}

Projects.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  platform: PropTypes.string.isRequired,
};

export default Projects;
