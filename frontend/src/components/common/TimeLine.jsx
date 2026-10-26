import PropTypes from 'prop-types';
import '../../layouts/desktop/TimeLine.css';
import { useEffect, useState } from 'react';

export default function Timeline({ platform, timeline }) {
  const stateCurrent = 'Etapa atual';
  const [progress, setProgress] = useState(0);
  const [stageSelect, setStage] = useState({
    id: 0,
    title: '',
    subTitle: '',
    links: { name: '', link: '' },
    status: '',
    description: '',
  });

  useEffect(() => {
    const valueCalc = 102;
    const currentIndex = timeline.findIndex((t) => t.status === stateCurrent);
    setProgress(
      currentIndex >= 0 && timeline.length > 1
        ? (currentIndex / (timeline.length - 1)) * valueCalc
        : 0,
    );
    setStage(timeline[currentIndex]);
  }, [timeline]);

  const getStageSelect = (selected) => {
    setStage(selected);
  };
  console.log(progress);
  return (
    <section className={ `TimeLineSection-${platform} portfolio-section` }>
      <div className="timeline-item">
        <p>TIMELINE</p>
      </div>
      <div className="Title">
        <h1>Minha trajetória</h1>
        <h3>Em constante evolução.</h3>
      </div>
      <div className={ `TimeLine-${platform}` }>
        <div className="Line__track" />
        <div
          className="Line__progress"
          style={ { width: `${progress}%` } }
        />
        <div className="TimeLine-Stages">
          {
            timeline.map((stage, i) => (
              <div
                key={ i }
                className={
                  `TimeLine-Stage
                  ${stage.status === stateCurrent && 'Stege-current'}
                  `
                }
              >
                <span
                  key={ i }
                  className={
                    `Line-circle
                    ${stage.status === 'Concluída' && 'Circle-completed'}
                    ${stage.status === stateCurrent && 'Circle-current'}
                    `
                  }
                />
                <div
                  className="Stage"
                  onClick={ () => getStageSelect(stage) }
                  aria-hidden
                >
                  <h5>
                    { stage.title }
                  </h5>
                  <h5>
                    { stage.subTitle }
                  </h5>
                  <p>
                    { stage.status }
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="sectionStege-Current">
        <div className="Title-status">
          <h3>{ stageSelect.title }</h3>
          <h6>{ stageSelect.status }</h6>
        </div>
        <h5 className="Stage-title">{ stageSelect.subTitle }</h5>
        <p>{ stageSelect.description }</p>
        <a
          href={ stageSelect.links.link }
          className="LinkSectionStege"
          target="_blank"
          rel="noreferrer"
          title={ `Acessar ${stageSelect.links.name}` }
        >
          { stageSelect.links.name }
        </a>
      </div>
    </section>
  );
}

Timeline.propTypes = {
  platform: PropTypes.string.isRequired,
  timeline: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
