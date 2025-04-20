import PropTypes from 'prop-types';

function FooterAutor({ platform }) {
  return (
    <div className={ `Autor-${platform}` }>
      <p>Fabrício&reg; 2024</p>
      <p>|</p>
      <p>Obrigado por acessar.</p>
    </div>
  );
}

FooterAutor.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default FooterAutor;
