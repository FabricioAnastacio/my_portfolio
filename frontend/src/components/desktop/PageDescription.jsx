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
      <div className={ `ScrollSecundary-${modeThame}` }>
        <div className="Rail">
          <div className="ImgScroll">
            <h1>Desenvolvedor Full_Stack</h1>
            <div className="Image-Scroll" />
          </div>
        </div>
        <ul>
          <li>
            <hr />
            <h2>Front-end</h2>
            <p>{ frontend }</p>
          </li>
          <li>
            <hr />
            <h2>Back-end</h2>
            <p>{ backend }</p>
          </li>
          <li>
            <hr />
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
