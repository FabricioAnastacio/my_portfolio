import PropTypes from 'prop-types';
import { useState } from 'react';
import ListStacks from './ListStacks';

export default function PageDescription({ description, platform }) {
  const { resume, frontend, backend, cs, tools, resumeThow } = description;
  const [openCert, setOpenCert] = useState(false);
  const [certificate, setCertificate] = useState(
    { name: '', linkImg: '', linkDirect: '' },
  );

  const setCertOpem = (isOpen, c) => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    setCertificate(c);
    setOpenCert(isOpen);
  };

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
      <section id="Stack" className={ `Page-tree-${platform} portfolio-section` }>
        <div className="timeline-item">
          <p>STACK</p>
        </div>
        <div className="Section-Stacks">
          <h1>Stack</h1>
          <ListStacks
            frontend={ frontend }
            backend={ backend }
            cs={ cs }
            tools={ tools }
            setCertOpem={ setCertOpem }
          />
        </div>
      </section>
      {
        openCert && (
          <section className="modal-certificate">
            <div className="box-modal">
              <button
                onClick={
                  () => setCertOpem(!openCert, { name: '', linkImg: '', linkDirect: '' })
                }
                className="close"
                title="Fechar"
              >
                ×
              </button>
              <img
                className="certificate-img"
                src={ certificate.linkImg }
                alt={ certificate.name }
              />
              <div className="c-name-link">
                <h3>{ certificate.name }</h3>
                <a
                  href={ certificate.linkDirect }
                  target="_blank"
                  rel="noreferrer"
                  title="Acessar"
                >
                  <img className="link-Accredible" src="https://cdn.prod.website-files.com/65f2558d9f3ac6c64f1b8bb1/661b0755122a164fb64071dd_Logo.webp" alt="Accredible" />
                </a>
              </div>
            </div>
          </section>
        )
      }
    </div>
  );
}

PageDescription.propTypes = {
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  platform: PropTypes.string.isRequired,
};
