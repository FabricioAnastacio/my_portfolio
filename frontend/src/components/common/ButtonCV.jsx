import PropTypes from 'prop-types';

function ButtonCV({ platform, modeThame }) {
  return (
    <a
      href="/CurriculoFabrício.pdf"
      download
      className={ `Button-CV-${platform}-${modeThame}` }
    >
      <button>
        Baixar CV
      </button>
    </a>
  );
}

ButtonCV.propTypes = {
  platform: PropTypes.string.isRequired,
  modeThame: PropTypes.string.isRequired,
};

export default ButtonCV;
