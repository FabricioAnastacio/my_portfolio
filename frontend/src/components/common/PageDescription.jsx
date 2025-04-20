import PropTypes from 'prop-types';
import React from 'react';
import ListStacks from './ListStacks';

export default function PageDescription({ description, modeThame, platform }) {
  const { resume, frontend, backend, cs, resumeThow } = description;

  const railDesktopBar = () => {
    return (
      <div className="Rail">
        <div className="ImgScroll">
          <h1>Desenvolvedor Full_Stack</h1>
          <div className="Image-Scroll" />
        </div>
      </div>
    );
  };

  return (
    <div id="Page-thow" className={ `Page-thow-${platform}` }>
      <p className={ `Content-description-${platform}` }>
        { resume }
      </p>
      <div className={ `ScrollSecundary-${platform}` }>
        {
          platform === 'Desktop'
            ? railDesktopBar()
            : <h1 className="Title-Description">Desenvolvedor Full_Stack</h1>
        }
        <ListStacks
          frontend={ frontend }
          backend={ backend }
          cs={ cs }
        />
      </div>
      <p className={ `Content-description-${platform}` }>
        { resumeThow }
      </p>
      <hr id="Projects" className={ `Hr-thame-${modeThame}` } />
    </div>
  );
}

PageDescription.propTypes = {
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  modeThame: PropTypes.number.isRequired,
  platform: PropTypes.string.isRequired,
};
