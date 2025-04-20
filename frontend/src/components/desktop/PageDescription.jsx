import PropTypes from 'prop-types';
import React from 'react';
import ListStacks from '../common/ListStacks';

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
        <ListStacks
          frontend={ frontend }
          backend={ backend }
          cs={ cs }
        />
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
