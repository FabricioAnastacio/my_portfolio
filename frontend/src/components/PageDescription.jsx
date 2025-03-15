import PropTypes from 'prop-types';
import React from 'react';

export default function PageDescription({ description, modeThame }) {
  const { resume, frontend, backend, cs, resumeThow } = description;

  return (
    <div id="Page-thow">
      <hr id="Description" className={ `Hr-thame-${modeThame}` } />
      <p className="Content-description">
        { resume }
      </p>
      <div className="ScrollSecundary">
        <div>
          <img src="https://superti360.com.br/wp-content/uploads/2025/02/0-destaque-linguagens-de-programacao-2019.jpg" alt="test" className="ImgScroll" />
        </div>
        <ul>
          <li>
            <h2>Frontend</h2>
            <p>{ frontend }</p>
          </li>
          <li>
            <h2>Backend</h2>
            <p>{ backend }</p>
          </li>
          <li>
            <h2>Ciência da Computação</h2>
            <p>{ cs }</p>
          </li>
        </ul>
      </div>
      <p className="Content-description">
        { resumeThow }
      </p>
      <hr id="Projects" className={ `Hr-thame-${modeThame}` } />
    </div>
  );
}

PageDescription.propTypes = {
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  modeThame: PropTypes.number.isRequired,
};
