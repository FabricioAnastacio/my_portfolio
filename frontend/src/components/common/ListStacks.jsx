import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function ListStacks({ frontend, backend, cs }) {
  const { data: { LinksTagsImgs } } = useContext(AppContext);

  const listImgOrganization = (stackTags) => {
    const { links, create } = stackTags;

    return (
      <div className="Box-imgs">
        <div className="First-box-img">
          <img src={ links[0] } className="Tag-img" alt="React" />
        </div>
        <div className="Secund-box-img">
          {
            links.map((link, i) => (
              i > 0 && <img key={ i } className="Tag-img" src={ link } alt="tags-stack" />
            ))
          }
          {
            create.length !== 0 && create.map((item, i) => (
              <div key={ i } className="New-Icon-format">
                <img src={ item.link } alt={ item.name } />
                <p>{ item.name }</p>
              </div>
            ))
          }
        </div>
      </div>
    );
  };

  return (
    <ul>
      <li>
        <h3>Front-end</h3>
        <div className="Stack-description">
          <div>
            <p>{ frontend }</p>
          </div>
          { listImgOrganization(LinksTagsImgs.frontend) }
        </div>
      </li>
      <li>
        <h3>Back-end</h3>
        <div className="Stack-description">
          <div>
            <p>{ backend }</p>
          </div>
          { listImgOrganization(LinksTagsImgs.backend) }
        </div>
      </li>
      <li>
        <h3>Ciência da Computação</h3>
        <div className="Stack-description">
          <div>
            <p>{ cs }</p>
          </div>
          { listImgOrganization(LinksTagsImgs.cs) }
        </div>
      </li>
      <li>
        <h3>Tools</h3>
        <div className="Stack-description">
          <div>
            <p>Teste</p>
          </div>
          { listImgOrganization(LinksTagsImgs.tools) }
        </div>
      </li>
    </ul>
  );
}

ListStacks.propTypes = {
  frontend: PropTypes.string.isRequired,
  backend: PropTypes.string.isRequired,
  cs: PropTypes.string.isRequired,
};

export default ListStacks;
