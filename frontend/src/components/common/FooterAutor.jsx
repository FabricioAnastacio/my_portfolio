import PropTypes from 'prop-types';

function FooterAutor({ platform }) {
  return (
    <div className={ `Autor-${platform}` }>
      <section className="footer-bottom">
        <div className="footer-left">
          <p>&reg; 2024 FabrícioA.R.</p>
          <p>|</p>
          <p>obrigado por acessar.</p>
          <p>|</p>
          <button className="btm-home">home</button>
        </div>
        <section className="Contact-links">
          <a className="links" href="https://github.com/FabricioAnastacio" target="_blank" rel="noreferrer">
            Github
          </a>
          <a className="links" href="https://www.linkedin.com/in/far-dev/" target="_blank" rel="noreferrer">
            Linkedin
          </a>
          <a className="links" href="https://www.instagram.com/fabricio.rodrigues_2.0_/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </section>
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
