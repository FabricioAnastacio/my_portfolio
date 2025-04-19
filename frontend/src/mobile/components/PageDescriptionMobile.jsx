import PropTypes from 'prop-types';
import React from 'react';

export default function PageDescriptionMobile({ description, modeThame }) {
  const { resume, frontend, backend, cs, resumeThow } = description;

  return (
    <div id="Page-thow-Mobile">
      <p id="Description" className="Content-description-Mobile">
        { resume }
      </p>
      <div className={ `ScrollSecundary-${modeThame}-Mobile` }>
        <h1 className="Title-Description">Desenvolvedor Full_Stack</h1>
        <ul>
          <li>
            <h2>Front-end</h2>
            <p>{ frontend }</p>
            <hr />
          </li>
          <li>
            <h2>Back-end</h2>
            <p>{ backend }</p>
            <hr />
          </li>
          <li>
            <h2>Ciência da Computação</h2>
            <p>{ cs }</p>
            <hr />
          </li>
        </ul>
      </div>
      <p className="Content-description-Mobile">
        { resumeThow }
      </p>
      <hr id="Projects" className={ `Hr-thame-${modeThame}` } />
    </div>
  );
}

PageDescriptionMobile.propTypes = {
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  modeThame: PropTypes.number.isRequired,
};
