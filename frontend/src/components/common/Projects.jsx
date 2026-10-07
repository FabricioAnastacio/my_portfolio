import PropTypes from 'prop-types';
import ListProjects from './ListProjects';

function Projects(props) {
  const {
    dataList,
    description,
    platform,
  } = props;

  return (
    <div id="Projects" className={ `List-projects-${platform} portfolio-section` }>
      <div className="timeline-item">
        <p>PROJETOS</p>
      </div>
      <div className={ `Projects-title-${platform}` }>
        <h1>Projetos</h1>
        <p>{ description.project }</p>
      </div>
      <ul className={ `Projects-${platform}` }>
        <ListProjects
          platform={ platform }
          dataList={ dataList }
        />
      </ul>
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
