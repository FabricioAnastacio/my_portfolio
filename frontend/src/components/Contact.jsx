import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChenge = ({ target }) => {
    switch (target.name) {
    case 'email':
      setEmail(target.value);
      break;
    case 'name':
      setName(target.value);
      break;
    default:
      setMessage(target.value);
    }
  };

  const resetForm = () => {
    setEmail('');
    setMessage('');
    setName('');
  };

  return (
    <section className="Contact">
      <form action="https://formsubmit.co/fabricio12nastacio@gmail.com" method="POST">
        <label>
          Seu e-mail:
          <input
            name="email"
            value={ email }
            type="email"
            required
            onChange={ handleChenge }
          />
        </label>
        <label>
          Seu nome:
          <input
            name="name"
            value={ name }
            type="text"
            required
            onChange={ handleChenge }
          />
        </label>
        <label>
          Menssagem:
          <textarea
            name="message"
            value={ message }
            type="text"
            required
            onChange={ handleChenge }
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
          >
            Enviar
          </button>
          <button
            className="Button-clear"
            onClick={ resetForm }
          >
            Limpar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
