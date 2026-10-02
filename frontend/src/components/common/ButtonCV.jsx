import PropTypes from 'prop-types';

function ButtonCV({ platform, modeThame }) {
  return (
    <a
      href="/CurriculoFabrício.pdf"
      download
      className={ `Button-CV-${platform}-${modeThame}` }
    >
      Baixar CV
    </a>
  );
}

ButtonCV.propTypes = {
  platform: PropTypes.string.isRequired,
  modeThame: PropTypes.number.isRequired,
};

export default ButtonCV;
