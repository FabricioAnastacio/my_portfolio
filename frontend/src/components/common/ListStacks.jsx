import PropTypes from 'prop-types';
import { useContext } from 'react';
import AppContext from '../../contexts/AppContext';

function ListStacks({ frontend, backend, cs, tools, setCertOpem }) {
  const { data: { LinksTagsImgs } } = useContext(AppContext);

  const listCertificates = (stack) => {
    const { certificates } = stack;
    return (
      <div className="Galery-Certificates">
        {
          certificates.length !== 0 && certificates.map((c, i) => (
            <button
              key={ i }
              onClick={ () => setCertOpem(true, c) }
              className="boxLink-certificates"
              title="Visualizar"
            >
              <img src={ c.linkImg } alt={ c.name } />
              <p>{ `${c.name}` }</p>
            </button>
          ))
        }
      </div>
    );
  };

  const listImgOrganization = (stack) => {
    const { links, create } = stack;

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
        <div className="Stack-description">
          <div className="Stack-box-description-tags">
            <h3>Front-end</h3>
            <p>{ frontend }</p>
            { listImgOrganization(LinksTagsImgs.frontend) }
          </div>
          { listCertificates(LinksTagsImgs.frontend) }
        </div>
      </li>
      <li>
        <div className="Stack-description">
          <div className="Stack-box-description-tags">
            <h3>Back-end</h3>
            <p>{ backend }</p>
            { listImgOrganization(LinksTagsImgs.backend) }
          </div>
          { listCertificates(LinksTagsImgs.backend) }
        </div>
      </li>
      <li>
        <div className="Stack-description">
          <div className="Stack-box-description-tags">
            <h3>Ciência da Computação</h3>
            <p>{ cs }</p>
            { listImgOrganization(LinksTagsImgs.cs) }
          </div>
          { listCertificates(LinksTagsImgs.cs) }
        </div>
      </li>
      <li>
        <div className="Stack-description">
          <div className="Stack-box-description-tags">
            <h3>C#/.NET</h3>
            <p>{ tools }</p>
            { listImgOrganization(LinksTagsImgs.tools) }
          </div>
          { listCertificates(LinksTagsImgs.tools) }
        </div>
      </li>
    </ul>
  );
}

ListStacks.propTypes = {
  frontend: PropTypes.string.isRequired,
  backend: PropTypes.string.isRequired,
  cs: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
  setCertOpem: PropTypes.func.isRequired,
};

export default ListStacks;
