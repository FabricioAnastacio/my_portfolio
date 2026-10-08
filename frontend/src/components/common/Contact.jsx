import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      message: '',
      isDisable: false,
      isSuccess: false,
      isError: false,
    };
  }

  handleChenge = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  sendForm = async (event) => {
    event.preventDefault();
    const { message, name, email } = this.state;
    this.setState({ isDisable: true });
    try {
      if (name === '') throw new Error();

      await fetch('https://formsubmit.co/ajax/fabricio12nastacio@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          message: `Menssagem: ${message}. (email: ${email})`,
        }),
      });

      this.setState({ isSuccess: true });
    } catch (e) {
      this.setState({ isError: true });
    } finally {
      this.setState({ isDisable: false });
      this.resetForm(event);
    }
  };

  resetForm = (event) => {
    event.preventDefault();
    this.setState({
      email: '',
      name: '',
      message: '',
    });
  };

  sendFormSuccess = () => {
    return (
      <section>
        <section className="Contact-Success">
          <h3>Menssagen enviada com sucesso!</h3>
          <p>Irei retornar o mais rapido possivel</p>
        </section>
      </section>
    );
  };

  sendFormError = () => {
    return (
      <section>
        <section className="Contact-Error">
          <h3>
            Aconteceu algum erro.
            <br />
          </h3>
          <p>
            Preencha os campos e
            tente novamente
          </p>
        </section>
      </section>
    );
  };

  render() {
    const { name, message, email, isSuccess, isDisable, isError } = this.state;
    const { setTabEmailClose } = this.props;

    return (
      <section className="Contact">
        <button
          onClick={ setTabEmailClose }
          className="close"
          aria-label="Fechar formulário de contato"
        >
          ×
        </button>
        <div className="Card-email">
          <ContactForm
            isDisable={ isDisable }
            name={ name }
            email={ email }
            message={ message }
            handleChenge={ this.handleChenge }
            sendForm={ this.sendForm }
            resetForm={ this.resetForm }
          />
          <div className="response-email">
            { isSuccess && this.sendFormSuccess() }
            { isError && this.sendFormError() }
            {
              (!isSuccess && !isError) && (
                <div>
                  <p>Envie sua mensagem e retornarei o mais breve possível.</p>
                </div>
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

Contact.propTypes = {
  setTabEmailClose: PropTypes.func.isRequired,
};

export default Contact;
