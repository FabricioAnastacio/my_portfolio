import PropTypes from 'prop-types';
import React from 'react';
import ListStacks from '../common/ListStacks';

export default function PageDescriptionMobile({ description, modeThame }) {
  const { resume, frontend, backend, cs, resumeThow } = description;

  return (
    <div id="Page-thow-Mobile">
      <p id="Description" className="Content-description-Mobile">
        { resume }
      </p>
      <div className="ScrollSecundary-Mobile">
        <h1 className="Title-Description">Desenvolvedor Full_Stack</h1>
        <ListStacks
          frontend={ frontend }
          backend={ backend }
          cs={ cs }
        />
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
