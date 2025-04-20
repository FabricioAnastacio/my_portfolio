import PropTypes from 'prop-types';

function FooterAutor({ platform }) {
  return (
    <div className={ `Autor-${platform}` }>
      <section>
        <p>FabrícioA.R.&reg; 2024</p>
        <p>|</p>
        <p>Obrigado por acessar.</p>
      </section>
      <div className={ `Versiculo-${platform}` }>
        <p>&#34;Conheceis a verdade, e a verdade vos libertará&#34;</p>
        <p>João 8:32</p>
      </div>
    </div>
  );
}

FooterAutor.propTypes = {
  platform: PropTypes.string.isRequired,
};

export default FooterAutor;
