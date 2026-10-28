import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function Timeline({ platform, timeline }) {
  const stateCurrent = 'Etapa atual';
  const maxStages = 4;
  const [progress, setProgress] = useState(0);
  const [stageSelect, setStage] = useState({
    id: 0,
    title: '',
    imgIcon: '',
    subTitle: '',
    links: { name: '', link: '' },
    status: '',
    description: '',
    dataI: 'xx/xx/xxxx',
    dataF: 'xx/xx/xxxx',
  });

  useEffect(() => {
    const valueCalc = 99;
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

  const getFormatData = (dataI, dataF, format) => {
    const monthShort = [
      'Janeiro', 'Fevereiro', 'Março', 'Abriu', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];
    const dataIForm = [
      monthShort[Number(dataI.split('/')[0]) - 1],
      dataI.split('/')[2],
    ];
    const dataFForm = [
      monthShort[Number(dataF.split('/')[0]) - 1],
      dataF.split('/')[2],
    ];
    switch (format) {
    case 1: {
      const dta = dataIForm[1] === dataFForm[1]
        ? `${dataIForm[0]} - ${dataFForm[0]} de ${dataFForm[1]}`
        : `${dataIForm[0]} de ${dataIForm[1]} — ${dataFForm[0]} de ${dataFForm[1]}`;
      return dta;
    }
    case 2: {
      const monthIShort = dataIForm[0].slice(0, maxStages - 1);
      const monthFShort = dataFForm[0].slice(0, maxStages - 1);
      const dta = dataIForm[1] === dataFForm[1]
        ? `${monthIShort}. - ${monthFShort}. ${dataFForm[1]}`
        : `${monthIShort}. ${dataIForm[1]} — ${monthFShort}. ${dataFForm[1]}`;
      return dta;
    }
    default:
      return `${dataI} - ${dataF}`;
    }
  };

  return (
    <section id="TimeLine" className={ `TimeLineSection-${platform} portfolio-section` }>
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
          style={
            platform === 'Desktop'
              ? { width: `${progress}%` }
              : { height: `${progress}%` }
          }
        />
        <div className="TimeLine-Stages">
          {
            timeline.map((stage, i) => (
              <div
                key={ i }
                className={
                  `TimeLine-Stage
                  ${stage.status === stateCurrent && 'Stege-current'}
                  ${stage.status === 'Próximo objetivo' && 'Stege-next'}
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
                {
                  i !== maxStages && (
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
                      <h6>
                        { stage.status }
                      </h6>
                      <h6>
                        {
                          stage.dataI
                          && getFormatData(stage.dataI, stage.dataF, 2)
                        }
                      </h6>
                    </div>
                  )
                }
              </div>
            ))
          }
        </div>
      </div>
      <div className="sectionStege-Current">
        <div className="Title-status">
          <img className="Icon-logo" src={ stageSelect.imgIcon } alt="Icon" />
          <div>
            <h2>{ stageSelect.title }</h2>
            <h5
              className="Stage-title"
            >
              { `${stageSelect.subTitle} · ${stageSelect.status}` }
            </h5>
          </div>
        </div>
        <h5 className="Stage-title">
          { getFormatData(stageSelect.dataI, stageSelect.dataF, 1) }
        </h5>
        <p>{ stageSelect.description }</p>
        <a
          href={ stageSelect.links.link }
          className="LinkSectionStege"
          target="_blank"
          rel="noreferrer"
          title={ `Acessar ${stageSelect.links.name}` }
        >
          { `${stageSelect.links.name} ↗` }
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
