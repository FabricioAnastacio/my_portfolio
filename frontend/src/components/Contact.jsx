import React from 'react';
import '../styles/Contact.css';
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
      <section className="Contact">
        <section className="Contact-Success">
          <h1>Menssagen enviada!</h1>
          <button
            className="Btm-Success"
            onClick={ () => this.setState({ isSuccess: false }) }
          >
            Nova menssagem
          </button>
        </section>
      </section>
    );
  };

  sendFormError = () => {
    return (
      <section className="Contact">
        <section className="Contact-Error">
          <h1>
            Aconteceu um erro.
            <br />
            Preencha os campos e
            tente novamente!
          </h1>
          <button
            className="Btm-Success"
            onClick={ () => this.setState({ isError: false }) }
          >
            Retornar
          </button>
        </section>
      </section>
    );
  };

  render() {
    const { name, message, email, isSuccess, isDisable, isError } = this.state;

    if (isError) return this.sendFormError();
    if (isSuccess) return this.sendFormSuccess();

    return (
      <section className="Contact">
        <ContactForm
          isDisable={ isDisable }
          name={ name }
          email={ email }
          message={ message }
          handleChenge={ this.handleChenge }
          sendForm={ this.sendForm }
          resetForm={ this.resetForm }
        />
      </section>
    );
  }
}

export default Contact;
