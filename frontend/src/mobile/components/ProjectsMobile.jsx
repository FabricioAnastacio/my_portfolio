import PropTypes from 'prop-types';
import '../style/ProjectsMobile.css';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

function ProjectsMobile(props) {
  const { dataList } = props;
  const { modeThame } = useContext(AppContext);

  return (
    <div className="List-projects-Mobile">
      <div className="Projects-title-Mobile">
        <h1>Projetos em destaque</h1>
        <hr className="Emphasis-title-Mobile" />
      </div>
      <ul className="Projects-Mobile">
        {
          dataList.map((item, i) => (
            <li key={ i } className={ `Project-${modeThame}-Mobile` }>
              <div className="Project-description-Mobile">
                <div
                  className="Project-Bunner-Mobile"
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
              </div>
              <ul className="Project-technologies-Mobile">
                {
                  item.technologies.map((tec, index) => (
                    <li key={ index }>
                      { tec }
                    </li>
                  ))
                }
              </ul>
              <h3 className="Project-Tags-Mobile">{ item.tags }</h3>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

ProjectsMobile.propTypes = {
  dataList: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default ProjectsMobile;
