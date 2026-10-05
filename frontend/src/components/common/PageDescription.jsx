import PropTypes from 'prop-types';
import ListStacks from './ListStacks';

export default function PageDescription({ description, platform }) {
  const { resume, frontend, backend, cs, resumeThow } = description;

  return (
    <div id="Page-thow" className={ `Page-thow-${platform} portfolio-section` }>
      <section className="portfolio-section">
        <div className="timeline-item">
          <p>SOBRE</p>
        </div>
        <p className={ `Content-description-${platform}` }>
          { resume }
          <br />
          <br />
          { resumeThow }
        </p>
      </section>
      <section className={ `Page-tree-${platform} portfolio-section` }>
        <div className="timeline-item">
          <p>STACKS</p>
        </div>
        <div className="Section-Stacks">
          <h1>Stacks</h1>
          <ListStacks
            frontend={ frontend }
            backend={ backend }
            cs={ cs }
          />
        </div>
      </section>
    </div>
  );
}

PageDescription.propTypes = {
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  platform: PropTypes.string.isRequired,
};
