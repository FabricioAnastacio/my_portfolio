import PropTypes from 'prop-types';
import React from 'react';
import iconSend from '../../assets/imgs/icons/icons8-enviar-48.png';
import iconBroom from '../../assets/imgs/icons/icons8-broom-48.png';

class ContactForm extends React.Component {
  render() {
    const {
      isDisable,
      name,
      message,
      email,
      sendForm,
      resetForm,
      handleChenge,
    } = this.props;
    return (
      <form>
        <h1>
          Vamos conversar?
          <br />
          Mande um e-mail:
        </h1>
        <label>
          Seu e-mail:
          <input
            name="email"
            placeholder="seu@email.com"
            value={ email }
            type="email"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
        </label>
        <label>
          Seu nome:
          <input
            name="name"
            placeholder="Nome Pessoal"
            value={ name }
            type="text"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
        </label>
        <label>
          Menssagem:
          <textarea
            placeholder="Adicione sua menssagem"
            name="message"
            value={ message }
            type="text"
            required
            onChange={ handleChenge }
            disabled={ isDisable }
          />
        </label>
        <input
          type="hidden"
          name="_subject"
          value="Novo contato!"
        />
        <input
          type="text"
          name="_honey"
          style={ { display: 'none' } }
        />
        <div className="Buttons">
          <button
            className="Button-send"
            type="submit"
            onClick={ sendForm }
            disabled={ isDisable }
          >
            <img src={ iconSend } alt="Enviar" />
            { isDisable ? 'Enviando...' : 'Enviar' }
          </button>
          <button
            className="Button-clear"
            onClick={ resetForm }
            disabled={ isDisable }
          >
            <img src={ iconBroom } alt="Limpar" />
            Limpar
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
  resetForm: PropTypes.func.isRequired,
  handleChenge: PropTypes.func.isRequired,
};
export default ContactForm;
