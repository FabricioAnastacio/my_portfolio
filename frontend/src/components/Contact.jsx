import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleChenge = ({ target }) => {
    switch (target.name) {
    case 'e-mail':
      setEmail(target.value);
      break;
    case 'name':
      setName(target.value);
      break;
    default:
      setMessage(target.value);
    }
  };

  return (
    <section className="Contact">
      <form action="https://formsubmit.co/fabricio12nastacio@gmail.com​" method="POST">
        <label>
          Seu e-mail:
          <input
            name="e-mail"
            value={ email }
            type="e-mail"
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
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
