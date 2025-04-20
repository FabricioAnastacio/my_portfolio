import PropTypes from 'prop-types';
import '../../layouts/desktop/Projects.css';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function Projects(props) {
  const {
    dataList,
    description,
  } = props;
  const { modeThame } = useContext(AppContext);

  return (
    <div className="List-projects">
      <p className="Content-description">
        { description.project }
      </p>
      <div className="Projects-title">
        <h1>Projetos em destaque</h1>
        <hr className="Emphasis-title" />
      </div>
      <ul className="Projects">
        {
          dataList.map((item, i) => (
            <li key={ i } className={ `Project-${modeThame}` }>
              <div className="Project-description">
                <div
                  className="Project-Bunner"
                  style={ { backgroundImage: `url(${item.img})` } }
                >
                  <a
                    href={ item.link }
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saiba mais
                    <p>Github</p>
                  </a>
                </div>
                <h3>{ item.description }</h3>
                <ul className="Project-technologies">
                  {
                    item.technologies.map((tec, index) => (
                      <li key={ index }>
                        { tec }
                      </li>
                    ))
                  }
                </ul>
              </div>
              <h3 className="Project-Tags">{ item.tags }</h3>
            </li>
          ))
        }
      </ul>
      <p className="Content-description">
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
};

export default Projects;
