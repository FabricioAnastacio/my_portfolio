import '../styles/Contact.css';

function Contact() {
  return (
    <section className="Contact">
      <form action="">
        <label>
          Seu e-mail:
          <input type="text" />
        </label>
        <label>
          Assunto:
          <input type="text" />
        </label>
        <label>
          Descrição:
          <textarea type="text" />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
