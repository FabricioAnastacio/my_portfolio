import PropTypes from 'prop-types';
import inconCV from '../../assets/imgs/icons/icons8-cv-48.png';

function ButtonCV({ platform, modeThame }) {
  return (
    <a
      href="/CurriculoFabrício.pdf"
      download
      className={ `Button-CV-${platform}-${modeThame}` }
    >
      <button>
        <img src={ inconCV } alt="Curriculo" />
        Baixar CV
      </button>
    </a>
  );
}

ButtonCV.propTypes = {
  platform: PropTypes.string.isRequired,
  modeThame: PropTypes.number.isRequired,
};

export default ButtonCV;
