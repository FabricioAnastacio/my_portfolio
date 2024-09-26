import PropTypes from 'prop-types';
import '../styles/Projects.css';

function Projects(props) {
  const { dataList } = props;

  return (
    <div className="List-projects">
      <ul>
        {
          dataList.map((item, i) => (
            <li key={ i }>
              <a
                href={ item.link }
                target="_blank"
                rel="noreferrer"
              >
                <img src={ item.img } alt="test" />
              </a>
              <p>{ item.description }</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Projects.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Projects;
