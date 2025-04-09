import PropTypes from 'prop-types';
import '../styles/Projects.css';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

function Projects(props) {
  const { dataList } = props;
  const { modeThame } = useContext(AppContext);

  return (
    <div className="List-projects">
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
    </div>
  );
}

Projects.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Projects;
