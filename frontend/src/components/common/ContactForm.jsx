import PropTypes from 'prop-types';
import React from 'react';

class ContactForm extends React.Component {
  render() {
    const {
      isDisable,
      name,
      message,
      email,
      sendForm,
      handleChenge,
    } = this.props;
    return (
      <form>
        <h1>
          Envie uma mensagem
        </h1>
        <div className="Div-form">
          <input
            name="name"
            value={ name }
            type="text"
            id="name"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
          <label htmlFor="name">
            Nome:
          </label>
        </div>
        <div className="Div-form">
          <input
            name="email"
            value={ email }
            type="email"
            id="email"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
          <label htmlFor="email">
            E-mail:
          </label>
        </div>
        <div className="Div-form">
          <textarea
            name="message"
            id="message"
            value={ message }
            type="text"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
          <label htmlFor="message">
            Menssagem:
          </label>
        </div>
        <div className="Buttons">
          <button
            className="Button-send"
            type="submit"
            onClick={ sendForm }
            disabled={ isDisable }
          >
            { isDisable ? 'Enviando...' : 'Enviar →' }
          </button>
        </div>
      </form>
    );
  }
}

ContactForm.propTypes = {
  isDisable: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  sendForm: PropTypes.func.isRequired,
  handleChenge: PropTypes.func.isRequired,
};
export default ContactForm;
