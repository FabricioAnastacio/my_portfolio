import PropTypes from 'prop-types';

function ButtonCV({ platform }) {
  return (
    <a
      href="/CurriculoFabrício.pdf"
      download
      className={ `Button-CV-${platform}` }
    >
      Baixar CV
    </a>
  );
}

ButtonCV.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default ButtonCV;
