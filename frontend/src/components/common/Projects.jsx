import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

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
        {
          dataList.map((item, i) => (
            <li key={ i } className={ `Project-${modeThame}-${platform}` }>
              <div className={ `Project-description-${platform}` }>
                <div
                  className={ `Project-Bunner-${platform}` }
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
                <ul className={ `Project-technologies-${platform}` }>
                  {
                    item.technologies.map((tec, index) => (
                      <li key={ index }>
                        { tec }
                      </li>
                    ))
                  }
                </ul>
              </div>
              <h3 className={ `Project-Tags-${platform}` }>{ item.tags }</h3>
            </li>
          ))
        }
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
