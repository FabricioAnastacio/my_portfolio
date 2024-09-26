import PropTypes from 'prop-types';
import '../styles/Projects.css';

function Projects(props) {
  const { dataList } = props;

  return (
    <div className="List-projects">
      <ul>
        {
          dataList.map((item, i) => (
            <li key={ i } className="Project">
              <a
                href={ item.link }
                target="_blank"
                rel="noreferrer"
                style={ { backgroundImage: `url(${item.img})` } }
              >
                .
              </a>
              <p>{ item.description }</p>
              <ul>
                {
                  item.technologies.map((tec, index) => (
                    <li key={ index }>
                      { tec }
                    </li>
                  ))
                }
              </ul>
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
